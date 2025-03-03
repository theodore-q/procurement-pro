<script>
    import { createEventDispatcher } from "svelte";
    import { slide, scale } from "svelte/transition";
    
    const dispatch = createEventDispatcher();
  
    // Initialize the Supabase client using the CDN-loaded global variable
    const supabaseUrl = "https://layjfagqfjcweysomkqa.supabase.co";
    const supabaseClient = window.supabase.createClient(
      supabaseUrl,
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxheWpmYWdxZmpjd2V5c29ta3FhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcyNzQ1ODIsImV4cCI6MjAwMjg1MDU4Mn0.DNeXOTJFZyVjGjqhTOYJ4GUDWLEgTG8crSzktrW0EX8"
    );
  
    // Export files so the parent can bind to them.
    export let files = [];
    
    let isDragging = false;
    let dragCounter = 0;
    let uploading = false;
    let uploadCompleted = false;
    let emailSubmitted = false;
    let email = "";
    let emailSubmitAttempted = false;
    
    // New error message variable for server errors
    let errorMsg = "";
    
    // Array to store the file identifiers (in this case, the file paths)
    let uploadedFilePaths = [];
    
    // Enhanced email validation: disallow common personal domains.
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(email)) return false;
      const disallowedDomains = ["gmail.com", "hotmail.com", "yahoo.com"];
      const domain = email.split("@")[1].toLowerCase();
      return !disallowedDomains.includes(domain);
    }
    
    $: emailError =
      emailSubmitAttempted && email && !validateEmail(email)
        ? "Please enter a valid business email address."
        : "";
    
    function handleDragEnter(event) {
      event.preventDefault();
      dragCounter++;
      if (
        event.dataTransfer &&
        event.dataTransfer.types &&
        event.dataTransfer.types.indexOf("Files") !== -1
      ) {
        isDragging = true;
      }
    }
    
    function handleDragLeave(event) {
      event.preventDefault();
      dragCounter--;
      if (dragCounter === 0) {
        isDragging = false;
      }
    }
    
    function handleDragOver(event) {
      event.preventDefault();
    }
    
    function handleDrop(event) {
      event.preventDefault();
      dragCounter = 0;
      isDragging = false;
      if (event.dataTransfer && event.dataTransfer.files) {
        files = [...files, ...Array.from(event.dataTransfer.files)];
      }
    }
    
    function handleFileSelect(event) {
      const selectedFiles = event.target.files;
      if (selectedFiles) {
        files = [...files, ...Array.from(selectedFiles)];
      }
    }
    
    // Remove file from the list at a given index
    function removeFile(index) {
      files = files.filter((_, i) => i !== index);
    }
    
    function closeOverlay() {
      dispatch("close");
    }
    
    async function handleUpload() {
      if (files.length === 0) return;
      uploading = true;
      errorMsg = "";
      // Reset uploadedFilePaths for this upload batch.
      uploadedFilePaths = [];
      const startTime = Date.now();
      const minTime = 2000; // Minimum upload time in milliseconds
      try {
        // Loop through files and upload each one
        for (const file of files) {
          // Create a unique file path; you can customize this logic
          const filePath = `uploads/${Date.now()}_${file.name}`;
          const { data, error } = await supabaseClient.storage
            .from("pub-write") // Replace with your bucket name
            .upload(filePath, file);
          if (error) {
            console.error("Error uploading file", file.name, error);
            throw error;
          }
          // Save the file identifier (using filePath as an identifier)
          uploadedFilePaths.push(filePath);
        }
        console.log("Upload results:", uploadedFilePaths);
        dispatch("upload", { files: uploadedFilePaths, report: "File upload complete" });
        uploadCompleted = true;
      } catch (error) {
        errorMsg = error.message || "An error occurred during upload.";
        console.error("Upload error:", error);
      } finally {
        // Artificial delay: wait until minTime has elapsed
        const elapsed = Date.now() - startTime;
        if (elapsed < minTime) {
          await new Promise(resolve => setTimeout(resolve, minTime - elapsed));
        }
        uploading = false;
      }
    }
    
    async function handleSendEmail() {
      emailSubmitAttempted = true;
      if (!validateEmail(email)) return;
      
      // Insert the email and associated file IDs into the "emails" table
      const { data, error } = await supabaseClient
        .from("emails")
        .insert([{ email, file_ids: uploadedFilePaths }]);
        
      if (error) {
        console.error("Error capturing email:", error);
        errorMsg = error.message || "Error saving email information.";
        return;
      }
      
      dispatch("sendEmail", { email });
      email = "";
      emailSubmitted = true;
    }
  </script>
  
  <style>
    @keyframes dotFade {
      0%, 20% { opacity: 0; }
      50%, 100% { opacity: 1; }
    }
    .dot {
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      background-color: currentColor;
      border-radius: 50%;
      margin-left: 0.25rem;
      animation: dotFade 1.5s infinite;
    }
    .dot:nth-child(1) { animation-delay: 0s; }
    .dot:nth-child(2) { animation-delay: 0.3s; }
    .dot:nth-child(3) { animation-delay: 0.6s; }
    .error-message {
      color: #e3342f;
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }
    .disabled-btn {
      opacity: 0.5;
    }
    /* Style for the remove button */
    .remove-btn {
      background: none;
      border: none;
      color: #e3342f;
      font-weight: bold;
      margin-left: 0.5rem;
      cursor: pointer;
    }
  </style>
  
  <svelte:window 
    on:dragenter={handleDragEnter} 
    on:dragleave={handleDragLeave} 
    on:dragover={handleDragOver} 
    on:drop={handleDrop} 
  />
  
  <!-- Animate overlay opening with a scale transition -->
  <div class="fixed inset-0 z-50 flex items-center justify-center pointer-events-auto" transition:scale={{ duration: 300, start: 0.8 }}>
    <div 
      class="relative mx-3 w-full max-w-2xl my-8 flex flex-col items-center justify-center text-center border-4 border-dashed rounded-lg transition-all duration-200 p-8 bg-white bg-opacity-90"
      class:border-blue-500={isDragging}
    >
      <button class="absolute top-4 right-4 text-gray-700 hover:text-gray-900" on:click={closeOverlay}>
        Close
      </button>
    
      {#if !uploadCompleted && !emailSubmitted}
        <!-- Main Drag & Drop UI -->
        <div transition:slide={{ duration: 300 }} class="relative flex flex-col items-center space-y-6">
          <p class="text-2xl font-semibold">Drag &amp; Drop your tender documents here</p>
          <p class="text-lg">or</p>
          <div class="flex flex-col items-center space-y-2">
            <input type="file" class="hidden" id="file-upload" on:change={handleFileSelect} multiple />
            <label for="file-upload" class="cursor-pointer bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition">
              Select Files
            </label>
            <p class="text-sm text-gray-600">Supported file types: PDF, DOCX</p>
          </div>
          
          {#if files.length > 0}
            <div class="w-full">
              <p class="font-bold">Uploaded Files:</p>
              <ul class="list-disc list-inside">
                {#each files as file, index}
                  <li class="flex items-center justify-between">
                    <span>{file.name}</span>
                    <!-- Remove button -->
                    <button class="remove-btn" on:click={() => removeFile(index)}>×</button>
                  </li>
                {/each}
              </ul>
              {#if errorMsg}
                <div class="error-message mt-2">{errorMsg}</div>
              {/if}
            </div>
          {/if}
          
          <div class="inline-block group">
            <button 
              on:click={handleUpload}
              class="inline-block bg-green-500 text-white px-6 py-3 rounded-full font-semibold transition hover:bg-green-600 { (files.length === 0 || uploading) ? 'disabled-btn' : '' }"
            >
              {#if uploading}
                <div class="flex items-center space-x-2">
                  <svg class="w-8 h-8 animate-spin text-white" viewBox="0 0 50 50">
                    <path class="opacity-75" fill="currentColor" d="M25 5a20 20 0 0 1 20 20h-5a15 15 0 0 0-15-15V5z"></path>
                  </svg>
                  <span class="text-sm">
                    Processing
                    <span class="inline-flex space-x-1 ml-1">
                      <span class="dot"></span>
                      <span class="dot"></span>
                      <span class="dot"></span>
                    </span>
                  </span>
                </div>
              {:else}
                Upload and get report
              {/if}
            </button>
            {#if files.length === 0 && !uploading}
              <span class="absolute left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition">
                Upload a file first.
              </span>
            {/if}
          </div>
    
        </div>
      {:else if uploadCompleted && !emailSubmitted}
        <!-- Email form UI -->
        <div transition:slide={{ duration: 300 }} class="w-full flex flex-col items-center space-y-4">
          <p class="font-semibold text-lg">Your report is being processed</p>
          <p class="font-semibold">Enter your email to receive the report when it's ready:</p>
          <div class="flex flex-col items-center">
            <div class="flex justify-center">
              <input 
                type="email" 
                bind:value={email} 
                placeholder="you@example.com" 
                class="w-64 border border-gray-300 px-4 py-2 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                on:click={handleSendEmail}
                class="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 transition { !validateEmail(email) ? 'disabled-btn' : '' }"
              >
                Send Report
              </button>
            </div>
            {#if emailSubmitAttempted && emailError}
              <div class="error-message">{emailError}</div>
            {/if}
            {#if errorMsg}
              <div class="error-message">{errorMsg}</div>
            {/if}
          </div>
        </div>
      {:else}
        <!-- Success Screen UI -->
        <div transition:slide={{ duration: 300 }} class="w-full flex flex-col items-center space-y-4">
          <svg class="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <p class="font-semibold text-lg text-green-600">Success!</p>
          <p class="text-sm">Your report will be sent when it is ready.</p>
          <button 
            on:click={closeOverlay}
            class="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
          >
            Close
          </button>
        </div>
      {/if}
    </div>
  </div>
  
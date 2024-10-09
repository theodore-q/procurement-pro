<!-- +layout.svelte -->
<script context="module">
    // Import your CSS file at the module level to avoid mixing with the client-side code
    import "../app.css"; // Path to the Tailwind CSS file
  </script>
  
  <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-WEWDM5YQ4C"></script>
  </head>
  
  <script>
    import { onMount } from 'svelte';
  
    // Client-side only logic
    onMount(() => {
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-WEWDM5YQ4C');
    });
  </script>
  
  <slot></slot>
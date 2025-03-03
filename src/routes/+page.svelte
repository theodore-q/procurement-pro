<script>
	let menuOpen = false;
	let showUpload = false;
	let files = [];
	import Draganddrop from "../components/draganddrop.svelte";
</script>
  
<style>
	@keyframes gradientAnimation {
	  0% { background-position: 0% 50%; }
	  50% { background-position: 100% 50%; }
	  100% { background-position: 0% 50%; }
	}
	.animate-gradient {
	  background-size: 200% 200%;
	  animation: gradientAnimation 15s ease infinite;
	}
</style>
  
<!-- Header with Mobile Burger Menu -->
<header class="bg-white shadow">
	<nav class="container mx-auto px-6 py-5 flex justify-between items-center">
		<!-- <div class="flex bg-[url(')] "></div> -->
		<img src="logo.png" alt="procument pro logo" class="h-11 bg-center bg-no-repeat">
		<!-- Desktop Menu -->
		<ul class="hidden md:flex space-x-6">
			<li><a href="#about" class="hover:text-blue-500">About</a></li>
			<li><a href="#contact" class="hover:text-blue-500">Contact</a></li>
			<li><a href="#contact" class="hover:text-blue-500">Sign up (Coming soon)</a></li>
		</ul>
		<!-- Mobile Burger Button -->
		<button class="md:hidden focus:outline-none" on:click={() => menuOpen = !menuOpen}>
			<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</nav>
	<!-- Mobile Menu: visible only when menuOpen is true -->
	{#if menuOpen}
		<div class="md:hidden bg-white">
			<ul class="flex flex-col space-y-4 px-4 py-4">
				<li><a href="#about" class="hover:text-blue-500">About</a></li>
				<li><a href="#contact" class="hover:text-blue-500">Contact</a></li>
				<li><a href="#contact" class="hover:text-blue-500">Sign up (Coming soon)</a></li>
			</ul>
		</div>
	{/if}
</header>
  
<!-- Hero Section with Animated Gradient Background -->
<main>
	<section class="relative bg-gradient-to-r from-indigo-600 via-blue-500 to-sky-400 animate-gradient text-white py-20">
		<div class="container mx-auto px-4 text-center">
			<h1 class="text-5xl md:text-6xl font-bold">
				Enterprise-grade AI Tender Scoring
			</h1>
			<p class="mt-4 text-xl md:text-2xl">
				Test, Inspect, and Create your tenders with industry specific AI workflows.
			</p>
			<p class="mt-6 text-xl md:text-2xl">
				Get started:
			</p>
			<!-- Exciting CTA button for uploading tender response -->
			<button 
				on:click={() => showUpload = true} 
				class="mt-4 inline-block bg-gradient-to-r from-orange-400 to-orange-500 text-white px-10 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-200">
				Upload Your Tender Response
			</button>
			
			<!-- Optional placeholder image -->
			<div class="mt-10 p-3.5 w-fit rounded-lg border-2 mx-auto shadow-lg">
				<img src="./screenshot.png" alt="Illustration of AI Quality Control Process" class="mx-auto rounded-lg">
			</div>
		</div>
	</section>
  
	<!-- Features Section with Placeholder Images -->
	<section id="features" class="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
		<div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-200">
			<img src="power.webp" alt="Performance illustration" class="mb-4 rounded w-full">
			<h2 class="text-2xl font-bold mb-2">Performance</h2>
			<p class="text-gray-700">
				Efficiently scan tender documents and extract key data points to optimize your submission performance quickly and reliably.
			</p>
		</div>
		<div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-200">
			<img src="compliant.webp" alt="Safety illustration" class="mb-4 rounded">
			<h2 class="text-2xl font-bold mb-2">Safety</h2>
			<p class="text-gray-700">
				Automatically detect and flag discrepancies and potential risks in tender data to ensure your proposals remain error-free.
			</p>
		</div>
		<div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-200">
			<img src="safe.webp" alt="Security illustration" class="mb-4 rounded">
			<h2 class="text-2xl font-bold mb-2">Security</h2>
			<p class="text-gray-700">
				Safeguard your sensitive tender documents with robust security measures that ensure complete data privacy and compliance.
			</p>
		</div>
		<div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-200">
			<img src="accurate.webp" alt="Accuracy illustration" class="mb-4 rounded">
			<h2 class="text-2xl font-bold mb-2">Accuracy</h2>
			<p class="text-gray-700">
				Leverage intelligent scoring to evaluate your tender responses, ensuring your proposal is precisely aligned with the brief.
			</p>
		</div>
	</section>
</main>
  
<!-- Drag and Drop Overlay: appears when showUpload is true -->
{#if showUpload}
	<Draganddrop bind:files on:close={() => showUpload = false} />
{/if}
  
<!-- Footer -->
<footer class="bg-gray-800 text-white py-8">
	<div class="container mx-auto px-4 text-center">
		<p>&copy; 2025 YourCompany. All rights reserved.</p>
		<ul class="flex justify-center space-x-4 mt-4">
			<li><a href="#terms" class="hover:underline">Terms of Use</a></li>
			<li><a href="#privacy" class="hover:underline">Privacy Policy</a></li>
		</ul>
	</div>
</footer>

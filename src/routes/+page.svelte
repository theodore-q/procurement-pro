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
		<img src="logo.png" alt="Procurement Pro Logo – Public Sector Contract Solutions" class="h-11 bg-center bg-no-repeat">
		<!-- Desktop Menu -->
		<ul class="hidden md:flex space-x-6">
			<li><a href="#about" class="hover:text-blue-500">About</a></li>
			<li><a href="#contact" class="hover:text-blue-500">Contact</a></li>
			<li><a href="#signup" class="hover:text-blue-500">Sign Up (Coming Soon)</a></li>
		</ul>
		<!-- Mobile Burger Button -->
		<button class="md:hidden focus:outline-none" on:click={() => menuOpen = !menuOpen}>
			<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</nav>
	<!-- Mobile Menu -->
	{#if menuOpen}
		<div class="md:hidden bg-white">
			<ul class="flex flex-col space-y-4 px-4 py-4">
				<li><a href="#about" class="hover:text-blue-500">About</a></li>
				<li><a href="#contact" class="hover:text-blue-500">Contact</a></li>
				<li><a href="#signup" class="hover:text-blue-500">Sign Up (Coming Soon)</a></li>
			</ul>
		</div>
	{/if}
</header>
  
<!-- Hero Section with SEO-Friendly Meta and Optimized Headings -->
<svelte:head>
	<title>Winning Public Sector Contracts | AI Tender Scoring for UK SMEs</title>
	<meta name="description" content="Enterprise-grade AI Tender Scoring designed for SMEs to win public sector contracts in the UK. Learn to test, inspect, and create winning tenders with our innovative AI workflows." />
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
</svelte:head>
  
<main>
	<section class="relative bg-gradient-to-r from-indigo-600 via-blue-500 to-sky-400 animate-gradient text-white py-20">
		<div class="container mx-auto px-4 text-center">
			<!-- Improved H1 with targeted keywords -->
			<h1 class="text-5xl md:text-6xl font-bold max-w-4xl inline-flex">
				Winning Public Sector Contracts: AI Tender Scoring for UK SMEs
			</h1>
			<!-- Supporting description with additional keywords -->
			<p class="mt-9 text-xl md:text-2xl max-w-4xl inline-flex">
				Unlock industry-specific AI workflows to test, inspect, and create winning tender responses.
			</p>
			<p class="mt-6 text-xl md:text-2xl">
				Get started now:
			</p>
			<!-- Exciting, SEO-optimized CTA Button -->
			<button 
				on:click={() => showUpload = true} 
				class="mt-4 inline-block bg-gradient-to-r from-orange-400 to-orange-500 text-white px-10 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-200">
				Upload Your Tender Response
			</button>
			
			<!-- Optimized placeholder image with keyword-rich alt text -->
			<div class="mt-10 p-3.5 w-fit rounded-lg border-2 mx-auto shadow-lg">
				<img src="./screenshot.png" alt="Illustration of AI Tender Scoring Process for Winning Public Sector Contracts" class="mx-auto rounded-lg">
			</div>
		</div>
	</section>
  
	<!-- Features Section with Keyword-Rich H2 Headings -->
	<section id="features" class="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
		<div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-200">
			<img src="power.webp" alt="Boost Tender Performance with Intelligent Scoring" class="mb-4 rounded w-full">
			<h2 class="text-2xl font-bold mb-2">Boost Performance with Intelligent Scoring</h2>
			<p class="text-gray-700">
				Quickly extract key data points from tender documents to optimize your bid strategy and enhance your submission performance.
			</p>
		</div>
		<div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-200">
			<img src="compliant.webp" alt="Ensure Safety and Compliance in Tender Submissions" class="mb-4 rounded">
			<h2 class="text-2xl font-bold mb-2">Safety & Compliance You Can Trust</h2>
			<p class="text-gray-700">
				Automatically detect discrepancies and receive actionable insights, ensuring your tender proposals meet all regulatory standards.
			</p>
		</div>
		<div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-200">
			<img src="safe.webp" alt="Robust Security for Sensitive Tender Documents" class="mb-4 rounded">
			<h2 class="text-2xl font-bold mb-2">Uncompromised Security</h2>
			<p class="text-gray-700">
				Protect your tender documents with robust security measures to maintain data privacy and adhere to compliance standards.
			</p>
		</div>
		<div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-200">
			<img src="accurate.webp" alt="Accurate AI Scoring for Tender Responses" class="mb-4 rounded">
			<h2 class="text-2xl font-bold mb-2">Precision & Accuracy in Tender Scoring</h2>
			<p class="text-gray-700">
				Utilize advanced AI to accurately score your tender responses, ensuring every proposal is perfectly aligned with buyer expectations.
			</p>
		</div>
	</section>
</main>
  
<!-- Drag and Drop Overlay -->
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

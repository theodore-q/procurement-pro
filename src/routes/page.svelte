<script>
    import { fly } from 'svelte/transition';
    import { swipe } from 'svelte-gestures';

    // Current active slide index
    let currentIndex = 0;

    // Track the navigation direction
    let direction = 1; // 1 for right, -1 for left

    // List of testimonials
    const testimonials = [
        {
            id: 'testimonial1',
            content: "My clients love being able to own an NFT of their commission as well as the physical copy. It’s really easy for them as there’s no jargon, they trust the private payment system, and they’ve even commented on how much more professional I look.",
            avatar: 'path/to/avatar1.jpg',
            name: 'Client 1'
        },
        {
            id: 'testimonial2',
            content: "Thanks to my Ko-fi supporters I can now build a closer relationship with people who enjoy what I do and spend more time doing what I love.",
            avatar: 'path/to/avatar2.jpg',
            name: 'Client 2'
        },
        {
            id: 'testimonial3',
            content: "Ko-fi donations allowed me to create the artbook collection I always wanted. It keeps on growing and inspiring me.",
            avatar: 'path/to/avatar3.jpg',
            name: 'Client 3'
        }
    ];

    // Function to go to a specific testimonial
    const goToTestimonial = (index) => {
        direction = index > currentIndex ? 1 : -1; // Determine direction based on index change
        currentIndex = index;
    };

    // Function to navigate testimonials
    const navigate = (step) => {
        direction = step;
        currentIndex = (currentIndex + step + testimonials.length) % testimonials.length;
    };

    let accordionItems = [
        { title: 'What is Artega', content: 'Ko-fi is a platform where creators can receive donations from their fans.' },
        { title: 'Who should use Artega', content: 'Just sign up and start sharing your content! It\'s free and easy to use.' },
        { title: 'How do I get paid?', content: 'Yes, you can set up commissions and receive payments directly from your fans.' },
        { title: 'How much does it cost?', content: 'Ko-fi is a platform where creators can receive donations from their fans.' },
        { title: 'What is USDT and stable-coin currency?', content: 'Just sign up and start sharing your content! It\'s free and easy to use.' },
        { title: 'Why sell my artwork as NFTs', content: 'Yes, you can set up commissions and receive payments directly from your fans.' },
        { title: 'How can I get in touch?', content: 'Ko-fi is a platform where creators can receive donations from their fans.' },
        { title: 'How do you keep my details private?', content: 'Just sign up and start sharing your content! It\'s free and easy to use.' },
    ];


</script>

<!-- Navbar -->

<nav class="flex justify-between items-center bg-white py-4 shadow-md">
	<div class="container mx-auto flex justify-between items-center px-4">
		<a href="/" class="flex items-center">
			<img src="https://storage.ko-fi.com/cdn/Kofi_Logo_Blue.svg" class="h-10" alt="Ko-fi Logo" />
		</a>
		<div class="hidden md:flex space-x-6">
			<a href="/explore" class="text-blue-600 font-bold">Explore</a>
			<a href="/about" class="text-blue-600 font-bold">About</a>
			<a href="https://ko-fi.com/supportkofi?action=posts" class="text-blue-600 font-bold">Blog</a>
			<a href="/account/login" class="text-blue-600 font-bold">Log In</a>
			<a href="/account/register" class="btn btn-primary rounded-lg font-bold">Sign up free</a>
		</div>
		<div class="md:hidden">
			<button class="btn btn-square btn-ghost">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16m-7 6h7"
					/>
				</svg>
			</button>
		</div>
	</div>
</nav>

<!-- Mobile Navbar -->
<div class="md:hidden bg-white shadow-md">
	<div class="container mx-auto flex justify-between items-center px-4 py-4">
		<a href="/" class="flex items-center">
			<img src="https://storage.ko-fi.com/cdn/Kofi_Logo_Blue.svg" class="h-10" alt="Ko-fi Logo" />
		</a>
		<div class="flex space-x-4">
			<a href="/account/login" class="text-blue-600 font-bold">Log In</a>
			<a href="/account/register" class="btn btn-primary rounded-lg font-bold">Sign up free</a>
		</div>
	</div>
</div>

<!-- Main Section -->
<div class="main" role="main">
	<section class="hero bg-gray-100 px-5 py-20">
		<div class="container mx-auto text-center">
			<h1 class="text-4xl font-extrabold text-amber-400">Elevate your career!</h1>
			<p class="mt-4 text-lg text-gray-700">
				Join the private, no jargon art gallery and
sell NFTs your clients will love.
			</p>
			<div class="mt-8">
				<form id="sign-up-form" class="flex justify-center items-center space-x-2">
					<span class="text-lg">arte.ga/</span>
					<input type="text" class="input input-bordered w-full max-w-xs" placeholder="yourname" />
					<button class="btn btn-primary">Claim</button>
				</form>
				<p class="mt-4 text-gray-500">Take control of your sales</p>
			</div>
		</div>
	</section>

	<!-- Features Section -->
	<section class="py-20 bg-[url('/carm6h8thgbumviyp9uk.jpg')] bg-cover bg-center">
		<!-- <div class="container mx-auto">
			<div class="flex justify-around mt-16 hidden md:flex">

				<div class="text-center backdrop-blur-sm rounded-lg p-1 pt-3	bg-white/35 backdrop-brightness-110	">
					<div class="flex justify-center mb-2" >
						<i class="fa-solid fa-calendar"></i>
					</div>
					<p class="text-gray-700">Meet the Artist</p>
				</div>

                <div class="text-center backdrop-blur-sm rounded-lg p-1 pt-3	bg-white/35 backdrop-brightness-110	">
					<div class="flex justify-center mb-2">
						<i class="fa-solid fa-credit-card"></i>
					</div>
					<p class="text-gray-700">Clients pay with 
                        credit/debit cards</p>
				</div>

				<div class="text-center backdrop-blur-sm rounded-lg p-1 pt-3	bg-white/35 backdrop-brightness-110	">
					<div class="flex justify-center mb-2">
						🧙‍♂️
					</div>
					<p class="">No tech wizardry required</p>
				</div>

			</div>
		</div> -->
	</section>
	<section class="container mx-auto py-12">
		<div class="flex flex-wrap justify-center gap-6">
			<!-- Creator Card 1 -->
			<a
				href="https://ko-fi.com/gatekid3"
				target="_blank"
				class="card w-full md:w-1/3 bg-white shadow-lg"
			>
				<img
					loading="lazy"
					alt="cover image"
					class="w-full h-48 object-cover"
					src="https://storage.ko-fi.com/cdn/landing_assets/creator_assets/artist_cover_1.png?v=1"
				/>
				<div class="flex items-center justify-center -mt-12">
					<img
						alt="avatar"
						class="w-24 h-24 object-cover rounded-full border-4 border-white"
						src="https://storage.ko-fi.com/cdn/landing_assets/creator_assets/artist_ava_1.png?v=1"
					/>
				</div>
				<div class="p-6 text-center">
					<span class="block text-lg font-bold">gatekid3</span>
					<span class="block text-sm text-gray-600 mt-2"
						>I do art n' stuff. Specifically Pixel art and animation! If you like what I do,
						consider donating. I'd really appreciate it.</span
					>
					<div class="mt-4 hidden">
						<img
							alt="ko-fi cup"
							class="inline-block w-6"
							src="https://storage.ko-fi.com/cdn/kofi_stroke_cup.svg"
						/>
						<span class="text-gray-600 ml-2">× 1,873 received</span>
					</div>
				</div>
			</a>

			<!-- Creator Card 2 -->
			<a
				href="https://ko-fi.com/supercuteawesomestuff"
				target="_blank"
				class="card w-full md:w-1/3 bg-white shadow-lg"
			>
				<img
					loading="lazy"
					alt="cover"
					class="w-full h-48 object-cover"
					src="https://storage.ko-fi.com/cdn/landing_assets/creator_assets/add_on/artist_1.png"
				/>
				<div class="flex items-center justify-center -mt-12">
					<img
						loading="lazy"
						alt="avatar"
						class="w-24 h-24 object-cover rounded-full border-4 border-white"
						src="https://storage.ko-fi.com/cdn/landing_assets/creator_assets/add_on/artist_ava_1.png"
					/>
				</div>
				<div class="p-6 text-center">
					<span class="block text-lg font-bold">Super Cute Awesome Stuff</span>
					<span class="block text-sm text-gray-600 mt-2"
						>✨ Welcome to my Super Cute Ko-fi page! ✨ 🎨 Artist 🎨</span
					>
					<div class="mt-4 hidden">
						<img
							alt="Ko-fi cup logo"
							class="inline-block w-6"
							src="https://storage.ko-fi.com/cdn/kofi_stroke_cup.svg"
						/>
						<span class="text-gray-600 ml-2">× 678 received</span>
					</div>
				</div>
			</a>

			<!-- Creator Card 3 -->
			<a
				href="https://ko-fi.com/amandaskuoo"
				target="_blank"
				class="card w-full md:w-1/3 bg-white shadow-lg"
			>
				<img
					alt="cover"
					class="w-full h-48 object-cover"
					src="https://storage.ko-fi.com/cdn/landing_assets/creator_assets/add_on/artist_2.png"
				/>
				<div class="flex items-center justify-center -mt-12">
					<img
						alt="avatar"
						class="w-24 h-24 object-cover rounded-full border-4 border-white"
						src="https://storage.ko-fi.com/cdn/landing_assets/creator_assets/add_on/artist_ava_2.png"
					/>
				</div>
				<div class="p-6 text-center">
					<span class="block text-lg font-bold">Amanda Kuo</span>
					<span class="block text-sm text-gray-600 mt-2"
						>Hey there! I'm a professional photographer specializing in weddings, portraits, and
						landscapes.</span
					>
					<div class="mt-4 hidden">
						<img
							alt="Ko-fi cup logo"
							class="inline-block w-6"
							src="https://storage.ko-fi.com/cdn/kofi_stroke_cup.svg"
						/>
						<span class="text-gray-600 ml-2">× 432 received</span>
					</div>
				</div>
			</a>
		</div>
	</section>



	<!-- Testimonials Section -->
<!-- Testimonials Section -->
<section class="py-20 bg-orange-200 relative">
    <div class="container content-center grid mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12">Testimonials</h2>
        <div use:swipe={{ threshold: 50 }}
        on:swipeLeft={() => navigate(1)}
        on:swipeRight={() => navigate(-1)}
          class="relative carousel h-80 w-full max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-xl overflow-hidden">
            {#each testimonials as testimonial, index}
                {#if currentIndex === index}
                    <!-- Applying the fly transition for sliding effect -->
                    <div class="carousel-item justify-center absolute inset-0 transition-opacity duration-500"
                         in:fly={{ x: direction === 1 ? 300 : -300, duration: 500 }}
                         out:fly={{ x: direction === 1 ? -300 : 300, duration: 500 }}>
                        <div class="w-full max-w-md mx-auto p-8 px-10 bg-white rounded-xl shadow-lg border-2 self-center border-purple-400">
                            <div class="flex justify-center -mt-16">
                                <img src={testimonial.avatar} class="w-24 h-24 rounded-full border-4 border-white" alt="Avatar">
                            </div>
                            <div class="text-center mt-4">
                                <p class="font-semibold text-lg">{testimonial.content}</p>
                                <p class="mt-2 text-purple-600">{testimonial.name}</p>
                            </div>
                        </div>
                    </div>
                {/if}
            {/each}
            <!-- Navigation buttons are now outside the content area -->
            <div class="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-between mx-0 sm:mx-4 lg:px-8">
                <button on:click={() => navigate(-1)} class="btn btn-circle opacity-50">❮</button>
                <button on:click={() => navigate(1)} class="btn btn-circle opacity-50">❯</button>
            </div>
        </div>

        <!-- Carousel indicators as pips -->
        <div class="flex w-full justify-center gap-2 py-2">
            {#each testimonials as _, index}
                <button 
                    on:click={() => goToTestimonial(index)} 
                    class="w-3 h-3 rounded-full"
                    class:bg-purple-600={currentIndex === index}
                    class:bg-gray-300={currentIndex !== index}
                    class:scale-125={currentIndex === index}>
                </button>
            {/each}
        </div>
    </div>
</section>

<section class="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 py-12">
    <div class="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        <!-- Content Section -->
        <div class="flex-1 p-6">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Create a closer bond with your clients with 
                Meet The Artist</h2>
            <div class="text-lg text-gray-700 space-y-4 mb-6">
                <p>Foster stronger relationships by including an opportunity to meet you when they buy one of your artworks.</p>
            </div>
            <a href="/account/register" class="btn btn-primary btn-wide rounded-lg">Get started free</a>
        </div>
        <!-- Image Section -->
        <div class="flex-1 p-6">
            <img src="https://storage.ko-fi.com/cdn/landing_assets/kofi_donation.png?v=2" alt="Ko-fi Donations" class="max-w-full rounded-lg shadow-lg">
        </div>
    </div>
</section>

<section class="py-12 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100">
    <div class="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
        <!-- Image Section -->
        <div class="flex-1 p-6">
            <img src="https://storage.ko-fi.com/cdn/landing_assets/kofi_commission.png?v=2" alt="Ko-fi Commissions" class="max-w-full rounded-lg shadow-lg">
        </div>
        <!-- Content Section -->
        <div class="flex-1 p-6">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Keep more of your money!</h2>
            <div class="text-lg text-gray-700 space-y-4 mb-6">
                <p class="font-semibold">6% Platform Fees</p>
                <p>Bottega is the easy, future facing and fun way to elevate your brand and get paid fairly for your creativity.</p>
                <p>Take your brand into the exciting new world of web3 - minus the confusion or tech wizardry.</p>
                <p>Use it to sell your art while offering impecable service with our growing set of features.
                </p>
                <p>It’s time to elevate your business.</p>
            </div>
            <div class="mt-6 pl-4 border-l-4 border-gray-200">
                <div class="flex items-center space-x-4 mb-4">
                    <a href="https://ko-fi.com/wobbleblobbe/commissions" target="_blank">
                        <img src="https://storage.ko-fi.com/cdn/landing_assets/creator_assets/testimonails_ava_11.png" alt="Wobbleblobbe Avatar" class="w-16 h-16 rounded-full shadow-lg">
                    </a>
                    <span class="text-lg text-gray-700">
                        Making payment <strong>easy</strong> for your clients
                    </span>
                </div>
                <a href="https://ko-fi.com/wobbleblobbe/commissions" target="_blank" class="flex items-center text-blue-600 hover:text-blue-800">
                    <span class="font-bold">Visit</span>
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</section>

<section class="py-12 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100">
    <div class="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
        <!-- Content Section -->
        <div class="flex-1 p-6">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Making payment easy for your clients</h2>
            <div class="text-lg text-gray-700 space-y-4 mb-6">
                <p class="font-semibold">Start for free!</p>
                <p>With Artega, your clients can buy your artworks with all major credit and debit cards</p>
            </div>
            <div class="mt-6 pl-4 border-l-4 border-gray-200">
                <div class="flex items-center space-x-4 mb-4">
                    <a href="https://ko-fi.com/wobbleblobbe/commissions" target="_blank">
                        <img src="https://storage.ko-fi.com/cdn/landing_assets/creator_assets/testimonails_ava_11.png" alt="Wobbleblobbe Avatar" class="w-16 h-16 rounded-full shadow-lg">
                    </a>
                    <span class="text-lg text-gray-700">
                        <strong>Wobbleblobbe</strong> is offering custom crochet vests.
                    </span>
                </div>
                <a href="https://ko-fi.com/wobbleblobbe/commissions" target="_blank" class="flex items-center text-blue-600 hover:text-blue-800">
                    <span class="font-bold">Visit</span>
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                </a>
            </div>
        </div>
        <!-- Image Section -->
        <div class="flex-1 p-6">
            <img src="https://storage.ko-fi.com/cdn/landing_assets/kofi_commission.png?v=2" alt="Ko-fi Commissions" class="max-w-full rounded-lg shadow-lg">
        </div>
    </div>
</section>


<section class="py-12 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100">
    <div class="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
        <!-- Image Section -->
        <div class="flex-1 p-6">
            <img src="https://storage.ko-fi.com/cdn/landing_assets/kofi_commission.png?v=2" alt="Ko-fi Commissions" class="max-w-full rounded-lg shadow-lg">
        </div>
        <!-- Content Section -->
        <div class="flex-1 p-6">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">No need for your clients to battle with web3 and crypto jargon</h2>
            <div class="text-lg text-gray-700 space-y-4 mb-6">
                <p>NFTs have a bad rep due to unnecessary jargon, the reliance on pre-existing crypto wallets and inaccessible design.
                </p>
                <p>
                    Bottega changes all that. Customers no longer need a degree in computing to understand how the crypto world works, as we aim to look and feel like any other online shop on the internet so they can start collecting NFTs like any other digital asset - meaning you can sell your art without losing clients.</p>
            </div>
            <div class="mt-6 pl-4 border-l-4 border-gray-200">
                <div class="flex items-center space-x-4 mb-4">
                    <a href="https://ko-fi.com/wobbleblobbe/commissions" target="_blank">
                        <img src="https://storage.ko-fi.com/cdn/landing_assets/creator_assets/testimonails_ava_11.png" alt="Wobbleblobbe Avatar" class="w-16 h-16 rounded-full shadow-lg">
                    </a>
                    <span class="text-lg text-gray-700">
                        <strong>Wobbleblobbe</strong> is offering custom crochet vests.
                    </span>
                </div>
                <a href="https://ko-fi.com/wobbleblobbe/commissions" target="_blank" class="flex items-center text-blue-600 hover:text-blue-800">
                    <span class="font-bold">Visit</span>
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</section>


<section class="py-12 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100">
    <div class="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        <!-- Content Section -->
        <div class="flex-1 p-6">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Fair prices whether your sales are high or low volume</h2>
            <div class="text-lg text-gray-700 space-y-4 mb-6">
                <p class="font-semibold">Start for free!</p>
                <p>With a <strong>no-sale no-fee</strong> offering, if you sell art infrequently there are no ongoing costs to pay.</p>
                <p>If you sell at higher volumes, you’ll enjoy our <strong>soon-to-launch</strong> subscription which is packed full of features to save time that you can spend doing what you love instead of admin.</p>
                <p>You don’t even need a bank account to start earning.</p>            
            </div>
            <div class="mt-6 pl-4 border-l-4 border-gray-200">
                <div class="flex items-center space-x-4 mb-4">
                    <a href="https://ko-fi.com/wobbleblobbe/commissions" target="_blank">
                        <img src="https://storage.ko-fi.com/cdn/landing_assets/creator_assets/testimonails_ava_11.png" alt="Wobbleblobbe Avatar" class="w-16 h-16 rounded-full shadow-lg">
                    </a>
                    <span class="text-lg text-gray-700">
                        <strong>Wobbleblobbe</strong> is offering custom crochet vests.
                    </span>
                </div>
                <a href="https://ko-fi.com/wobbleblobbe/commissions" target="_blank" class="flex items-center text-blue-600 hover:text-blue-800">
                    <span class="font-bold">Visit</span>
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                </a>
            </div>
        </div>
        <!-- Image Section -->
        <div class="flex-1 p-6">
            <img src="https://storage.ko-fi.com/cdn/landing_assets/kofi_commission.png?v=2" alt="Ko-fi Commissions" class="max-w-full rounded-lg shadow-lg">
        </div>
    </div>
</section>


<section class="py-12 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100">
    <div class="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
        <!-- Image Section -->
        <div class="flex-1 p-6">
            <img src="https://storage.ko-fi.com/cdn/landing_assets/kofi_commission.png?v=2" alt="Ko-fi Commissions" class="max-w-full rounded-lg shadow-lg">
        </div>
        <!-- Content Section -->
        <div class="flex-1 p-6">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">We don’t overshare</h2>
            <div class="text-lg text-gray-700 space-y-4 mb-6">
                <p>Privacy is a Human Right and we believe in a future where privacy is respected.</p>
                <p>The online world is slowly eroding these rights, and although GDPR and other security measures are put in place, the best way to prevent data overshare is not to share it in the first place. As we live more of our lives online, an increasing number of organisations great and small have a vested interest in creating a profile on who we are, where we go and what we do so they can influence our behaviour with greater degrees of sophistication. We reject this so we’ve built Artega to be fun, friendly and easy to use, as well as to withstand the growing pressure to spread our users details far and wide.</p>
                <p>No organisation is an island and from our email suppliers to our accountants, we select providers who share our ideals. So, whether you’re buying a new artwork or sending us a question, your information is siloed and secure.</p>
            </div>
        </div>
        
    </div>
</section>
<section class="py-12 bg-white">
    <div class="container mx-auto text-center">
        <!-- Header Section -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Feature 1 -->
            <div class="flex flex-col items-center text-center p-4">
                <i class="fas fa-donate w-12 h-12 mb-4 text-gray-800"></i> <!-- Font Awesome Donate Icon -->
                <h3 class="text-xl font-bold text-gray-800 mb-2">Get Paid Directly</h3>
                <p class="text-gray-600">6% platform fees and no surprises. Money goes directly into your crypto wallet in USDT, a stable-coin currency which doesn’t fluctuate like other crypto.</p>
            </div>
        
            <!-- Feature 2 -->
            <div class="flex flex-col items-center text-center p-4">
                <i class="fas fa-user-friends w-12 h-12 mb-4 text-gray-800"></i> <!-- Font Awesome Support Icon -->
                <h3 class="text-xl font-bold text-gray-800 mb-2">Meet The Artist</h3>
                <p class="text-gray-600">Offer your clients more by offering special opportunities to meet you. With our calendar syncing and advanced appointment scheduler, it’s never been so easy to create stronger relationships.</p>
            </div>
        
            <!-- Feature 3 -->
            <div class="flex flex-col items-center text-center p-4">
                <i class="fas fa-shield-alt w-12 h-12 mb-4 text-gray-800"></i> <!-- Font Awesome Privacy Icon -->
                <h3 class="text-xl font-bold text-gray-800 mb-2">Privacy by default</h3>
                <p class="text-gray-600">You choose who gets access to your information. From your money to your personal details, we believe in an internet which is ‘opt-in to share’. You don’t even need a bank account.</p>
            </div>
        
            <!-- Wrapper for centering the two features -->
            <div class="md:col-span-3 md:grid-cols-2  grid justify-center gap-8">
                <!-- Feature 4 -->
                <div class="flex flex-col items-center text-center p-4 w-full md:w-auto">
                    <i class="fas fa-bullseye w-12 h-12 mb-4 text-gray-800"></i> <!-- Font Awesome Goal Icon -->
                    <h3 class="text-xl font-bold text-gray-800 mb-2">No jargon</h3>
                    <p class="text-gray-600">Set a crowdfunding goal and encourage fans to contribute to achieve it!</p>
                </div>
        
                <!-- Feature 5 -->
                <div class="flex flex-col items-center text-center p-4 w-full md:w-auto">
                    <i class="fas fa-gift w-12 h-12 mb-4 text-gray-800"></i> <!-- Font Awesome Reward Icon -->
                    <h3 class="text-xl font-bold text-gray-800 mb-2">Rewards</h3>
                    <p class="text-gray-600">Web3 doesn’t need to be an impenetrable world that requires a dictionary and training to understand. We offer safe, secure systems that allow anyone to enjoy the benefits NFTs have to offer easily and hassle-free.</p>
                </div>
            </div>
        </div>
        
    </div>
</section>

<section class="py-20 bg-gray-100">
    <div class="container mx-auto">
        <!-- Card with Accordion -->
        <div class="card bg-base-100 shadow-xl mx-auto w-full max-w-3xl">
            <div class="card-body">
                <h2 class="card-title text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                
                <!-- Loop through accordionItems to create the accordion -->
                {#each accordionItems as item, index}
                    <div class="collapse collapse-plus bg-secondary-100 mb-2 rounded-lg">
                        <input type="radio" name="accordion-group" checked={index === 0} />
                        <div class="collapse-title text-lg font-medium">{item.title}</div>
                        <div class="collapse-content">
                            <p>{item.content}</p>
                        </div>
                    </div>
                {/each}
                
            </div>
        </div>
    </div>
</section>

</div>

<!-- Footer -->
<footer class="bg-gray-800 text-white py-8">
	<div class="container mx-auto">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			<div>
				<a href="https://ko-fi.com/Account/Register" class="flex items-center">
					<img
						src="https://storage.ko-fi.com/cdn/kofi_stroke_cup.svg"
						class="h-10"
						alt="Ko-fi Logo"
					/>
				</a>
			</div>
			<div>
				<h3 class="font-bold">Help & Support</h3>
				<ul>
					<li>
						<a
							href="https://help.ko-fi.com/hc/en-us/sections/360003428174-Getting-Started"
							class="text-blue-400">Donations</a
						>
					</li>
					<li><a href="https://ko-fi.com/memberships" class="text-blue-400">Memberships</a></li>
					<li><a href="https://ko-fi.com/shop" class="text-blue-400">Ko-fi Shop</a></li>
					<li>
						<a href="https://ko-fi.com/commissions" class="text-blue-400">Ko-fi Commissions</a>
					</li>
				</ul>
			</div>
			<div>
				<h3 class="font-bold">Important Stuff</h3>
				<ul>
					<li>
						<a
							href="https://help.ko-fi.com/hc/en-us/articles/360013425618-How-to-Use-Ko-fi-With-Twitter"
							class="text-blue-400">Twitter</a
						>
					</li>
					<li>
						<a
							href="https://help.ko-fi.com/hc/en-us/articles/360011573238-How-to-Use-Ko-fi-With-Instagram"
							class="text-blue-400">Instagram</a
						>
					</li>
					<li>
						<a
							href="https://help.ko-fi.com/hc/en-us/articles/360011436137-How-to-Use-Ko-fi-With-Twitch"
							class="text-blue-400">Twitch</a
						>
					</li>
				</ul>
			</div>
		</div>
		<div class="flex justify-between items-center mt-8">
			<p>Artega ©2024</p>
		</div>
	</div>
</footer>
<style>
    /* Ensure smooth transition for opacity */
    .carousel-item {
        /* position: absolute;
        width: 100%; */
        transition: opacity 0.5s ease-in-out;
    }


    .w-3 {
        width: 0.75rem; /* Width for non-active pips */
    }

    .h-3 {
        height: 0.75rem; /* Height for non-active pips */
    }

    .scale-125 {
        transform: scale(1.25); /* Scale up the active pip */
        transition: transform 0.3s ease; /* Smooth transition */
    }
</style>
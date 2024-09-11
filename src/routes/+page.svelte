<script>
    import { fly } from 'svelte/transition';
    import { swipe } from 'svelte-gestures';
    import Cal from '../components/Cal.svelte';

    // Current active slide index
    let currentIndex = 0;

    // Track the navigation direction
    let direction = 1; // 1 for right, -1 for left

    // List of testimonials
    const testimonials = [
        {
            id: 'testimonial1',
            content: "My clients love being able to own an NFT of their commission as well as the physical copy. It’s really easy for them as there’s no jargon, they trust the private payment system, and they’ve even commented on how much more professional I look.",
            avatar: './profile-1.jpg',
            name: 'Client 1'
        },
        {
            id: 'testimonial2',
            content: "Thanks to my Artega supporters I can now build a closer relationship with people who enjoy what I do and spend more time doing what I love.",
            avatar: './profile-2.jpg',
            name: 'Client 2'
        },
        {
            id: 'testimonial3',
            content: "Artega donations allowed me to create the artbook collection I always wanted. It keeps on growing and inspiring me.",
            avatar: './profile-3.jpg',
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
        { title: 'What is Artega', content: 'Artega is a platform where creators can receive donations from their fans.' },
        { title: 'Who should use Artega', content: 'Just sign up and start sharing your content! It\'s free and easy to use.' },
        { title: 'How do I get paid?', content: 'Yes, you can set up commissions and receive payments directly from your fans.' },
        { title: 'How much does it cost?', content: 'Artega is a platform where creators can receive donations from their fans.' },
        { title: 'What is USDT and stable-coin currency?', content: 'Just sign up and start sharing your content! It\'s free and easy to use.' },
        { title: 'Why sell my artwork as NFTs', content: 'Yes, you can set up commissions and receive payments directly from your fans.' },
        { title: 'How can I get in touch?', content: 'Artega is a platform where creators can receive donations from their fans.' },
        { title: 'How do you keep my details private?', content: 'Just sign up and start sharing your content! It\'s free and easy to use.' },
    ];


</script>


<!-- Navbar -->

<nav class="flex justify-between items-center bg-white py-4 shadow-md">
    <div class="container mx-auto flex justify-between items-center px-4">
        <a href="/" class="flex items-center">
            <img src="./logo.png" class="h-14" alt="artega Logo" />
        </a>
        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-6 items-center">
            <a href="#testimonials" class="text-primary font-bold">Testimonials</a>
            <a href="#faq" class="text-primary font-bold">FAQ</a>
            <a href="#features" class="text-primary font-bold">Features</a>
            <a href="/account/register" class="btn btn-primary rounded-lg font-bold">Sign up free</a>
        </div>

        <!-- Mobile Menu using DaisyUI Dropdown -->
        <div class="md:hidden dropdown dropdown-end">
            <button tabindex="0" class="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
                </svg>
            </button>

            <!-- Dropdown menu content -->
            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="/account/register" class="btn btn-primary">Sign up free</a></li>
            </ul>
        </div>
    </div>
</nav>


<!-- Main Section -->
<div class="main" role="main">
	<section class="hero bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 px-5 py-20">
		<div class="container mx-auto text-center">
			<h1 class="text-4xl font-extrabold text-amber-400">Elevate your career</h1>
			<p class="mt-4 text-lg text-gray-700">
				Join the private, no jargon art gallery and
sell NFTs your clients will love.
			</p>
			<div class="mt-8">
				<form id="sign-up-form" class="flex justify-center items-center space-x-2">
					<span class="text-lg">arte.ga/</span>
					<input type="text" class="input input-bordered w-full max-w-xs shadow-lg" placeholder="yourname" />
					<button class="btn btn-primary">Claim</button>
				</form>
				<p class="mt-4 text-gray-500">Take control of your sales</p>
			</div>
		</div>
	</section>

<!-- Features Section -->
<section class="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-1">
    <div class="container mx-auto">
        <!-- Flex container for badges with responsive classes -->
        <div class="flex flex-col my-12 md:flex-row justify-around space-y-4 md:space-y-0 md:space-x-6 items-center">

            <!-- Badge 1: Meet the Artist -->
            <div class="text-center badge rounded-lg px-5 py-3 badge-1">
                <div class="flex justify-center items-center">
                    <i class="fa-solid fa-calendar"></i>
                    <span class="ml-2 text-gray-700 font-bold">Meet the Artist</span>
                </div>
            </div>

            <!-- Badge 2: Clients pay with credit/debit cards -->
            <div class="text-center badge backdrop-blur-sm rounded-lg px-5 py-3 badge-2 badge-white/35 backdrop-brightness-110">
                <div class="flex justify-center items-center">
                    <i class="fa-solid fa-credit-card"></i>
                    <span class="ml-2 text-gray-700 font-bold">Clients pay with credit/debit cards</span>
                </div>
            </div>

            <!-- Badge 3: No tech wizardry required -->
            <div class="text-center badge backdrop-blur-sm rounded-lg px-5 py-3 badge-3 badge-white/35 backdrop-brightness-110">
                <div class="flex justify-center items-center">
                    🧙‍♂️<span class="ml-2 font-bold">No tech wizardry required</span>
                </div>
            </div>

        </div>
    </div>
</section>
<section class="py-20 bg-[url('/carm6h8thgbumviyp9uk.jpg')] bg-cover bg-center ">
    <div class="container mx-auto">
        <!-- Flex container for badges with responsive classes -->
        <div class="flex flex-col md:flex-row justify-around mt-16 space-y-4 md:space-y-0 md:space-x-6 items-center">

            <!-- Badge 1: Meet the Artist -->
            <!-- <div class="text-center badge rounded-lg px-5 py-3 badge-1">
                <div class="flex justify-center items-center">
                    <i class="fa-solid fa-calendar"></i>
                    <span class="ml-2 text-gray-700 font-bold">Meet the Artist</span>
                </div>
            </div> -->

            <!-- Badge 2: Clients pay with credit/debit cards -->
            <!-- <div class="text-center badge backdrop-blur-sm rounded-lg px-5 py-3 badge-2 badge-white/35 backdrop-brightness-110">
                <div class="flex justify-center items-center">
                    <i class="fa-solid fa-credit-card"></i>
                    <span class="ml-2 text-gray-700 font-bold">Clients pay with credit/debit cards</span>
                </div>
            </div> -->

            <!-- Badge 3: No tech wizardry required -->
            <!-- <div class="text-center badge backdrop-blur-sm rounded-lg px-5 py-3 badge-3 badge-white/35 backdrop-brightness-110">
                <div class="flex justify-center items-center">
                    🧙‍♂️<span class="ml-2 font-bold">No tech wizardry required</span>
                </div>
            </div> -->

        </div>
    </div>
</section>
	<section class=" w-full mx-auto py-12 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
		<div class="container flex flex-wrap justify-center gap-6">
			<!-- Creator Card 1 -->
			<a
				href="https://Artega.com/gatekid3"
				target="_blank"
				class="card w-full md:w-1/3 bg-white shadow-lg"
			>
				<img
					loading="lazy"
					alt="cover image"
					class="w-full h-48 object-cover rounded-t-2xl"
					src="./profiles/profile-1/bg.png"
				/>
				<div class="flex items-center justify-center -mt-12">
					<img
						alt="avatar"
						class="w-24 h-24 object-cover rounded-full border-4 border-white"
						src="./profiles/profile-1/profile.jpg"
					/>
				</div>
				<div class="p-6 text-center">
					<span class="block text-lg font-bold">I_GAME_01</span>
					<span class="block text-sm text-gray-600 mt-2"
						>I love 4X games and now you can own some of my greatest twitch moments!</span
					>
				</div>
			</a>

			<!-- Creator Card 2 -->
			<a
				href="https://Artega.com/supercuteawesomestuff"
				target="_blank"
				class="card w-full md:w-1/3 bg-white shadow-lg"
			>
				<img
					loading="lazy"
					alt="cover"
					class="w-full h-48 object-cover rounded-t-2xl"
					src="./profiles/profile-2/bg.jpeg"
				/>
				<div class="flex items-center justify-center -mt-12">
					<img
						loading="lazy"
						alt="avatar"
						class="w-24 h-24 object-cover rounded-full border-4 border-white"
						src="./profiles/profile-2/profile.jpg"
					/>
				</div>
				<div class="p-6 text-center">
					<span class="block text-lg font-bold">meaowNow</span>
					<span class="block text-sm text-gray-600 mt-2"
						>✨ I make custom kitties for you using the latest AI technology.  🎨</span
					>
				</div>
			</a>

			<!-- Creator Card 3 -->
			<a
				href="https://Artega.com/amandaskuoo"
				target="_blank"
				class="card w-full md:w-1/3 bg-white shadow-lg"
			>
				<img
					alt="cover"
					class="w-full h-48 object-cover rounded-t-2xl"
					src="./profiles/profile-3/bg.png"
				/>
				<div class="flex items-center justify-center -mt-12">
					<img
						alt="avatar"
						class="w-24 h-24 object-cover rounded-full border-4 border-white"
						src="./profiles/profile-3/profile.jpg"
					/>
				</div>
				<div class="p-6 text-center">
					<span class="block text-lg font-bold">AgeOfAquarius</span>
					<span class="block text-sm text-gray-600 mt-2"
						>Need healing? I create custom tarot cards artwork infused with psychic healing beta waves to help you with life.</span
					>
				</div>
			</a>
		</div>
	</section>




<!-- Testimonials Section -->
<section id="testimonials" class="py-20 bg-orange-200 relative bg-[url('/frame-bg.png')] bg-center bg-no-repeat">
    <div class="container content-center grid mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12">Testimonials</h2>
        <div use:swipe={{ threshold: 50 }}
        on:swipeLeft={() => navigate(1)}
        on:swipeRight={() => navigate(-1)}
        class="relative carousel h-80 w-full max-w-4xl mx-auto overflow-visible">
            {#each testimonials as testimonial, index}
                {#if currentIndex === index}
                    <!-- Applying the fly transition for sliding effect -->
                    <div class="carousel-item justify-center absolute inset-0 transition-opacity duration-500"
                         in:fly={{ x: direction === 1 ? 300 : -300, duration: 500 }}
                         out:fly={{ x: direction === 1 ? -300 : 300, duration: 500 }}>
                        <div class="w-full max-w-md mx-auto p-8 px-10 bg-white rounded-xl shadow-lg border-2 self-center border-purple-400">
                            <div class="flex justify-center -mt-16 relative z-10">
                                <!-- Apply z-index and position to the avatar -->
                                <img src={testimonial.avatar} class="w-24 h-24 rounded-full border-4 border-white relative z-20 shadow-md" alt="Avatar">
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
                <button on:click={() => navigate(-1)} class="border-2 border-purple-500 btn bg-white btn-circle opacity-50">❮</button>
                <button on:click={() => navigate(1)} class="border-2 border-purple-500 btn bg-white btn-circle opacity-50">❯</button>
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
            <img src="./cal.png" alt="calendar" class="max-w-full rounded-lg shadow-lg shadow-hard-r">
        </div>
    </div>
</section>

<section class="py-12 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100">
    <div class="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
        <!-- Image Section -->
        <div class="flex-1 p-6">
            <img src="./cash.jpg" alt="Artega Commissions" class="max-w-full rounded-lg shadow-lg shadow-hard-l">
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
        </div>
        <!-- Image Section -->
        <div class="flex-1 p-6">
            <img src="./cards.png" alt="cards accepted" class="max-w-full rounded-lg">
        </div>
    </div>
</section>


<section class="py-12 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100">
    <div class="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
        <!-- Image Section -->
        <div class="flex-1 p-6">
            <img src="./nft.png" alt="Artega Commissions" class="max-w-full rounded-lg shadow-lg">
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
        </div>
        <!-- Image Section -->
        <div class="flex-1 p-6">
            <Cal/>
        </div>
    </div>
</section>


<section class="py-12 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100">
    <div class="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
        <!-- Image Section -->
        <div class="flex-1 p-6">
            <img src="./privacy.jpg" alt="Artega Commissions" class="shadow-hard-l max-w-full rounded-lg shadow-lg">
        </div>
        <!-- Content Section -->
        <div class="flex-1 p-6">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">We don’t overshare</h2>
            <div class="text-lg text-gray-700 space-y-4 mb-6">
                <p class="font-semibold">Start for free!</p>
                <p>We believe in a future where privacy is respected.</p>
                <p>All out suppliers are chosen for their <strong>privacy first</strong> approach. Not only are your details kept private from your clients as standard, you have total control over how your information, transactions and money are visible to other</p>
            </div>
        </div>
    </div>
</section>
<section id="features" class="py-12 bg-white">
    <div class="container mx-auto text-center">
        <!-- Header Section -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Feature 1 -->
            <div class="flex flex-col items-center text-center p-4">
                <i class="fas fa-donate w-12 h-12 mb-4 text-5xl text-gray-800"></i> <!-- Font Awesome Donate Icon -->
                <h3 class="text-xl font-bold text-gray-800 mb-2">Get Paid Directly</h3>
                <p class="text-gray-600">6% platform fees and no surprises. Money goes directly into your crypto wallet in USDT, a stable-coin currency which doesn’t fluctuate like other crypto.</p>
            </div>
        
            <!-- Feature 2 -->
            <div class="flex flex-col items-center text-center p-4">
                <i class="fas fa-user-friends w-12 h-12 mb-4 text-5xl text-gray-800"></i> <!-- Font Awesome Support Icon -->
                <h3 class="text-xl font-bold text-gray-800 mb-2">Meet The Artist</h3>
                <p class="text-gray-600">Offer your clients more by offering special opportunities to meet you. With our calendar syncing and advanced appointment scheduler, it’s never been so easy to create stronger relationships.</p>
            </div>
        
            <!-- Feature 3 -->
            <div class="flex flex-col items-center text-center p-4">
                <i class="fas fa-shield-alt w-12 h-12 mb-4 text-5xl text-gray-800"></i> <!-- Font Awesome Privacy Icon -->
                <h3 class="text-xl font-bold text-gray-800 mb-2">Privacy by default</h3>
                <p class="text-gray-600">You choose who gets access to your information. From your money to your personal details, we believe in an internet which is ‘opt-in to share’. You don’t even need a bank account.</p>
            </div>
        
            <!-- Wrapper for centering the two features -->
            <div class="md:col-span-3 md:grid-cols-2  grid justify-center gap-8">
                <!-- Feature 4 -->
                <div class="flex flex-col items-center text-center p-4 w-full md:w-auto">
                    <i class="fas fa-bullseye w-12 h-12 mb-4 text-5xl text-gray-800"></i> <!-- Font Awesome Goal Icon -->
                    <h3 class="text-xl font-bold text-gray-800 mb-2">No jargon</h3>
                    <p class="text-gray-600">Set a crowdfunding goal and encourage fans to contribute to achieve it!</p>
                </div>
        
                <!-- Feature 5 -->
                <div class="flex flex-col items-center text-center p-4 w-full md:w-auto">
                    <i class="fas fa-gift w-12 h-12 mb-4 text-5xl text-gray-800"></i> <!-- Font Awesome Reward Icon -->
                    <h3 class="text-xl font-bold text-gray-800 mb-2">Rewards</h3>
                    <p class="text-gray-600">Web3 doesn’t need to be an impenetrable world that requires a dictionary and training to understand. We offer safe, secure systems that allow anyone to enjoy the benefits NFTs have to offer easily and hassle-free.</p>
                </div>
            </div>
        </div>
        
    </div>
</section>

<section id="faq" class="py-20 bg-gray-100">
    <div class="container mx-auto">
        <!-- Card with Accordion -->
        <div class="card bg-primary shadow-xl mx-auto w-full max-w-3xl">
            <div class="card-body">
                <h2 class="card-title text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                
                <!-- Loop through accordionItems to create the accordion -->
                {#each accordionItems as item, index}
                    <div class="collapse collapse-plus bg-gray-100 mb-2 rounded-lg">
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
<footer class="bg-gray-800 p-2 text-white py-8">
	<div class="container mx-auto">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			<div class='bg-white p-3 rounded-lg w-fit h-fit'>
					<img
						src="./logo.png"
						class="h-10"
						alt="Logo"
					/>
			</div>
			<div>
				<h3 class="font-bold">Help & Support</h3>
				<ul>
					<li>
						<a
							href="https://help.Artega.com/hc/en-us/sections/360003428174-Getting-Started"
							class="text-blue-400">Donations</a
						>
					</li>
					<li><a href="https://Artega.com/memberships" class="text-blue-400">Memberships</a></li>
					<li><a href="https://Artega.com/shop" class="text-blue-400">Artega Shop</a></li>
					<li>
						<a href="https://Artega.com/commissions" class="text-blue-400">Artega Commissions</a>
					</li>
				</ul>
			</div>
			<div>
				<h3 class="font-bold">Important Stuff</h3>
				<ul>
					<li>
						<a
							href="https://help.Artega.com/hc/en-us/articles/360013425618-How-to-Use-Artega-With-Twitter"
							class="text-blue-400">Twitter</a
						>
					</li>
					<li>
						<a
							href="https://help.Artega.com/hc/en-us/articles/360011573238-How-to-Use-Artega-With-Instagram"
							class="text-blue-400">Instagram</a
						>
					</li>
					<li>
						<a
							href="https://help.Artega.com/hc/en-us/articles/360011436137-How-to-Use-Artega-With-Twitch"
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
    .shadow-hard-r{
        box-sizing: border-box;
    /* margin: -3px; */
    /* box-sizing: border-box; */
    box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.25);
    transform: rotate(4deg);
    transform-origin: 87% 89%;
    }
    /* Ensure smooth transition for opacity */
    .carousel-item {
        /* position: absolute;
        width: 100%; */
        transition: opacity 0.5s ease-in-out;
    }

    .shadow-hard-l{
        box-sizing: border-box;
    /* margin: -3px; */
    /* box-sizing: border-box; */
    box-shadow: -10px 10px 0px 0px rgba(0, 0, 0, 0.25);
    transform: rotate(-4deg);
    transform-origin: 87% 89%;
    }
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

    .badge-1 {
        background: linear-gradient(90deg, #c189ffcf 0%, #0affd4d4 100%)
        /* Purple to blue gradient */
    }

.badge-2 {
        background: linear-gradient(90deg, #ff758ccf 0%, #ff7eb3d4 100%);

        /* Pink to light pink gradient */
    }

.badge-3 {
        background: linear-gradient(90deg, #43e97bcf 0%, #38f9d7d4 100%);

        /* Green to teal gradient */
    }

        :global(html) {
            scroll-behavior: smooth;
        }
    
</style>
<script>
    import { fly } from 'svelte/transition';
    import { swipe } from 'svelte-gestures';
    import Cal from '../components/Cal.svelte';
    import WertWidget from '@wert-io/widget-initializer';
    import { onMount } from 'svelte';


  let wertWidget;

  onMount(() => {
    if (typeof window !== 'undefined') {
      wertWidget =  new WertWidget({
        partner_id:"01H7HZDSADE5QRH57SW2F52ACR",
        origin:"https://sandbox.wert.io"
      });


    //   wertWidget.mount('widget-container'); // Mounting widget to a container
    }
  });

  function openWertWidget() {
    wertWidget.open({
        
    });
  }

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
            name: 'Jackie H.'
        },
        {
            id: 'testimonial2',
            content: "Thanks to Artega, I can now manage all my sales online, which means I can spend more time doing what I love",
            avatar: './profile-2.jpg',
            name: 'Leo M.'
        },
        {
            id: 'testimonial3',
            content: "I’ve been able to sell my artworks worldwide with Artega and sell premium priced commissions which I wasn’t able to do before.",
            avatar: './profile-3.jpg',
            name: 'Jensen L.'
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
        { title: 'What is Artega', content: 'Artega is a user-friendly online art gallery which allows artists to create NFTs out of their artwork. It’s a privacy-first service which protects artist and patron identities and uses trusted mainstream payment systems for a frictionless payment experience.' },
        { title: 'Who should use Artega', content: 'Artega is the perfect fit for anyone looking to make money from their creations. It’s available to anyone who can hold a stablecoin account and with the flourishing advances in AI technology, earning an income from your creativity has never been easier.' },
        { title: 'How do I get paid?', content: 'As a privacy-first company, patrons pay for art with their credit card, debit card which is converted in USDT, an extremely stable digital currency pegged to the US Dollar (that has no ties with the US). You can hold your payment in your digital currency wallet, sell it, pay for goods out of it, or withdraw it into a traditional bank account.' },
        { title: 'How much does it cost?', content: `Artega charges a fair 6% paid for by the patron so as a creator you take home 100% of your earnings. 

Wallets may have their own charges for withdrawal, and you are able to select a wallet provider which suits you.` },
        { title: 'What is USDT and stable-coin currency?', content: `USDT is United States Dollar Coin. It is a regulated digital currency which can be redeemed for United States Dollars (USD) at a 1:1 ratio. It is not issued by the US Treasury, and is maintained by Tether. 
        Unlike better known cryptocurrency like Bitcoin, it does not fluctuate rapidly as it is not an investment currency, therefore it can be safely held within an account without volatile value change. It is however pegged to the US Dollar so will be susceptible to fluctuation with the US economy. These types of digital currencies are known as ‘stable-coin’` },
        { title: 'Why sell my artwork as NFTs', content: `Artega allows creatives of visual artworks to diversify into the world of web3 with NFTs. It opens up new fan bases among digital collectors and as web3, ai and generative worlds develop, it allows artists to effortlessly be part of the future of virutal world. 

Digital renditions of physical works can be created as unique artworks with our NFT minting tool allowing limited edition runs of the same artwork (as every NFT is unique) and Artega enables digital artists to receive payment for their growing fanbase with safe and trusted payment tools.` },
        { title: 'How can I get in touch?', content: 'We’re always happy to hear from you at info@arte.ga and for press enquiries to press@arte.ga' },
        { title: 'How do you keep my details private?', content: `We believe the future of the internet should be private and secure so we’ve engineered Artega with a privacy-by-design approach. We utilise two different technologies for processing artist details and patron data which ensures there’s no automated oversharing of your personal information. We can’t accidently leak anyone’s credentials, and it would be impossible for us to sell your data, even if we tried.

That’s the future of the internet that we believe in, so we built it into our product by default.`},
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
            <a href="https://app.arte.ga/signup" class="btn btn-primary rounded-lg font-bold">Sign up free</a>
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
                <li><a href="https://app.arte.ga/signup" class="btn btn-primary">Sign up free</a></li>
            </ul>
        </div>
    </div>
</nav>

<!-- <div id="widget-container"></div> -->



<!-- Main Section -->
<div class="main" role="main">
	<section class="hero bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 px-5 py-20">
		<div class="container mx-auto text-center">
			<h1 class="text-5xl md:text-7xl font-extrabold text-amber-400">Level Up your career</h1>
			<p class="mt-4 text-lg text-gray-700">
				Join the NFT art gallery that makes it a pleasure for your patrons to pay you.
			</p>
			<div class="mt-8">
				<form id="sign-up-form" class="flex justify-center items-center space-x-2">
					<span class="text-lg">arte.ga/</span>
					<input type="text" class="input input-bordered w-full max-w-xs shadow-lg" placeholder="yourname" />
					<a href="https://app.arte.ga/signup" class="btn btn-primary">Claim</a>
				</form>
				<p class="mt-4 text-gray-500">Your privacy-first solution</p>
			</div>
            <!-- <button class="btn btn-primary" on:click={openWertWidget}>
                Open Wert Widget
            </button> -->
		</div>
	</section>

<!-- Features Section -->
<section class="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-1">
    <div class="container mx-auto">
        <!-- Flex container for badges with responsive classes -->
        <div class="flex flex-col my-12 md:flex-row justify-around space-y-4 md:space-y-0 md:space-x-6 items-center">

<!-- Feature 1: Meet the Artist -->
<div class="flex flex-col items-center text-center p-4">
    <i class="fa-solid fa-calendar w-12 h-12 mb-4 text-5xl text-gray-800"></i> <!-- Font Awesome Calendar Icon -->
    <h3 class="text-xl font-bold text-gray-800 mb-2">Meet the Artist</h3>
    <p class="text-gray-600">Our latest free optional add-on - go the extra mile and get to know your supporters by allowing them to book a Meet & Greet directly into your synced calendar</p>
  </div>

<!-- Feature 2: Clients Pay with Credit/Debit Cards -->
<div class="flex flex-col items-center text-center p-4">
    <i class="fa-solid fa-credit-card w-12 h-12 mb-4 text-5xl text-gray-800"></i> <!-- Font Awesome Credit Card Icon -->
    <h3 class="text-xl font-bold text-gray-800 mb-2">Easy Payment</h3>
    <p class="text-gray-600">our patrons don’t need a crypto account to buy your artworks discreetly - they can stick it on their debit card, charge it to their credit card</p>
  </div>
  

<!-- Feature 3: No Tech Wizardry Required -->
<div class="flex flex-col items-center text-center p-4">
    <span class="text-5xl mb-4">🧙‍♂️</span> <!-- Wizard Emoji Icon -->
    <h3 class="text-xl font-bold text-gray-800 mb-2">No/Low Jargon</h3>
    <p class="text-gray-600">We’ve stripped out the technobabble to create an easy to use, plain-speaking payment journey that won’t distract from what’s important</p>
  </div>
  

        </div>
    </div>
</section>
<section class="py-20 bg-[url('/carm6h8thgbumviyp9uk-2.jpg')] bg-cover bg-center ">
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
		<h1 class="text-3xl font-bold text-center mb-12">Creatives love Artega</h1>
        <div class="container flex flex-wrap justify-center gap-6 m-auto">
			<!-- Creator Card 1 -->
			<a
				href="https://arte.ga/"
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
				href="https://arte.ga/"
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
				href="https://arte.ga/"
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
<section id="testimonials" class="py-20 overflow-hidden bg-orange-200 relative bg-[url('/frame-bg.png')] bg-center bg-no-repeat">
    <div class="container content-center grid mx-auto">
        <h2 class="text-3xl font-bold text-center mb-20">Testimonials</h2>
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


<section class="overflow-hidden; bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 py-12">
    <div class="container mx-auto overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
        <!-- Content Section -->
        <div class="flex-1 p-6">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Patrons spend more on artists they can get to know</h2>
            <div class="text-lg text-gray-700 space-y-4 mb-6">
                <p>We’ve just launched our Meet The Artist feature as part of our free tier. This optional extra allows you to include a Meet & Greet on some or all of your artworks, allowing you to create a closer bond with your clients.</p>
                <p>We know you don’t need more admin so you can either set your availability manually, or sync it into your calendar - so no more back and forth trying to find a date</p>
            </div>
            <a href="https://app.arte.ga/signup" class="btn btn-primary btn-wide rounded-lg">Join the community</a>
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
                <p>Artega is the easy, future facing and fun way to get paid fairly for your creativity.</p>
                <p>Take your brand into the exciting new world of web3 - minus the confusion or tech wizardry.</p>
                <p>Use it to sell your art while offering impecable service with our growing set of features.
                </p>
            </div>
            <a href="https://app.arte.ga/signup" class="btn btn-primary btn-wide rounded-lg">Get started now</a>
        </div>
    </div>
</section>

<section class="overflow: hidden; py-12 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100">
    <div class="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
        <!-- Content Section -->
        <div class="flex-1 p-6">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Making payment easy for your clients</h2>
            <div class="text-lg text-gray-700 space-y-4 mb-6">
                <p class="font-semibold">Start for free!</p>
                <p>You don’t want to lose sales because it’s hard for people to pay you! Just like any online shop, Artega allows you to accept credit cards, debit cards</p>
                <p>Even though you receive funds in crypto, your clients pay with traditional methods so even clients who are uncomfortable with tech can send you money easily.</p>
                <p>We don’t stand in the middle, so you receive money instantly into your wallet as soon as the sale is made which allows you to get on with creating a stunning customer experience.</p>
            </div>
            <a href="https://app.arte.ga/signup" class="btn btn-primary btn-wide rounded-lg">Try it out</a>
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
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Trusted, Safe and Private for patrons and artists</h2>
            <div class="text-lg text-gray-700 space-y-4 mb-6">
                <p>NFTs have a bad rep due to unnecessary jargon, reliance on pre-existing crypto wallets and inaccessible design. Artega changes all that. Patrons no longer need a degree in computing to buy your sought after NFTs. We’ve designed Artega like any other online shop - so anyone can start collecting NFT artworks.
                </p>
                <p>
                    The NFT craze might be over and the crypto bubble burst, but what hasn’t changed is that web3 (a commerce based web) can offer a secure, trusted and discreet method of interacting with others that doesn’t expose your data to third parties, ever. This allows you total peace of mind when developing your artistic career in the changing online and legislative landscape.</p>
            </div>
        </div>
    </div>
</section>


<section class="py-12 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100">
    <div class="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        <!-- Content Section -->
        <div class="flex-1 p-6">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Fair prices and no up-front costs or hidden charges</h2>
            <div class="text-lg text-gray-700 space-y-4 mb-6">
                <p class="font-semibold">You can be ready to accept your first sale in less than half an hour.</p>
                <p>We don’t penalise you for occasional sales, charge you to withdraw money (check wallet T&Cs) or gouge you if you use our platform a lot. We grow alongside you with a fair percentage (6%) of your sales which allow us to keep rolling out new features, create an even smoother patron experience and offer the highest level of privacy.</p>
                <p>We want to take all the hassle out of doing what you love so you can focus on the fun stuff.</p>
                <p>You don’t even need a bank account to start earning.</p>            
            </div>
            <a href="https://app.arte.ga/signup" class="btn btn-primary btn-wide rounded-lg">Get started free</a>
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
                <p>Privacy is a Human Right and we believe in a future where privacy is respected.</p>
                <p>The online world is slowly eroding these rights, and although GDPR and other security measures are put in place, the best way to prevent data overshare is not to share it in the first place. As we live more of our lives online, an increasing number of organisations great and small have a vested interest in creating a profile on who we are, where we go and what we do so they can influence our behaviour with greater degrees of sophistication. We reject this so we’ve built Artega to be fun, friendly and easy to use, as well as to withstand the growing pressure to spread our users details far and wide.</p>
                <p>No organisation is an island and from our email suppliers to our accountants, we select providers who share our ideals. So, whether you’re buying a new artwork or sending us a question, your information is siloed and secure.</p>
            </div>
            <a href="https://app.arte.ga/signup" class="btn btn-primary btn-wide rounded-lg">Learn More</a>
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
                <h3 class="text-xl font-bold text-gray-800 mb-2">Meet the artist</h3>
                <p class="text-gray-600">You might not be able to host a private gallery viewing with an online sale, but you can host a Meet The Artist 1:1 session with the sale of your artwork. With our calendar syncing and advanced appointment scheduler, it’s easy for you to offer more to your patrons and create stronger, career spanning relationships.</p>
            </div>
        
            <!-- Feature 3 -->
            <div class="flex flex-col items-center text-center p-4">
                <i class="fas fa-shield-alt w-12 h-12 mb-4 text-5xl text-gray-800"></i> <!-- Font Awesome Privacy Icon -->
                <h3 class="text-xl font-bold text-gray-800 mb-2">Privacy by default</h3>
                <p class="text-gray-600">You choose who gets access to your information. We share nothing by default and inform you about all data sharing. From your money to your personal details, we believe in an internet which doesn’t overshare your activity by default. You don’t even need a bank account.</p>
            </div>
        
            <!-- Wrapper for centering the two features -->
            <div class="md:col-span-3 md:grid-cols-2  grid justify-center gap-8">
                <!-- Feature 4 -->
                <div class="flex flex-col items-center text-center p-4 w-full md:w-auto">
                    <i class="fas fa-bullseye w-12 h-12 mb-4 text-5xl text-gray-800"></i> <!-- Font Awesome Goal Icon -->
                    <h3 class="text-xl font-bold text-gray-800 mb-2">Low/No Jargon</h3>
                    <p class="text-gray-600">We’ve cut out the technobabble so neither you nor your patrons need to call ‘Your Friend In IT’ to figure out how to take advantage of the top tier technology for privacy. It doesn’t matter if you don’t know your hodl from your DEX, you can sell NFTs and hold crypto dictionary-free.</p>
                </div>
        
                <!-- Feature 5 -->
                <div class="flex flex-col items-center text-center p-4 w-full md:w-auto">
                    <i class="fas fa-gift w-12 h-12 mb-4 text-5xl text-gray-800"></i> <!-- Font Awesome Reward Icon -->
                    <h3 class="text-xl font-bold text-gray-800 mb-2">Evolving Features</h3>
                    <p class="text-gray-600">The world doesn’t stand still and neither do we. We’re a dedicated and passionate team who are currently working on a new set of features to reduce your admin, make your brand look even more professional as well as make those subtle changes that make using Artega even smoother. Sign up to our newsletter to see what’s happening next.</p>
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
							href="https://help.arte.ga/privacy"
							class="text-blue-400">Privacy</a
						>
					</li>
					<li><a href="https://arte.ga/copyright" class="text-blue-400">Copyright Policy</a></li>
					<li><a href="https://arte.ga/shop" class="text-blue-400">Cookie Policy</a></li>
				</ul>
			</div>
			<div>
				<h3 class="font-bold">Important Stuff</h3>
				<ul>
					<li>
						<a
							href="https://help.arte.ga/hc/en-us/articles/360013425618-How-to-Use-Artega-With-Twitter"
							class="text-blue-400">How we make Artega safe</a
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
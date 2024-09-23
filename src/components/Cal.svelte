<script>
    let artworksSold = 5;
    let averagePrice = 250;

    $: earnings = (artworksSold * averagePrice) * 0.94;
</script>
<div class="cal flex justify-center items-center">
    <div class="bg-white shadow-lg rounded-lg p-6 text-center w-72">
        <h2 class="text-lg font-semibold" >Figure out what your take-home could be after fees</h2>
        <div class='text-sm mb-6' >only 6% fee</div>
        
        <div class="flex flex-col space-y-4">
            <div>
                <label class="text-sm font-medium block mb-1">Artworks sold</label>
                <input type="number" bind:value={artworksSold} class="input input-bordered w-full text-center" />
            </div>
            
            <div>
                <label class="text-sm font-medium block mb-1">Average price</label>
                <input type="number" bind:value={averagePrice} class="input input-bordered w-full text-center" />
            </div>
        </div>
        
        <div class="mt-6">
            <p class="text-sm font-medium">You could take home</p>
            <p class="text-3xl font-bold text-yellow-500 mt-2">${earnings}</p>
        </div>
    </div>
</div>

<style>
    .input {
        @apply bg-gray-100 focus:ring-2 focus:ring-blue-500 rounded-md;
    }
    .cal{
        transform: scaleX(1) scaleY(1) scaleZ(1) rotateX(3deg) rotateY(-7deg) rotateZ(7deg) translateX(0px) translateY(0px) translateZ(0px) skewX(0deg) skewY(0deg);
    }
</style>
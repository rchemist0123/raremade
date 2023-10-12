<script>
	import { enhance } from '$app/forms';

  export let data;
</script>
<div class="w-full flex flex-col items-center gap-y-10 py-20">
  <h1 class="text-6xl font-bold">Wishlist</h1>
  <div class="md:w-full flex flex-col items-center">
    {#each data.items as item}
    <div class="md:w-full flex flex-col md:flex-row px-20 py-5 gap-5 md:gap-10 justify-between items-center">
      <div class="flex flex-row items-start">
        <!-- Delete from wishlist -->
        <form action="?/delete" method="POST" use:enhance>
          <input type="hidden" hidden name="id" value={item.slug}>
          <button class="rounded-full hover:bg-slate-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </form>
        <img class="w-28 h-38" src={item.photo_dir} alt=""/>
      </div>
      <p>{item.slug}</p>
      <p class="text-gray-500">₩{item.price}</p>
      <p>In stock</p>
      <button class="bg-pink-500 px-10 py-3 md:py-5 text-white">ADD TO CART</button>
    </div>
    {/each}
  </div>
</div>
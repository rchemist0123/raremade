<script>
  export let data;
</script>
<div class="w-full flex flex-col items-center gap-y-10 py-20">
  <h1 class="text-6xl font-bold">Wishlist</h1>
  <div class="w-full flex flex-col items-center">
    {#each data.items as item}
    <div class="w-full flex flex-row p-16 gap-10 justify-between items-center">
      <img class="w-36 h-36" src={item.photo_dir} alt=""/>
      <p>{item.slug}</p>
      <p class="text-gray-500">₩{item.price}</p>
      <p>In stock</p>
      <button class="bg-pink-500 px-10 py-5 text-white">ADD TO CART</button>
    </div>
    {/each}
  </div>
</div>
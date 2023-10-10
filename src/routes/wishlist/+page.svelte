<script>
  export let data;
</script>
<div class="flex flex-col items-center">
  <h1 class="text-3xl">Wishlist</h1>
  <div class="flex flex-col gap-4">
    {#each data.items as item}
    <div class="flex flex-row">
      <img class="w-20 h-20" src={item.photo_dir} alt=""/>
      <p>{item.slug}</p>
      <p>{item.price}</p>
    </div>
    {/each}
  </div>
</div>
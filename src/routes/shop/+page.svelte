<script>
  export let data;
</script>

<div class="py-10 md:px-10 dark:bg-slate-800">
  <div class="flex justify-center items-center py-10">
    <h1 class="text-3xl text-pink-600">Shop</h1>
  </div>
  <!-- Sorting dropdown -->
  <div>Sorting</div>
  <!-- Buttons list -->
  <div class="">
    <ul class="flex flex-row flex-wrap justify-center gap-10 text-center">
      {#each data.summaries as {name, price, dir}}
        <li>
          <img class="w-32 h-32" src="{dir}" alt="">
          <div class="pt-3 text-left">
            <a class="text-sm hover:text-pink-700 dark:text-white" href="/shop/{name}">{name}</a>
            <p class="text-sm text-black dark:text-white">₩{price}</p>
            <button class="text-black dark:text-white text-sm">ADD TO CART</button>
          </div>
        </li>    
      {/each}
    </ul>
  </div>
</div>
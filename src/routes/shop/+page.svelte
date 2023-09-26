<script>
  export let data;
</script>

<div class="flex justify-center items-center">
  <h1 class="text-3xl">Shop</h1>
</div>
<div>
  <ul class="flex flex-row justify-center gap-10">
    {#each data.summaries as {name, price, dir}}
      <li>
        <img class= "w-32 h-32" src="{dir}" alt="">
        <a href="/shop/{name}">상품명:{name}</a>
        <p>가격: ₩{price}</p>
      </li>    
    {/each}
  </ul>
</div>
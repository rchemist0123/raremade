<script>
  let product_count = 1;
  function productCountMinus() {
    product_count = product_count === 1 ? 1 : product_count-1 ;
  }
  function productCountPlus() {
    product_count = product_count === 10 ? 10 : product_count + 1;
  }
</script>
<div class="p-10">
  <!-- main -->
  <div class="flex flex-col gap-10 md:flex-row"> 
    <!-- left: image -->
    <div>
      <img src="/buttons.jpeg" alt="">
    </div>
    <!-- right: info & options -->
    <div class="flex flex-col justify-center gap-10">
      <!-- Title -->
      <h1 class="text-5xl font-extrabold">Sample Button</h1>
      <!-- Price -->
      <p class="tracking-normal">₩3,500</p>
      <!-- Count & Add to cart -->
      <div class="flex flex-row justify-between gap-5">
        <div class="flex flex-row gap-5 items-center">
          <button class="text-3xl" on:click={productCountMinus}>-</button>
          <p class="text-xl">{product_count}</p>
          <button class="text-2xl" on:click={productCountPlus}>+</button>
        </div>
        <button class="bg-pink-500 px-10 py-2 text-white">ADD TO CART</button>
      </div>
      <!-- Add to wishlist -->
      <div>
        <!-- heart icon -->
        <p>Add to wishlist</p>
      </div>
    </div>

  </div>
  <div>

  </div>
  <!-- Detail -->
  <div>
    
  </div>
</div>

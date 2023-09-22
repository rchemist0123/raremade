<script>
// @ts-nocheck

  import {onMount} from 'svelte';
	import Description from './description.svelte';
	import AdditionalInfo from './AdditionalInfo.svelte';
	import Review from './Review.svelte';
	import Tabs from './Tabs.svelte';
  let product_count = 1;
  function productCountMinus() {
    product_count = product_count === 1 ? 1 : product_count-1 ;
  }
  function productCountPlus() {
    product_count = product_count === 10 ? 10 : product_count + 1;
  }
  onMount(()=>{
    const detail_btns = document.querySelectorAll("#d_btn")
    
    // let detail_active_class = "text-black border-t-4 border-t-orange-500"
    // detail_btns.forEach(btn=>{
    //   btn.addEventListener("click",()=>{
    //     detail_btns.forEach(restBtns => {
    //       restBtns.classList.add("text-gray-400")
    //       restBtns.classList.remove("text-black")
    //     })
    //     btn.classList.add("text-black")
    //     btn.classList.remove('text-gray-400')
    //   })
    // })
  })
  // let target_id = "details";
  let items = [
    {label:"상세 보기", value: 1, component: Description},
    {label:"추가 정보", value: 2, component: AdditionalInfo},
    {label:"리뷰", value: 3, component: Review}
  ]
</script>

<div class="flex flex-col gap-10 md:gap-20">
  <!-- main -->
  <div class="flex flex-col gap-10 md:flex-row md:justify-center md:pt-32"> 
    <!-- left: image -->
    <div class="">
      <img src="/buttons.jpeg" alt="">
    </div>
    <!-- right: info & options -->
    <div class="p-10 flex flex-col justify-center gap-10">
      <!-- Title -->
      <h1 class="text-5xl font-extrabold">Sample Button</h1>
      <!-- Price -->
      <p class="tracking-wider text-xl text-orange-500 font-bold">₩3,500</p>
      <!-- Count & Add to cart -->
      <div class="flex flex-row justify-between gap-5">
        <div class="flex flex-row gap-5 items-center">
          <button class="text-3xl transition-colors duration-300 ease-in-out hover:text-gray-300" on:click={productCountMinus}>-</button>
          <p class="text-xl">{product_count}</p>
          <button class="text-2xl transition-colors duration-300 ease-in-out hover:text-gray-300" on:click={productCountPlus}>+</button>
        </div>
        <button class="bg-pink-500 px-10 py-2 text-white">ADD TO CART</button>
      </div>
      <!-- Add to wishlist -->
      <div>
        <!-- heart icon -->
        <p>Add to wishlist</p>
      </div>
      <!-- Categories -->
      <div>
        <p class="text-sm text-gray-400">Category: button</p>
      </div>
    </div>
  </div>

  <!-- Detail -->
  <div class="md:p-10">
    <!-- Detail head(buttons) -->
    <Tabs {items} />
  </div>
  <!-- Related products -->
  <div class="flex flex-col items-center pb-20">
    <div>
      <h1>비슷한 상품</h1>
    </div>
    <!-- items -->
    <div class="flex flex-wrap md:flex-row justify-center gap-10">
      <!-- Item -->
      <div>
        <!-- Photo -->
        <div class="w-36 h-36">
          <img src="/btn_sample.jpeg" alt="">
        </div>
        <!-- Explain -->
        <div>
          <p>Name</p>
          <p>Price</p>
        </div>
      </div>
      <div>
        <!-- Photo -->
        <div class="w-36 h-36">
          <img src="/btn_sample.jpeg" alt="">
        </div>
        <!-- Explain -->
        <div>
          <p>Name</p>
          <p>Price</p>
        </div>
      </div>
      <div>
        <!-- Photo -->
        <div class="w-36 h-36">
          <img src="/btn_sample.jpeg" alt="">
        </div>
        <!-- Explain -->
        <div>
          <p>Name</p>
          <p>Price</p>
        </div>
      </div>
      <div>
        <!-- Photo -->
        <div class="w-36 h-36">
          <img src="/btn_sample.jpeg" alt="">
        </div>
        <!-- Explain -->
        <div>
          <p>Name</p>
          <p>Price</p>
        </div>
      </div>
    </div>
  </div>
</div>

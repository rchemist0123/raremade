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
  })
  // let target_id = "details";
  let items = [
    {label:"상세 보기", value: 1, component: Description},
    {label:"추가 정보", value: 2, component: AdditionalInfo},
    {label:"리뷰", value: 3, component: Review}
  ]

  let wishlist = false;
  const addToWishlist = () => wishlist = wishlist === false ? true : false;
  export let data;
</script>

<div class="flex flex-col gap-10 md:gap-20">
  <!-- main -->
  <div class="flex flex-col gap-10 md:flex-row md:justify-center md:pt-32"> 
    <!-- left: image -->
    <div class="md:w-64 md:h-64">
      <img src="{data.item.photo_dir}" alt="">
    </div>
    <!-- right: info & options -->
    <div class="p-10 flex flex-col justify-center gap-10">
      <!-- Title -->
      <h1 class="text-5xl font-extrabold">{data.item.slug}</h1>
      <!-- Price -->
      <p class="tracking-wider text-xl text-orange-500 font-bold">₩{data.item.price}</p>
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
      <div class="flex flex-row gap-3">
        <!-- heart icon -->
        <button on:click={addToWishlist} class="flex justify-center items-center hover:scale-105 active:scale-95">
          {#if wishlist}
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          {:else}
            <svg class="w-5 h-5" id="favoriteHeart" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          {/if}
        </button>
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
  <div class="flex flex-col w-full p-10 md:items-center md:p-5 pb-20">
    <div class="pb-5 text-center">
      <h1 class="font-bold block">비슷한 상품</h1>
    </div>
    <!-- items -->
    <div class="flex flex-wrap justify-between gap-3 md:flex-row md:space-x-20 md:justify-center">
      <!-- Item -->
      <div>
        <!-- Photo -->
        <div class="w-36 h-36 border">
          <img src="/btn_sample.jpeg" alt="">
        </div>
        <!-- Explain -->
        <div>
          <p class="text-sm">Name</p>
          <button class="text-pink-500 text-sm">Add to cart</button>
        </div>
        <div>

        </div>
      </div>
      <div>
        <!-- Photo -->
        <div class="w-36 h-36 border">
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

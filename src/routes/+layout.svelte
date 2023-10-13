<script>
// @ts-nocheck
	import '../app.css';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Footer from './Footer.svelte';
	import { sineIn } from 'svelte/easing';
  
	export let data;
	let hidden = true;
  let transitionParamsRight = {
    x: 320,
    duration: 200,
    easing: sineIn
  };
	let moonSun = '/moon.png'
    let moonStatus = 'moon';
    function toggleDark(){
        const body = document.querySelector('body')
        body?.classList.toggle('dark')
        moonStatus = body?.classList.contains('dark') ?'moon' :'sun'
        // moonSun = moonStatus === 'moon' ?'/sun.png' :'/moon.png';
    }
    $: moonSun = moonStatus === "moon" ? "/moon.png" :"/sun.png";
	let menus = [
		{ name: 'HOME', id: 1, url: '/' },
		{ name: 'MY ACCOUNT ', id: 2, url: '/account'},
		{ name: 'SHOP', id: 3, url: '/shop'},
	];
	onMount(()=>{
		// const hamburger = document.querySelector('#hamgurger');
		// const menu = document.querySelector('#menu');
		const links = document.querySelectorAll("#link");
		links.forEach(link => {
			link.addEventListener("click", ()=> {
						// @ts-ignore
					drawer.classList.toggle('hidden');
						// @ts-ignore
					hamburger.classList.toggle('bg-white');
			})
		})
	})

	const toggleDrawer = () => {
		const drawer = document.querySelector('#drawer');
		drawer.classList.toggle("hidden")
	}


</script>
<nav class="sticky w-full top-0 z-10 bg-white">
	<div class="mx-auto py-5 flex items-center justify-between">
		<div class="flex items-center pl-5 md:pl-0 gap-1">
			<img class="w-8" src="/favicon.png" alt="" />
			<span class="text-3xl font-caveat font-extrabold italic  text-pink-600">
				<a href="/">Rare Made</a></span>
		</div>
		<!-- Navigation menu -->
		<ul class="hidden md:flex space-x-10 text-gray-600 dark:text-white font-bold text-sm uppercase">
			{#each menus as menu}
				<li class="hover:text-pink-800">
					<a href={menu.url} aria-current={$page.url.pathname === menu.url} >{menu.name}</a>
				</li>
			{/each}
		</ul>
		<button class="hover:scale-105" on:click={toggleDark}>
			<img class="hidden md:block w-5 cursor-pointer" src={moonSun} alt="" />
		</button>
		<!-- Wishlist & Cart -->
		<ul class="flex flex-row gap-5">
			<li class="text-black dark:text-white flex flex-row gap-1">
				<a href="/wishlist">
					<svg class="w-5 h-5" id="favoriteHeart" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
					</svg>
				</a>
				<span class="text-sm">{data?.wishItems}</span>
			</li>
			<li class="text-black dark:text-white">
				<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
					<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
				</svg> 	
			</li>
		</ul>
	<!-- drawer init and toggle -->
	<div class="space-y-1 md:hidden cursor-pointer z-10">
		<!-- <input type="checkbox" id="drawer-toggle" class="relative sr-only peer" checked> -->
		<button on:click={toggleDrawer} class="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" >
			<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
				<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
			</svg>
		</button>
	</div>
	<!-- drawer component -->
	<div id="drawer" class="fixed hidden top-0 z-20 w-screen p-4 bg-white">
		<div class="flex flex-row justify-between">
			<p class="text-2xl font-bold">Menu</p>
			<button on:click={toggleDrawer}>
				<svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
			</svg>
			</button>
		</div>
		<div class="py-4">
			<ul id="menu" class="space-y-5 font-medium ">
				{#each menus as menu}
					<li id={menu.id}>
						<a id="link" href={menu.url}>{menu.name}</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	</div>
</nav>

<slot />

<Footer />
<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import Footer from './Footer.svelte';
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
		{ name: 'Homepage', url: '/' },
		{ name: 'About', url: '/#about' },
		{ name: 'Services', url: '/#service' },
		{ name: 'Work', url: '/#work' },
		{ name: 'Shop', url: '/shop'},
	];
	onMount(()=>{
		const hamburger = document.querySelector('#hamgurger');
		const menu = document.querySelector('#menu');
		const links = document.querySelectorAll("#link");
		hamburger?.addEventListener('click', () => {
			// @ts-ignore
			menu.classList.toggle('hidden');
			// @ts-ignore
			hamburger.classList.toggle('bg-white');
		
		});

		links.forEach(link => {
				link.addEventListener("click", ()=> {
						// @ts-ignore
						menu.classList.toggle('hidden');
						// @ts-ignore
						hamburger.classList.toggle('bg-white');
				})
		})
	})
</script>
<nav class="w-full sticky top-0 z-10 bg-white dark:bg-slate-900">
	<div class="container mx-auto py-5 flex items-center justify-between">
		<div class="flex items-center pl-5 md:pl-0 gap-1">
			<img class="w-8" src="/favicon.png" alt="" />
			<span class="text-3xl font-caveat font-extrabold italic  text-pink-600">
				<a href="/">Rare Made</a></span>
		</div>
		<ul class="hidden md:flex space-x-10 text-gray-600 dark:text-white font-bold text-sm uppercase">
			{#each menus as menu}
				<li class="hover:text-pink-800">
					<a href={menu.url}>{menu.name}</a>
				</li>
			{/each}
		</ul>
		<button class="hover:scale-105" on:click={toggleDark}>
			<img class="hidden md:block w-5 cursor-pointer" src={moonSun} alt="" />
		</button>
		<!-- Wishlist & Cart -->
		<ul class="flex flex-row gap-5">
			<li class="text-white">
				<a href="/wishlist">
					<svg class="w-6 h-6" id="favoriteHeart" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
					</svg>
				</a>
			</li>
			<li class="text-white">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
					<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
				</svg>	
			</li>
		</ul>
	<!-- drawer init and toggle -->
	<div class="space-y-1 md:hidden cursor-pointer z-10">
		<button class="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" 
				data-drawer-target="drawer-right" data-drawer-show="drawer-right" data-drawer-placement="right" aria-controls="drawer-right">
			<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
				<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
			</svg>
		</button>
	</div>
	<!-- drawer component -->
	<div id="drawer-right" class="fixed top-0 right-0 z-30 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 dark:bg-gray-800" aria-labelledby="drawer-right-label">
		<h5 id="drawer-right-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
			<svg class="w-4 h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
				<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
			</svg>Menu
		</h5>
		<button type="button" data-drawer-hide="drawer-right" aria-controls="drawer-right" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
			<svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
				<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
			</svg>
			<span class="sr-only">Close menu</span>
		</button>
		<ul id="menu" class="space-y-2 font-medium">
			{#each menus as menu}
				<li>
					<a id="link" href={menu.url}>{menu.name}</a>
				</li>
			{/each}
		</ul>
		</div>
	</div>
</nav>

<slot />

<Footer />
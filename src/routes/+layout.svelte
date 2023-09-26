<script>
	import '../app.css';
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
		{ name: 'About', url: '#about' },
		{ name: 'Services', url: '#service' },
		{ name: 'Work', url: '#work' },
		{ name: 'Shop', url: '/shop'},
		{ name: 'Detail', url: '/detail' }
	];
</script>
<nav class="w-full sticky top-0 bg-white z-10 dark:bg-slate-900">
	<div class="container mx-auto py-5 flex items-center justify-between">
		<div class="flex items-center pl-5 md:pl-0 gap-1">
			<img class="w-8" src="/favicon.png" alt="" />
			<span class="text-3xl font-caveat font-extrabold italic  text-pink-600 dark:text-white">Rare Made</span>
		</div>
		<ul class="hidden md:flex space-x-10 text-gray-600 dark:text-white font-bold text-sm uppercase">
			{#each menus as menu}
				<li class="hover:text-gray-400">
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
		<!-- <button class="text-white">
			
		</button>
		<button class="text-white">
					
		</button> -->
		<!-- Hamberger -->
		<div id="hamgurger" class="space-y-1 md:hidden cursor-pointer z-20">
			<div class="w-6 h-1 bg-black"></div>
			<div class="w-6 h-1 bg-black"></div>
			<div class="w-6 h-1 bg-black"></div>
		</div>
		<ul
			id="menu"
			class="hidden bg-pink-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center"
		>
			{#each menus as menu}
				<li>
					<a id="link" href={menu.url}>{menu.name}</a>
				</li>
			{/each}
		</ul>
		
	</div>
</nav>

<slot />

<Footer />
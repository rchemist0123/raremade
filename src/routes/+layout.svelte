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
		{ name: 'Detail', url: '/detail' }
	];
</script>
<nav class="w-full sticky top-0 bg-white z-10 dark:bg-slate-900">
	<div class="container mx-auto py-5 flex items-center justify-between">
		<div class="flex items-center gap-2">
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
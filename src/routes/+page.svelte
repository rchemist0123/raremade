<script>
	// @ts-ignore
	import Footer from './Footer.svelte';
	import { onMount } from 'svelte';
	import { AutoTyping } from '../lib/autotyping.js';
	import About from './About.svelte';
	import Service from './Service.svelte';
	import Work from './Work.svelte';
	onMount(() => {
		const hamburger = document.querySelector('#hamgurger');
		const menu = document.querySelector('#menu');
		const links = document.querySelectorAll("#link");
		const exampleText = ['Buttons store', 'Knitting store', 'Handmade store'];
		const exampleTyping = new AutoTyping('#text', exampleText, {
			typeSpeed: 50,
			deleteSpeed: 50,
			waitBeforeDelete: 2000,
			waitBetweenWords: 500
		});
		exampleTyping.start();
	});
</script>

<!-- Home -->
<div id="home" class="font-nunino">
	<div class="h-1/2 sm:h-screen bg-gradient-to-t from-pink-200 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden">
		<!-- intro content -->
		<!-- image -->
			<div class="absolute top-1/3 left-5 text-lg sm:left-10 sm:text-4xl md:left-1/4 md:text-6xl lg:left-5 xl:left-48 xl:text-7xl font-bold z-5">
					<span class="text-gray-600 dark:text-white">Rare Made</span>
					<p id="text" class="text-pink-500"></p>
			</div>
		<img class="absolute bottom-0 right-3 sm:left-0 md:left-10 lg:left-0 mx-auto h-1/2 rounded-3xl object-cover"
			src="/buttons_intro.jpeg"
			alt=""
		/>
		<!-- circle -->
		<div 
			class="hidden lg:block absolute right-0 left-0 mx-auto -bottom-1/4 w-big h-96 bg-pink-900 rounded-full dark:bg-slate-500 -z-20 dark:-z-20"
		></div>
		<!-- animated text -->
		<!-- text -->
		<div
			class="hidden lg:flex flex-col gap-5 rounded-md shadow-xl absolute top-0 bottom-0 m-auto right-10 bg-white dark:bg-slate-900 dark:shadow-slate-900 p-6 h-fit w-1/3"
		>
			<h1 class="text-4xl font-bold text-pink-900">Welcome to Raremade</h1>
			<p class="text-gray-400">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus corrupti distinctio
				facere. Dolorem similique reiciendis ullam tempora fugiat maxime consequatur voluptates
				quibusdam aperiam, iure a pariatur accusantium libero! Fugiat, quisquam.
			</p>
				<a class="bg-pink-600 text-white text-xl px-3 py-2 rounded-md font-semibold w-fit"
						href="#contact">Contact me!</a>
		</div>
	</div>
</div>

<!-- About -->
<About />
<!-- Service -->
<Service />
<!-- Work -->
<Work />
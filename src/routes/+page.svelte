<script>
	// @ts-ignore
	import { onMount } from 'svelte';
	import { AutoTyping } from '../lib/autotyping.js';
	onMount(() => {
		const hamburger = document.querySelector('#hamgurger');
		const menu = document.querySelector('#menu');
        const links = document.querySelectorAll("#link")

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

		const exampleText = ['Buttons store', 'Knitting store', 'Handmade store'];
		const exampleTyping = new AutoTyping('#text', exampleText, {
			typeSpeed: 50,
			deleteSpeed: 50,
			waitBeforeDelete: 2000,
			waitBetweenWords: 500
		});
		exampleTyping.start();
	});
	// hamburger.addEventListener("click",()=>{
        //     menu.classList.toggle(" ")
    function toggleDark(){
        const body = document.querySelector('body')
        body?.classList.toggle('dark')
    }

	let menus = [
		{ name: 'Homepage', url: '#home' },
		{ name: 'About', url: '#about' },
		{ name: 'Services', url: '#service' },
		{ name: 'Work', url: '#work' },
		{ name: 'Contact', url: ' ' }
	];
</script>

<!-- Home -->
<div id="home" class="font-nunino">
	<div class="h-1/2 sm:h-screen bg-gradient-to-t from-pink-200 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden">
		<nav class="w-full fixed top-0 bg-white z-10 dark:bg-slate-900">
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
                <span on:click={toggleDark}>
                    <img class="hidden md:block w-5 cursor-pointer" src="/moon.png" alt="" />
                </span>
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
		<!-- intro content -->
		<!-- image -->
		<img class="absolute bottom-0 right-0 md:left-10 lg:left-0 mx-auto h-1/2 rounded-3xl object-cover"
			src="/buttons_intro.jpeg"
			alt=""
		/>
		<!-- circle -->
		<div class="hidden lg:block absolute right-0 left-0 mx-auto -bottom-1/4 w-big h-96 bg-pink-900 rounded-full -z-20"
		></div>
		<!-- animated text -->
		<div
			class="absolute top-1/3 left-5 text-lg sm:left-10 sm:text-4xl md:left-1/4 md:text-6xl lg:left-5 xl:left-48 xl:text-7xl font-bold"
		>
			<span class="text-gray-600 dark:text-white">Rare Made</span>
			<p id="text" class="text-pink-500"></p>
		</div>
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
<div id="about" class="px-10 dark:bg-slate-900">
    <div class="container mx-auto py-40 flex flex-col-reverse lg:flex-row items-center gap-20">
        <!-- left -->
        <div class="relative md:w-1/2">
            <img class="w-1/4 h-1/4 absolute top-0 left-0 -z-10" src="" alt="">
            <div class="h-full rounded-full overflow-hidden">
                <img class="" src="/meme.png" alt="">
            </div>
        </div>
        <!-- right -->
        <div class="my-auto flex flex-col gap-3">
            <h1 class="text-pink-600 font-bold">About Us</h1>
            <h1 class="text-3xl font-medium dark:text-white">Unique buttons</h1>
            <h1 class="text-3xl font-medium dark:text-white">Unique experience</h1>
            <h1 class="text-3xl font-medium dark:text-white">Rare handmades</h1>
            <p class="text-gray-400">
                The goal of Raremade is to provide unique and rare buttons that could be a last piece of your handmade stuffs.
            </p>
        </div>
    </div>
</div>
<!-- Service -->
<div id="service" class="dark:bg-slate-900">
    <div class="container mx-auto">
        <div class="flex flex-col gap-3 items-center">
            <h1 class="text-pink-600 font-bold uppercase">Services</h1>
            <h1 class="text-3xl dark:text-white">What do we offer?</h1>
            <p class="w-1/2 text-center text-gray-400">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatum, quisquam, totam laborum animi accusantium cupiditate tempore, veniam provident blanditiis hic atque error placeat! A nam eveniet adipisci exercitationem et.</p>
        </div>
        <div class="p-5 flex flex-wrap justify-between">
            <div class="w-full md:w-1/3 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3 dark:bg-slate-600">
                <img class="w-10" src="" alt="">
                <h1 class="font-medium text-lg dark:text-white">UI/UX</h1>
                <p class="text-gray-400">I specialize in abcdefgHIJKLMNOP</p>
                <a class="text-pink-600 font-semibold text-sm" href="">Read more</a>
            </div>
            <div class="w-full md:w-1/3 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3 dark:bg-slate-600">
                <img class="w-10" src="" alt="">
                <h1 class="font-medium text-lg dark:text-white">UI/UX</h1>
                <p class="text-gray-400">I specialize in abcdefgHIJKLMNOP</p>
                <a class="text-pink-600 font-semibold text-sm" href="">Read more</a>
            </div>
            <div class="w-full md:w-1/3 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3 dark:bg-slate-600">
                <img class="w-10" src="" alt="">
                <h1 class="font-medium text-lg dark:text-white">UI/UX</h1>
                <p class="text-gray-400">I specialize in abcdefgHIJKLMNOP</p>
                <a class="text-pink-600 font-semibold text-sm" href="">Read more</a>
            </div>
            <div class="w-full md:w-1/3 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3 dark:bg-slate-600">
                <img class="w-10" src="" alt="">
                <h1 class="font-medium text-lg dark:text-white">UI/UX</h1>
                <p class="text-gray-400">I specialize in abcdefgHIJKLMNOP</p>
                <a class="text-pink-600 font-semibold text-sm" href="">Read more</a>
            </div>
            <div class="w-full md:w-1/3 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3 dark:bg-slate-600">
                <img class="w-10" src="" alt="">
                <h1 class="font-medium text-lg dark:text-white">UI/UX</h1>
                <p class="text-gray-400">I specialize in abcdefgHIJKLMNOP</p>
                <a class="text-pink-600 font-semibold text-sm" href="">Read more</a>
            </div>
            <div class="w-full md:w-1/3 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3 dark:bg-slate-600">
                <img class="w-10" src="" alt="">
                <h1 class="font-medium text-lg dark:text-white">UI/UX</h1>
                <p class="text-gray-400">I specialize in abcdefgHIJKLMNOP</p>
                <a class="text-pink-600 font-semibold text-sm" href="">Read more</a>
            </div>
        </div>
    </div>
</div>

<!-- Work -->
<div id="work" class="dark:bg-slate-900">
    <div class="container mx-auto py-40">
        <div class="flex flex-col gap-3 items-center">
            <h1 class="text-pink-600 font-bold uppercase">Works & Projects</h1>
            <h1 class="text-3xl dark:text-white">What we've done</h1>
            <p class="w-1/2 text-center text-gray-400">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatum, quisquam, totam laborum animi accusantium cupiditate tempore, veniam provident blanditiis hic atque error placeat! A nam eveniet adipisci exercitationem et.</p>
        </div>
        <div class="p-5 flex flex-wrap justify-between">
            <div class="w-full md:w-1/3 lg:w-1/5 shadow-xl rounded-lg p-5 my-3 md:my-10 m-1">
               <img src="/works.png" alt="">
            </div>
            <div class="w-full md:w-1/3 lg:w-1/5 shadow-xl rounded-lg p-5 my-3 md:my-10 m-1">
               <img src="/works.png" alt="">
            </div>
            <div class="w-full md:w-1/3 lg:w-1/5 shadow-xl rounded-lg p-5 my-3 md:my-10 m-1">
               <img src="/works.png" alt="">
            </div>
            <div class="w-full md:w-1/3 lg:w-1/5 shadow-xl rounded-lg p-5 my-3 md:my-10 m-1">
               <img src="/works.png" alt="">
            </div>
            <div class="w-full md:w-1/3 lg:w-1/5 shadow-xl rounded-lg p-5 my-3 md:my-10 m-1">
               <img src="/works.png" alt="">
            </div>
            <div class="w-full md:w-1/3 lg:w-1/5 shadow-xl rounded-lg p-5 my-3 md:my-10 m-1">
               <img src="/works.png" alt="">
            </div>
            <div class="w-full md:w-1/3 lg:w-1/5 shadow-xl rounded-lg p-5 my-3 md:my-10 m-1">
                <img src="/works.png" alt="">
             </div>
             <div class="w-full md:w-1/3 lg:w-1/5 shadow-xl rounded-lg p-5 my-3 md:my-10 m-1">
                <img src="/works.png" alt="">
             </div>
        </div>
    </div>
</div>
<!-- footer -->
<div class="w-full bg-gray-800 ">
    <div class="container mx-auto py-5 flex items-center justify-between">
        <div class="flex items-center gap-2">
            <img class="w-8" src="/favicon.png" alt="" />
            <span class="text-2xl font-bold text-white ">Raremade</span>
        </div>
        <span class="hidden md:block font-medium text-white">Ⓒ 2023 Raremade. All right reserved.</span>
        <div class="flex gap-2 mr-10">
            <a href="https://www.instagram.com/rare_made_/" target="_blank">
                <img class="w-4 cursor-pointer" src="/instagram.png" alt="">
            </a>
        </div>
    </div>
</div>
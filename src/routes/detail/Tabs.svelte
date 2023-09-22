<script>
// @ts-nocheck
  export let items = [];
  export let activeTabValue = 1;

  const handleClick = tabValue => () => (activeTabValue = tabValue);
</script>




<ul class="flex flex-col md:flex-row justify-center items-center gap-5">
{#each items as item}
  <li>
    <button on:click={handleClick(item.value)}
      class="{activeTabValue === item.value ? 'text-black border-t-2 border-t-orange-500' : 'text-gray-400'} font-semibold tracking-wider transition-colors duration-300 ease-in-out"
    >{item.label}</button>
  </li>
{/each}
</ul>

<ul class="flex justify-center pt-20 pb-10">
{#each items as item}
  {#if activeTabValue == item.value}
    <svelte:component this={item.component}/>
  {/if}  
{/each}
</ul>
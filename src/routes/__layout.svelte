<script context="module">export const prerender = true</script>
<script>
    import "../app.css";
    import MenuBar from '../components/MenuBar.svelte';
    import Konami from '../components/Konami.svelte'
    let konami = false
</script>
<Konami bind:konami />
<MenuBar />
<div class="h-[6.5rem]"></div>
{#key konami}
{#if konami}
<div class="m-2 grid place-items-center animate-spin">
    <slot />
</div>
{:else}
<div class="m-2 grid place-items-center">
    <slot />
</div>
{/if}
{/key}
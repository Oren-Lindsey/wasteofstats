<script>
    import {page} from '$app/stores';
    export let followers
    export let num
    export let last
    import Block from '../../../../components/Block.svelte'
</script>
<img class="h-[80px] rounded-full border-2 border-black" src="https://api.wasteof.money/users/{$page.params.name}/picture" alt="{$page.params.name}'s profile picture" />
<h1 class="font-mono text-blue-900 text-4xl"><a href="/users/{$page.params.name}" class="underline decoration-solid hover:decoration-gray-200 text-center">@{$page.params.name}</a>'s followers</h1>
<ol class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
{#each followers as user}
<li><Block>
    <div class="grid place-items-center">
    <a href="/users/{user.name}"><img loading="lazy" class="h-[80px] rounded-full border-2 border-black" src="https://api.wasteof.money/users/{user.name}/picture" alt="{user.name}'s profile picture" /></a>
    <h1 class="font-mono text-blue-900 text-4xl"><a href="/users/{user.name}" class="underline decoration-solid hover:decoration-gray-200">@{user.name}</a>{#if user.beta}<span class="mx-1 inline-flex items-center" title="Beta tester"><svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clip-rule="evenodd"></path></svg></span>{/if}{#if user.verified}<span class="mx-1 inline-flex items-center" title="Verified"><svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg></span>{/if}{#if user.permissions.admin}<span class="mx-1 inline-flex items-center" title="Admin"><svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg></span>{/if}</h1>
    <i>"{user.bio}"</i>
    </div>
    </Block></li>
{/each}
</ol>
<style>
    * {
        overflow-wrap: anywhere;
    }
</style>
<p>Page {num}</p>
{#if parseInt(num) !== 1}<a href="{$page.url.pathname}?page={parseInt(num)-1}" class="text-blue-900" style="display:inline !important">←</a>{/if}{#if !last}<a href="{$page.url.pathname}?page={parseInt(num)+1}" class="text-blue-900" style="display:inline !important">→</a>{/if}

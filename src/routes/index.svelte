<script context="module">
    export const prerender = true
</script>
<script>
   import Block from '../components/Block.svelte'
   export let users
   export let mostFollowed
</script>
<h1 class="text-4xl font-mono text-blue-900">wasteofstats</h1>
<p class="text-black">View stats for your favorite wasteof users</p>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
    <Block>
        <h2 class="text-xl text-center">Most Followed Users</h2>
        <ul class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
            {#each mostFollowed as user}
            <li class="m-1 break-words"><a sveltekit:prefetch href="/users/{user.name}"><div class="grid place-items-center"><img loading="lazy" class="h-[80px] rounded-full border-2 border-black" src="https://api.wasteof.money/users/{user.name}/picture" alt="@{user.name}'s pfp" /></div><h1 class="text-center font-mono text-blue-900">@{user.name}{#if user.beta}<span class="mx-1 inline-flex items-center" title="Beta tester"><svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-[0.8rem] w-[0.8rem]" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clip-rule="evenodd"></path></svg></span>{/if}{#if user.verified}<span class="mx-1 inline-flex items-center" title="Verified"><svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-[0.8rem] w-[0.8rem]" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg></span>{/if}{#if user.permissions.admin}<span class="mx-1 inline-flex items-center" title="Admin"><svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-[0.8rem] w-[0.8rem]" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg></span>{/if}</h1></a><div class="grid place-items-center"><p class="text-center">{user.stats.followers} followers</p></div></li>
            {/each}
        </ul>
        <a href="/most-followed" class="grid place-items-center text-blue-900 underline decoration-solid hover:decoration-gray-200">See full list</a>
    </Block>
    <Block>
        <h2 class="text-xl text-center">Featured Users</h2>
        <ul class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
            {#each users as user}
                <li class="m-1 break-words"><a sveltekit:prefetch href="/users/{user.name}"><div class="grid place-items-center"><img loading="lazy" class="h-[80px] rounded-full border-2 border-black" src="https://api.wasteof.money/users/{user.name}/picture" alt="@{user.name}'s pfp" /></div><p class="text-center font-mono text-blue-900">@{user.name}{#if user.beta}<span class="mx-1 inline-flex items-center" title="Beta tester"><svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-[0.8rem] w-[0.8rem]" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clip-rule="evenodd"></path></svg></span>{/if}{#if user.verified}<span class="mx-1 inline-flex items-center" title="Verified"><svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-[0.8rem] w-[0.8rem]" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg></span>{/if}{#if user.permissions.admin}<span class="mx-1 inline-flex items-center" title="Admin"><svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-[0.8rem] w-[0.8rem]" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg></span>{/if}</p></a><div class="grid place-items-center"><i class="text-center break-words text-sm">"{user.bio}"</i></div></li>
            {/each}
        </ul>
    </Block>
</div>



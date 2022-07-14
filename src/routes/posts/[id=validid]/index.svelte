<script>
    export let post
    let user = post.poster
    export let comments
    export let hasMore
    import Comment from "../../../components/Comment.svelte";
    import Block from "../../../components/Block.svelte";
</script>
<a href="/users/{user.name}"><img class="h-[80px] rounded-full border-2 border-black" src="https://api.wasteof.money/users/{user.name}/picture" alt="{user.name}'s profile picture" /></a>
<h1 class="font-mono text-blue-900 text-4xl"><a href="/users/{user.name}" class="underline decoration-solid hover:decoration-gray-200">@{user.name}</a></h1>
<Block>
    <div class="grid place-items-center">
    <p class="text-center">{@html post.content}</p>
    <a href="https://wasteof.money/posts/{post.id}" class="text-blue-900">View on wasteof</a>
    <div class="grid grid-cols-3">
    <div class="mx-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline h-5 w-5"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg><p class="inline ml-1">{post.loves}</p></div>
    <div class="mx-2"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" viewBox="0 0 24 24" class="inline h-5 w-5"><path d="M11.6 3.4l-.8-.8c-.5-.6-.4-1.5.3-1.8.4-.3 1-.2 1.4.2a509.8 509.8 0 012.7 2.7c.5.4.5 1.2.1 1.6l-2.8 2.9c-.5.5-1.3.5-1.8-.1-.3-.5-.2-1 .2-1.5l.8-1H7a4.3 4.3 0 00-4.1 4.7 2036.2 2036.2 0 01.2 8h2.4c.5 0 .8.2 1 .6.2.4.2.9 0 1.2-.2.4-.6.6-1 .6H1.8c-.7 0-1.2-.5-1.2-1.1v-.2V10c0-1.3.3-2.5 1-3.6 1.3-2 3.2-3 5.6-3h4.4zM12.3 18.3h4.6c2.3 0 4.2-2 4.2-4.3V5.9c0-.2 0-.2-.2-.2h-2.3c-.6 0-1-.3-1.2-.8a1.2 1.2 0 011.1-1.6h3.6c.8 0 1.3.5 1.3 1.3v9c0 1.1-.1 2.2-.6 3.2a6.4 6.4 0 01-5.6 3.7l-4.6.1h-.2l.7.8c.4.4.5.9.3 1.3-.3.8-1.3 1-1.9.4L9 20.6l-.4-.5c-.3-.4-.3-1 0-1.4l2.9-3c.6-.6 1.7-.3 2 .6 0 .4 0 .7-.3 1l-.9 1z" fill="currentColor"></path></svg><p class="inline ml-1">{post.reposts}</p></div>
    <div class="mx-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline h-5 w-5"><path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg><p class="inline ml-1">{post.comments}</p></div>
    </div>
    </div>
</Block>
<h1 class="font-mono text-blue-900 text-xl">Comments</h1>
{#each comments as comment, i}
<Comment comment={comment} post={post} />
{/each}
{#if hasMore}
<a href="https://wasteof.money/posts/{post.id}" class="text-blue-900 text-mono underline decoration-solid hover:decoration-gray-200">View more comments on wasteof</a>
{/if}
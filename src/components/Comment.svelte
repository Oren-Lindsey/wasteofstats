<script>
    export let post
    export let comment
    import Block from "./Block.svelte";
    import Comment from "./Comment.svelte";
</script>
<Block>
    <div class="grid place-items-center">
    <h1 class="font-mono text-blue-900 text-xl"><a href="/users/{comment.poster.name}"><img class="h-10 inline mr-1 rounded-full border-2 border-black" src="https://api.wasteof.money/users/{comment.poster.name}/picture" alt="{comment.poster.name}'s profile picture" />@{comment.poster.name}</a></h1>
    </div>
    <p class="text-center">{@html comment.content}</p>
    <!--<a href="/comments/{comment.id}" class="text-blue-900 text-sm grid place-items-center">View comment</a>-->
    <a href="https://beta.wasteof.money/posts/{post.id}/comments/{comment.id}" class="text-blue-900 text-sm grid place-items-center">View comment on wasteof</a>
    {#if comment.hasReplies}
    {#if comment.replies.length > 0}
    {#each comment.replies as reply}
    <Comment comment={reply} post={post} />
    {/each}
    {:else}
    <i class="text-black text-sm grid place-items-center">{comment.replyCount} more replies</i>
    {/if}
    {/if}
</Block>
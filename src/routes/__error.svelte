<script context="module">
    /** @type {import('@sveltejs/kit').Load} */
    export function load({ error, status }) {
      return {
        props: {
          title: `${status} Error`
        }
      };
    }
</script>
  
<script>
    export let title;
</script>
  
<h1 class="font-mono text-3xl text-blue-900">{title}</h1>
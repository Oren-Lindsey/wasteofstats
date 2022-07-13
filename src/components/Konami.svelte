<svelte:window on:keyup="{combinator}" />

<script>
import { writable } from "svelte/store";


	export let konami = false
	
	let combo = []
	let time = Date.now()
	
	function combinator({ keyCode }) {
		const list = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 32]
		const now = Date.now()
		
		if (!list.includes(keyCode)) return
		if (now - time > 2000) combo = []
		
		combo.push(keyCode)
		time = now
		if (JSON.stringify(combo) === JSON.stringify(list)) {
			konami = !konami
		}
	}
</script>
<script>
	let { class: className = "" } = $props();
</script>

<tbody class={`${className}`}>
	<slot />
</tbody>

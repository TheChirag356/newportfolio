<script>
	let { class: className = "" } = $props();
</script>

<td
	class={`px-4 py-3 align-middle text-foreground/90 border-b border-border ${className}`}
>
	<slot />
</td>

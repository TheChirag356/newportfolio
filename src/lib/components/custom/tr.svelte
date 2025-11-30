<script>
	let { class: className = "" } = $props();
</script>

<tr
	class={`border-b border-border last:border-0 hover:bg-muted/30 transition-colors ${className}`}
>
	<slot />
</tr>

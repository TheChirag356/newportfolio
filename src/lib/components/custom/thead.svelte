<script>
	let { class: className = "" } = $props();
</script>

<thead class={`bg-muted/40 text-foreground font-semibold ${className}`}>
	<slot />
</thead>

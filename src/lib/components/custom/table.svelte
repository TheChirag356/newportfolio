<script>
	let { class: className = "" } = $props();
</script>

<div class="w-full overflow-x-auto my-6">
	<table
		class={`w-full border-collapse rounded-xl overflow-hidden text-sm ${className}`}
	>
		<slot />
	</table>
</div>

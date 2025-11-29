<script lang="ts" module>
	// import { img } from '$lib/components/custom'
	// export { img }
</script>

<script lang="ts">
	let { children } = $props();
</script>

<div class="prose prose-neutral dark:prose-invert max-w-none">
	{@render children?.()}
</div>

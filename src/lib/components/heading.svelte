<script lang="ts">
	import Container from '$lib/components/container.svelte';
	import { cn } from '$lib/utils';

	let { children, class: className }: { children?: any; class?: string } = $props();
</script>

<Container class="h-full justify-start px-4 text-3xl font-semibold">
	<h1 class={cn('', className)}>{@render children?.()}</h1>
</Container>

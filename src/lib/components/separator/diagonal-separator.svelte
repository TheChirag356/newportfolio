<script lang="ts">
	import { cn, type WithElementRef } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';
	import Container from '$lib/components/container.svelte';
	type DiagonalSeparatorProps = WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		class?: string;
	};

	let { class: className, children, ...restProps }: DiagonalSeparatorProps = $props();
</script>

<div
	class={cn(
		'pointer-events-none relative flex h-8 w-full items-center justify-center border-y bg-background text-white',
		className
	)}
>
	<Container class={cn('flex h-full w-full max-w-4xl items-center justify-center border-x')}>
		<!-- Gradient Diagonal Lines Pattern -->
		<div
			class="pointer-events-none absolute inset-0 z-0 items-center justify-center"
			style="background-image: repeating-linear-gradient(-60deg, 
            rgba(255, 255, 255, 0.08) 0px, 
            rgba(0, 255, 128, 0) 1px, 
            transparent 1px, 
            transparent 8px
            )"
		></div>
		<!-- Your Content/Components -->
		{@render children?.()}
	</Container>
</div>

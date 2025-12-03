<script lang="ts">
	import { cn } from '$lib/utils';
	let { class: className, children }: { class?: string; children?: any } = $props();
</script>

<div class={cn('relative flex h-full w-full items-center justify-center bg-background', className)}>
	<div
		class={cn(
			'absolute inset-0',
			'bg-size-[20px_20px]',
			'bg-[radial-gradient(#d4d4d4_1px,transparent_1px)]',
			'dark:bg-[radial-gradient(#404040_1px,transparent_1px)]'
		)}
	></div>
	<!-- Radial gradient for the container to give a faded look -->
	<div
		class="pointer-events-none absolute inset-0 flex items-center justify-center bg-background mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]"
	></div>
	<div
		class="relative z-0 bg-linear-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl"
	>
		{@render children?.()}
	</div>
</div>

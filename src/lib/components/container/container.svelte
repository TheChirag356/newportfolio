<script lang="ts">
	import { cn, type WithElementRef } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	type ContainerProps = WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		class?: string;
	};

	let { class: className, children, ...restProps }: ContainerProps = $props();
</script>

<div class={cn('max-w-4xl h-full flex justify-center items-center mx-auto border-x', className)} {...restProps}>
	{@render children?.()}
</div>

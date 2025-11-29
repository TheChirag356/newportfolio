<script lang="ts">
	import { cn, type WithElementRef } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	type ContainerProps = WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		class?: string;
	};

	let { class: className, children, ...restProps }: ContainerProps = $props();
</script>

<div class={cn('lg:max-w-3xl md:max-w-3xl sm:max-w-xl xs:max-w-lg max-w-md h-full flex justify-center items-center mx-auto border-x', className)} {...restProps}>
	{@render children?.()}
</div>

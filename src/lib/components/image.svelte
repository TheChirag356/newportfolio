<script lang="ts">
	import { cn, type WithElementRef } from '$lib/utils';
	import type { HTMLImgAttributes } from 'svelte/elements';

	type Props = WithElementRef<HTMLImgAttributes, HTMLImageElement> & {
		src: string;
		alt: string;
		class?: string;
		width?: number;
		height?: number;
	};

	let { src, alt, width, height, class: className, ...restProps }: Props = $props();
</script>

<img {src} {alt} {width} {height} loading="lazy" class={cn('', className)} {...restProps} />

<script lang="ts">
	import { cn, type WithElementRef } from '$lib/utils';
	import type { HTMLImgAttributes } from 'svelte/elements';

	type Props = WithElementRef<HTMLImgAttributes, HTMLImageElement> & {
		src: string;
		alt: string;
		class?: string;
		width?: number;
		height?: number;
		loading?: 'eager' | 'lazy' | 'auto';
	};

	let { src, alt, class: className, loading = 'lazy', ...restProps }: Props = $props();
</script>

<img {src} {alt} {loading} class={cn('', className)} {...restProps} />

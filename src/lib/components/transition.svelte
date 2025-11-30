<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fade, slide, fly } from 'svelte/transition';
	import { easeInOut } from 'svelte/easing';

	type Props = {
		children: Snippet;
		url: string;
	};

	let { children, url }: Props = $props();
</script>

{#key url}
	<div
		class="h-full"
		in:slide={{
			axis: 'y',
			easing: easeInOut,
			duration: 300
		}}
		out:slide={{
			axis: 'y',
			easing: easeInOut,
			duration: 300
		}}
	>
		{@render children()}
	</div>
{/key}

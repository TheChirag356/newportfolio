<script lang="ts">
	import EmptySeparator from '$lib/components/separator/empty-separator.svelte';
	import Separator from '$lib/components/separator/separator.svelte';
	import { cn, type WithElementRef } from '$lib/utils';
	let { class: className } = $props();
</script>

<EmptySeparator
	class={cn(
		'hidden h-4 w-full grid-cols-1 items-center justify-between gap-2 md:grid sm:h-2 sm:grid-cols-2 sm:gap-4',
		className
	)}
>
	<div class="h-full w-full border-x"></div>
	<div class="h-full w-full border-x"></div>
</EmptySeparator>
<Separator />

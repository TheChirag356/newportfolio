<script lang="ts">
	import { cn, type WithElementRef } from '$lib/utils';
	let { class: className }: Props = $props();
</script>

<div class={cn('border border-border', className)}></div>

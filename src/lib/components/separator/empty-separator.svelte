<script lang="ts">
	let { class: className }: { class?: string } = $props();
	import { cn } from '$lib/utils';
	import Container from '$lib/components/container.svelte';
	import Separator from './separator.svelte';
</script>

<Separator />
<Container class={cn('h-4', className)}></Container>

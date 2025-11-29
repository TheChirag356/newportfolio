<script lang="ts">
	import EmptySeparator from '$lib/components/separator/empty-separator.svelte';
	import Separator from '$lib/components/separator/separator.svelte';
</script>

<EmptySeparator
	class="h-4 hidden sm:grid w-full grid-cols-1 items-center justify-between gap-2  sm:h-2 sm:grid-cols-2 sm:gap-4"
>
	<div class="h-full w-full border-x"></div>
	<div class="h-full w-full border-x"></div>
</EmptySeparator>
<Separator />

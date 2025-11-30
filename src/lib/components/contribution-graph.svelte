<script lang="ts">
	import Container from '$lib/components/container.svelte';
	import type { Week } from '$lib/types';
	let { weeks }: { weeks: Week[] } = $props();
</script>

<div class="flex gap-1 py-2">
	{#each weeks as week, weekIndex}
		<div class="flex flex-col gap-1">
			{#each week.contributionDays as day, dayIndex}
				<div
					class="size-2.5 rounded-[2px]"
					style="background-color: {day.color};"
					title={`${day.date}: ${day.contributionCount} contributions`}
				></div>
			{/each}
		</div>
	{/each}
</div>

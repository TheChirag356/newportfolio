<script lang="ts">
	import type { Week } from '$lib/types';
	let { weeks, totalContributions }: { weeks: Week[], totalContributions: number } = $props();
	import {formatDate} from '$lib/utils';

	const newColors: { [key: string]: string } = {
		'#ebedf0': '#2F2F2F',
		'#9be9a8': '#646464',
		'#40c463': '#A5A5A5',
		'#30a14e': '#DDDDDD',
		'#216e39': '#F6F6F6'
	};

	function numberOfContributions(color: string): string {
		switch (color) {
			case '#ebedf0':
				return 'No contributions';
			case '#9be9a8':
				return '1-9 contributions';
			case '#40c463':
				return '10-19 contributions';
			case '#30a14e':
				return '20-29 contributions';
			case '#216e39':
				return '30+ contributions';
			default:
				return 'No contributions';
		}
	}
</script>

<div class="flex gap-1 py-2 w-full overflow-x-auto px-2">
	{#each weeks as week}
		<div class="flex flex-col gap-1">
			{#each week.contributionDays as day}
				<div
					class="size-2.5 rounded-[2px]"
					style="background-color: {newColors[day.color] ?? day.color};"
					title={`${day.contributionCount} contributions on ${formatDate(day.date)}`}
				></div>
			{/each}
		</div>
	{/each}
</div>
<div class="flex justify-between items-center text-sm px-2 w-full">
	<div>{totalContributions} contributions in the last year</div>
	<div class="flex gap-1 items-center">
		<span>Less</span>
		{#each Object.entries(newColors) as [originalColor, mappedColor]}
			<div class="flex items-center gap-1">
				<div
					class="size-3 rounded-[2px]"
					style="background-color: {mappedColor};"
					title="{numberOfContributions(originalColor)}"
				></div>
			</div>
		{/each}
		<span>More</span>
	</div>
</div>

<script lang="ts">
	import type { Project } from '$lib/data/projects';
	import { cn } from '$lib/utils';
	import { IconCaretUpFilled, IconCaretDownFilled, IconLink } from '@tabler/icons-svelte';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import Image from '$lib/components/image.svelte';

	let { project, isNotLast }: { project: Project; isNotLast: boolean } = $props();

	let isOpen = $state(false);
	function toggleOpen() {
		isOpen = !isOpen;
	}
</script>

<div class="flex h-full w-full flex-col">
	<div
		role="button"
		tabindex="0"
		class={cn(
			'group flex h-18 w-full items-center justify-between border-neutral-800 pr-4 transition-all duration-300 ease-in-out',
			isOpen ? 'border-b' : '',
			isNotLast ? 'border' : ''
			// idx >= 4
			//   ? buttonOpen
			//     ? "animate-in slide-in-from-top-2 fade-in"
			//     : "animate-out slide-out-to-top-2 fade-out"
			//   : "",
		)}
		onclick={toggleOpen}
		onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleOpen()}
	>
		<div class="flex h-full w-full items-center justify-start gap-4">
			<div class="flex h-full items-center justify-center border-r px-2">
				<Image src={project.imgSrc} alt={project.imgAlt} width={48} height={48} />
			</div>
			<div class="flex flex-col items-start justify-center">
				<div class="font-medium underline-offset-4">{project.name}</div>
				<div
					class="flex items-center gap-2 divide-x divide-neutral-700 text-[12px] text-neutral-700 dark:text-neutral-400"
				>
					<p class="">
						{project.dateFrom}
						{project.dateTo !== '' && `-${project.dateTo}`}
					</p>
				</div>
			</div>
		</div>
		<div
			class="flex items-center justify-center gap-4 text-neutral-400 transition-all duration-150 ease-in"
		>
			<a target="blank" href={project.href} class="z-5">
				<Tooltip.Provider>
					<Tooltip.Root>
						<Tooltip.Trigger>
							<IconLink class="h-4 w-4 hover:text-neutral-600 hover:dark:text-neutral-200" />
						</Tooltip.Trigger>
						<Tooltip.Content>Open Project Link</Tooltip.Content>
					</Tooltip.Root>
				</Tooltip.Provider>
			</a>
			{#if isOpen}
				<IconCaretUpFilled class="h-4 w-4 hover:text-neutral-600 hover:dark:text-neutral-200" />
			{:else}
				<IconCaretDownFilled class="h-4 w-4 hover:text-neutral-600 hover:dark:text-neutral-200" />
			{/if}
		</div>
	</div>
	{#if isOpen}
		<div
			class={cn(
				'min-h-24 w-full flex-col items-center justify-center gap-8 p-4',
				isNotLast ? 'border-b' : ''
			)}
		>
			<div class="pb-4 text-sm">
				<ul class="list-disc space-y-1 pl-5">
					{#each project.description as item}
						<li>{item}</li>
					{/each}
				</ul>
			</div>
			<div class="flex w-full flex-wrap items-center justify-start gap-3">
				{#each project.tags as tag}
					<div
						class="flex min-h-4 items-center justify-center rounded-md bg-neutral-300 px-2 text-[10px] text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300"
					>
						{tag}
					</div>
				{/each}
			</div>
		</div>
	{/if}
</div>

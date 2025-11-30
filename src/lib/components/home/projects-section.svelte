<script lang="ts">
	import { Separator } from '$lib/components/separator';
	import Heading from '$lib/components/heading.svelte';
	import { Button } from '$lib/components/ui/button';
	import Container from '$lib/components/container.svelte';
	import { cn } from '$lib/utils';
	import ProjectItem from '$lib/components/project-item.svelte';
	import { projects } from '$lib/data/projects';
	import { IconArrowDown } from '@tabler/icons-svelte';

	let isButtonOpen = $state(false);
	function toggleButton() {
		isButtonOpen = !isButtonOpen;
	}
</script>

<section id="projects">
	<Heading class="flex items-center justify-center"
		>Projects{' '}<span class="px-2 text-[12px] text-neutral-600 dark:text-neutral-300"
			>({projects.length})</span
		></Heading
	>
	<Separator />
	<Container class="h-full w-full flex-col overflow-hidden">
		{#each projects as project, idx}
			{#if idx < 4 || isButtonOpen}
				<ProjectItem {project} isNotLast={idx != projects.length - 1} />
			{/if}
		{/each}
	</Container>
	<Separator />
	<Container class="h-full w-full flex-col overflow-hidden">
		<Button variant="outline" onclick={toggleButton} class="cursor-pointer">
			{isButtonOpen ? 'Show Less' : 'Show More'}
			<span>
				<IconArrowDown
					class={cn('transition-all duration-200', isButtonOpen ? '-rotate-180' : '')}
				/>
			</span>
		</Button>
	</Container>
</section>

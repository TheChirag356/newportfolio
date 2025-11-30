<script lang="ts">
	import Container from '$lib/components/container.svelte';
	import { OneLiners } from '$lib/data/oneliners';
</script>

<section id="one-liners">
	<Container class="flex flex-col items-start justify-center px-6">
		{#each OneLiners as line}
			{#if line.isLink}
				<a
					target="_blank"
					href={line.href}
					class="inline-flex items-center gap-4 py-2 no-underline"
				>
					<svelte:component this={line.icon} class="h-4" />
					<p class="text-sm text-neutral-800 dark:text-neutral-400">
						{line.text}
					</p>
				</a>
			{:else}
				<div class="inline-flex items-center gap-4 py-2">
					<svelte:component this={line.icon} class="h-4" />
					<p class="text-sm text-neutral-800 dark:text-neutral-400">
						{line.text}
					</p>
				</div>
			{/if}
		{/each}
	</Container>
</section>

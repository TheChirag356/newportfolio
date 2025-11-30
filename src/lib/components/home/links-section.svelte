<script lang="ts">
	import Container from '$lib/components/container.svelte';
	import { IconArrowUpRight } from '@tabler/icons-svelte';
	import { EmptyGridSeparator } from '$lib/components/separator';
	import { links, type LinkType } from '$lib/data/links';
	import Image from '$lib/components/image.svelte';

	const linksArray: Array<Array<LinkType | null>> = [];

	let iter = 0;

	while (iter < links.length) {
		const link1: LinkType | null = links[iter];
		let link2: LinkType | null = null;
		iter += 1;
		if (iter != links.length) {
			link2 = links[iter];
		}

		linksArray.push([link1, link2]);

		iter += 1;
	}
</script>

<section id="links">
	{#each linksArray as link, idx}
		<div>
			<Container
				class="grid h-full min-h-16 w-full grid-cols-1 items-center justify-between gap-2 sm:min-h-18 sm:grid-cols-2 sm:gap-4"
			>
				{#each link as item}
					{#if item != null}
						<a
							target="_blank"
							href={item?.href || '#'}
							class="group no-underline flex h-full min-h-16 w-full items-center justify-between border-x border-b px-3 py-3 transition-colors sm:min-h-18 sm:border-b-0 sm:px-4 sm:py-4"
						>
							<div class="flex items-center justify-center gap-3 sm:gap-4">
								<div class="flex shrink-0 items-center justify-center">
									<Image
										src={item?.imgSrc}
										alt={item?.name || 'link image'}
										width={48}
										height={48}
										class="size-8 sm:size-12"
									></Image>
								</div>
								<div class="flex min-w-0 flex-col items-start justify-center">
									<h2
										class="truncate text-base underline-offset-4 group-hover:underline sm:text-lg"
									>
										{item?.name}
									</h2>
									<p class="w-full truncate text-sm text-neutral-500">{item?.usertag}</p>
								</div>
							</div>
							<div class="shrink-0">
								{#if item}
									<svelte:component
										this={IconArrowUpRight}
										class="h-4 w-4 text-neutral-700 transition-colors group-hover:text-neutral-500"
									/>
								{/if}
							</div>
						</a>
					{:else}
						<div
							class="hidden h-full min-h-16 w-full items-center justify-between border-x px-3 sm:flex sm:min-h-18 sm:border-t-0 sm:px-4"
						></div>
					{/if}
				{/each}
			</Container>
			{#if idx != linksArray.length - 1}
				<EmptyGridSeparator />
			{/if}
		</div>
	{/each}
</section>

<script lang="ts">
	import {
		DiagonalSeparator,
		EmptyGridSeparator,
		EmptySeparator,
		Separator
	} from '$lib/components/separator';
	import Heading from '$lib/components/heading.svelte';
	import Container from '$lib/components/container.svelte';
	import Image from '$lib/components/image.svelte';
	let { data } = $props();

	type BlogItem = {
		title: string;
		description?: string;
		date: string;
		categories?: string[];
		src?: string;
		slug: string;
	};

	let blogs = data.blogs.reduce((chunks: BlogItem[][], item, index) => {
		if (index % 2 === 0) {
			chunks.push([item]);
		} else {
			chunks[chunks.length - 1].push(item);
		}
		return chunks;
	}, []);
</script>

<div class="mt-[0.5px]">
	<DiagonalSeparator />
	<section id="blogs">
		<Heading class="flex h-12 items-center justify-center">Blog</Heading>
		<Separator />
		<Container class="flex h-10 items-center justify-start px-4 text-sm text-neutral-300">
			Thoughts, stories and ideas that would make the world a better place, maybe.
		</Container>
		<Separator class="flex sm:hidden" />
		{#each blogs as chunk}
			<EmptyGridSeparator class="hidden" />
			<div>
				<Container
					class="grid h-full min-h-16 w-full grid-cols-1 items-center justify-between gap-2 sm:min-h-18 sm:grid-cols-2 sm:gap-4"
				>
					{#each chunk as item}
						<a
							href={'/blog/' + item.slug}
							class="group flex h-full min-h-16 w-full cursor-pointer items-center justify-center border-x border-b px-3 py-3 no-underline transition-colors sm:min-h-18 sm:border-b-0 sm:px-4 sm:py-4"
						>
							<div class="flex w-full flex-col items-center justify-center gap-3 sm:gap-4">
								<div
									class="flex h-60 w-full shrink-0 items-center justify-center rounded-lg border px-4"
								>
									<Image src={item.src!} alt={item.title} class="rounded-md object-fill"></Image>
								</div>
								<div class="flex w-full flex-col items-start justify-start">
									<h2 class="truncate text-lg underline-offset-4 group-hover:underline">
										{item.title}
									</h2>
									<p class="w-full text-[14px] text-foreground/60">
										{item.description}
									</p>
									<div class="w-full truncate text-xs text-foreground/50">
										{item.date}
									</div>
								</div>
							</div>
						</a>
					{/each}
					{#if chunk.length === 1}
						<div
							class="hidden h-full min-h-16 w-full items-center justify-between border-x px-3 sm:flex sm:min-h-18 sm:border-t-0 sm:px-4"
						></div>
					{/if}
				</Container>
			</div>
		{/each}
	</section>
	<Separator />
</div>

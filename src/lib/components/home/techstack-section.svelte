<script lang="ts">
	import Heading from '$lib/components/heading.svelte';
	import { Separator } from '$lib/components/separator';
	import Image from '$lib/components/image.svelte';
	import Container from '$lib/components/container.svelte';
	import { techstack } from '$lib/data/techstack';
	import * as Tooltip from "$lib/components/ui/tooltip";
</script>

<section id="stack">
	<Heading>Stack</Heading>
	<Separator />
	<Container class="flex min-h-10 flex-wrap items-start justify-start gap-4 px-6 py-4">
		<div class="mx-auto my-auto flex flex-wrap items-center justify-center gap-4">
			{#each techstack as tech}
				<Tooltip.Provider>
					<Tooltip.Root>
						<Tooltip.Trigger>
							<Image src={tech.imgSrc} width={32} height={32} alt={tech.alt} />
						</Tooltip.Trigger>
						<Tooltip.Content>
							<p>{tech.alt}</p>
						</Tooltip.Content>
					</Tooltip.Root>
				</Tooltip.Provider>
			{/each}
		</div>
	</Container>
</section>

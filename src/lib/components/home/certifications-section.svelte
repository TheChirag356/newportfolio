<script lang="ts">
	import Heading from '$lib/components/heading.svelte';
	import { certifications, type Certificate } from '$lib/data/certificates';
	import Container from '$lib/components/container.svelte';
	import Image from '$lib/components/image.svelte';
	import { IconArrowUpRight, IconArrowDown } from '@tabler/icons-svelte';
	import { cn } from '$lib/utils';
	import { Button } from '$lib/components/ui/button';
    import { Separator } from '$lib/components/separator';

	let isButtonOpen = $state(false);
	function toggleButton() {
		isButtonOpen = !isButtonOpen;
	}
</script>

<section id="certifications">
	<Heading class="flex items-center justify-center">
		Certifications{' '}
		<span class="px-2 text-[12px] text-neutral-600 dark:text-neutral-300">
			({certifications.length})
		</span>
	</Heading>
    <Separator />
	<Container class="h-full w-full flex-col overflow-hidden">
		{#each certifications as certificate, idx}
			{#if idx < 4 || isButtonOpen}
				<a
					target="blank"
					href={certificate.link}
					class={cn(
						'group flex h-18 w-full items-center justify-between no-underline border-neutral-800 pr-4 transition-all duration-300 ease-in-out',
						idx != certifications.length - 1 ? 'border-b' : '',
						// Animation for items beyond the first 4
						idx >= 4
							? isButtonOpen
								? 'animate-in fade-in slide-in-from-top-2'
								: 'animate-out fade-out slide-out-to-top-2'
							: ''
					)}
				>
					<div class="flex h-full w-full items-center justify-start gap-4">
						<div class="flex h-full items-center justify-center border-r px-2">
							<Image src={certificate.imgSrc} alt={certificate.imgAlt} width={48} height={48} />
						</div>
						<div class="flex flex-col items-start justify-center">
							<div class="font-medium underline-offset-4 group-hover:underline">
								{certificate.name}
							</div>
							<div
								class="flex items-center gap-2 divide-x divide-neutral-700 text-[12px] text-neutral-700 dark:text-neutral-400"
							>
								<p class="pr-2">@ {certificate.from}</p>
								<p class="pl-2">{certificate.date}</p>
							</div>
							<div class="flex items-center text-[12px] text-neutral-400">
								{certificate.extra}
							</div>
						</div>
					</div>
					<div
						class="text-neutral-400 transition-all duration-150 ease-in group-hover:text-neutral-600 group-hover:dark:text-neutral-200"
					>
						<IconArrowUpRight class="h-4" />
					</div>
				</a>
			{/if}
		{/each}
	</Container>
	<Separator />
	<Container class="h-10 transition-all duration-300 ease-in-out">
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

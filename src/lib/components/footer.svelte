<script lang="ts">
	import Container from '$lib/components/container.svelte';
	import { Separator } from '$lib/components/separator';
	import { cn } from '$lib/utils';
	import { IconRss } from '@tabler/icons-svelte';

	type FooterProps = {
		class?: string;
	};

	let { class: className }: FooterProps = $props();
</script>

<footer>
	<Container class={cn('h-20 font-mono', className)}>
		<div class="flex flex-col items-center justify-center text-center text-sm text-neutral-400">
			<p>
				Inspired by{' '}
				<a target="blank" href={'https://x.com/iamncdai'}>@iamncdai</a>
			</p>
			<p>
				Built by{' '}
				<a target="blank" href={'https://x.com/chiragkun'} class=""> Chirag </a>
				. The source code is available on GitHub.
			</p>
		</div>
	</Container>
	<Separator />
	<Container class="h-10">
		<div class="h-full flex items-center justify-center gap-4 border-x px-4">
			<a href="/rss" class="flex items-center justify-center">
				<IconRss />
			</a>
		</div>
	</Container>
</footer>
<Separator />

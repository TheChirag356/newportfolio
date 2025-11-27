<script lang="ts">
	import { Container } from '$lib/components/container';
	import { Separator } from '$lib/components/separator';
	import { cn } from '$lib/utils';

	type FooterProps = {
		class?: string;
	};

	let { class: className }: FooterProps = $props();
</script>

<Separator />
<Container class={cn('h-20 font-mono', className)}>
	<footer class="flex flex-col items-center justify-center text-center text-sm text-neutral-400">
		<p>
			Inspired by{' '}
			<a target="blank" href={'https://x.com/iamncdai'}>@iamncdai</a>
		</p>
		<p>
			Built by{' '}
			<a target="blank" href={'https://x.com/chiragkun'} class="">
				Chirag
			</a>
			. The source code is available on GitHub.
		</p>
	</footer>
</Container>
<Separator />
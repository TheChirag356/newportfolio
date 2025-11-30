<script lang="ts">
	import Container from '$lib/components/container.svelte';
	import { DiagonalSeparator, EmptySeparator, Separator } from '$lib/components/separator';
	import { toast } from 'svelte-sonner';
	import { formatDate } from '$lib/utils';
	import { Button } from '$lib/components/ui/button';
	let { data } = $props();
	const Content = data.content;

	import { IconArrowLeft, IconShare } from '@tabler/icons-svelte';

	let progress = $state(0);
	function updateProgress() {
		const scrollTop = window.scrollY;
		const docHeight = document.body.scrollHeight - window.innerHeight;
		progress = (scrollTop / docHeight) * 100;
	}

	$effect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', updateProgress);
		}

		return () => window.removeEventListener('scroll', updateProgress);
	});
</script>

<svelte:head>
	<title>{data.meta.title} - Chirag's Blog</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content="{data.meta.title} - Chirag's Blog" />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:image" content={data.meta.ogImage} />
	<meta name="twitter:image" content={data.meta?.ogImage} />
</svelte:head>

<div
	class="fixed top-0 left-0 z-9999 h-1 bg-primary transition-all duration-150"
	style="width: {progress}%"
></div>

<DiagonalSeparator />
<Container class="items-center justify-between px-4 py-3 text-sm">
	<a href="/blog" class="flex items-center gap-1 text-foreground/70 no-underline hover:underline">
		<IconArrowLeft class="size-4" />
		<span>Blog</span>
	</a>

	<Button
		variant="ghost"
		class="flex cursor-pointer gap-2 text-foreground/70 no-underline hover:no-underline"
		onclick={() => {
			try {
				navigator.clipboard.writeText(window.location.href);
				toast.success('Link copied to clipboard!');
			} catch (error) {
				toast.error('Failed to copy link.');
			}
		}}
	>
		<span>Share</span>
		<IconShare class="size-4" />
	</Button>
</Container>
<DiagonalSeparator />
<article>
	<Container class="justify-start px-4 py-2 text-4xl font-semibold">
		<hgroup>
			<h1>{data.meta.title}</h1>
		</hgroup>
	</Container>
	<Separator />

	<Container class=" flex-col items-start justify-start px-4 py-4 text-justify">
		<p class="text-md pb-4 text-foreground/80">{data.meta.description}</p>
		<Content />
	</Container>
</article>
<Separator />

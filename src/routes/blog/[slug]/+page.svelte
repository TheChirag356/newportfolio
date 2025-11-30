<script lang="ts">
	import Container from '$lib/components/container.svelte';
	import { DiagonalSeparator, EmptySeparator, Separator } from '$lib/components/separator';
	import { formatDate } from '$lib/utils';
	let { data } = $props();
	const Content = data.content;

	import { IconArrowLeft } from '@tabler/icons-svelte';
</script>

<svelte:head>
	<title>{data.meta.title} - Chirag's Blog</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content="{data.meta.title} - Chirag's Blog" />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:image" content={data.meta.ogImage} />
	<meta name="twitter:image" content={data.meta?.ogImage} />
</svelte:head>

<DiagonalSeparator />
<Container class="justify-between items-center px-4 text-sm py-3">
	<a href="/blog" class="flex items-center gap-1 text-foreground/70 no-underline hover:underline">
		<IconArrowLeft class="size-4" />
		<span>Blog</span>
	</a>

</Container>
<DiagonalSeparator />
<article>
	<Container class="justify-start px-4 py-2 text-4xl font-semibold">
		<hgroup>
			<h1>{data.meta.title}</h1>
		</hgroup>
	</Container>
	<Separator />

	<Container
		class=" flex-col items-start justify-start px-4 py-4 text-justify"
	>
		<p class="pb-4 text-md text-foreground/80">{data.meta.description}</p>
		<Content />
	</Container>
</article>
<Separator />

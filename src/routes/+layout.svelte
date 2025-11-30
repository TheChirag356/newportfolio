<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.ico';
	import { ModeWatcher } from 'mode-watcher';
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import PageTransition from '$lib/components/transition.svelte';
	import { Toaster } from "$lib/components/ui/sonner";

	let { children, data } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Chirag's Portfolio</title>
	<meta name="twitter:image" content={data.meta?.ogImage} />
	<meta property="og:image" content={data.meta?.ogImage} />
</svelte:head>

<ModeWatcher defaultMode="dark" />
<Toaster position="bottom-center" />
<main class="selection:bg-foreground selection:text-background font-mono">
	<Navbar />
	<div>
		<PageTransition url={data.url}>
			{@render children()}
		</PageTransition>
	</div>
	<Footer />
</main>

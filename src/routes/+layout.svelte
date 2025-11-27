<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.ico';
	import { ModeWatcher } from 'mode-watcher';
	import { Navbar } from '$lib/components/navbar';
	import { Footer } from '$lib/components/footer';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher defaultMode="dark" />
<main class="">
	<Navbar />
	<div>
		{@render children()}
	</div>
	<Footer />
</main>

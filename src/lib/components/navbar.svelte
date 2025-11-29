<script lang="ts">
	import { page } from '$app/state';
	let currentPage = $state(page.url.pathname);
	import ThemeToggle from './theme-toggle.svelte';

	$effect(() => {
		currentPage = (
			page.url.pathname.split('/')[1] ? `/${page.url.pathname.split('/')[1]}` : '/'
		) as typeof currentPage;
	});

	import { Separator } from '$lib/components/separator';
	import Container from '$lib/components/container.svelte';
	import { cn } from '$lib/utils';

	const links = [
		{ href: '/', label: 'Portfolio' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/components', label: 'Components' }
	];
</script>

<header class="sticky inset-x-0 top-0 left-0 z-50 h-12 bg-background font-mono text-sm">
	<Separator />
	<Container>
		<nav class="mx-auto flex h-24 max-w-5xl items-center justify-between px-4">
			<div></div>
			<div class="hidden h-full items-center justify-end gap-4 sm:flex">
				{#each links as { href, label }}
					<a
						{href}
						aria-current={currentPage === href}
						class={cn(
							'',
							currentPage === href
								? 'font-medium text-foreground'
								: 'text-muted-foreground no-underline'
						)}>{label}</a
					>
				{/each}
				<ThemeToggle />
			</div>
		</nav>
	</Container>
	<Separator />
</header>

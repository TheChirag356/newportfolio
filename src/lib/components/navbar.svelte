<script lang="ts">
	import { page } from '$app/state';
	let currentPage = $state(page.url.pathname);
	import ThemeToggle from './theme-toggle.svelte';
	import { IconRss } from '@tabler/icons-svelte';
	import { Button } from '$lib/components/ui/button';

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
		{ href: '/projects', label: 'Projects' },
		{ href: '/components', label: 'Components' }
	];

	let isMenuOpen = $state(false);
</script>

<header class="sticky inset-x-0 top-0 left-0 z-50 h-12 bg-background font-mono text-sm">
	<Separator />
	<Container>
		<nav class="mx-auto flex h-24 max-w-5xl items-center justify-between px-4">
			<div></div>
			<div class="h-full items-center justify-end gap-4 flex">
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
				<div class="flex items-center gap-2">
					<ThemeToggle />
					<a href="/rss" target="_blank" rel="noopener noreferrer">
						<Button variant="ghost" size="icon" class="cursor-pointer rounded-full">
							<IconRss
								class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all"
							/>
							<span class="sr-only">RSS</span>
						</Button>
					</a>
				</div>
			</div>
		</nav>
	</Container>
</header>

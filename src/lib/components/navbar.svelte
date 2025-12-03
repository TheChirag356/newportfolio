<script lang="ts">
	import { page } from '$app/state';
	let currentPage = $state(page.url.pathname);
	import ThemeToggle from './theme-toggle.svelte';
	import { IconRss, IconMenu2, IconX, IconDeviceDesktopFilled, IconSun, IconMoon } from '@tabler/icons-svelte';
	import { Button } from '$lib/components/ui/button';
	import { fade } from 'svelte/transition';
	import {resetMode, setMode} from "mode-watcher"

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
	function handleMenuState() {
		isMenuOpen = !isMenuOpen;
	}
	function handleOutsideClick(e: MouseEvent | KeyboardEvent) {
		if (e.target !== e.currentTarget) return;
		isMenuOpen = false;
	}
</script>

<header class="sticky inset-x-0 top-0 left-0 z-20 h-12 bg-background font-mono text-sm">
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
				<div class="sm:flex hidden items-center gap-2">
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
				<div class="sm:hidden flex items-center">
					<Button variant="ghost" size="icon" class="cursor-pointer rounded-full" onclick={handleMenuState}>
						{#if isMenuOpen}
							<IconX />
						{:else}
							<IconMenu2 />
						{/if}
					</Button>
				</div>

				{#if isMenuOpen}
					<div
						class="absolute top-12 right-4 z-20 flex w-58 flex-col border bg-background p-4 shadow-md"
					>
							<div class="flex justify-between items-center">
								<span>Theme</span>
								<div class="flex items-center gap-1">
									<Button
										variant="ghost"
										size="icon"
										class="cursor-pointer rounded-full"
										onclick={() => { setMode('light'); }}
									><IconSun /></Button>
									<Button
										variant="ghost"
										size="icon"
										class="cursor-pointer rounded-full"
										onclick={() => { setMode('dark'); }}
									><IconMoon /></Button>
									<Button
										variant="ghost"
										size="icon"
										class="cursor-pointer rounded-full"
										onclick={() => { resetMode(); }}
									><IconDeviceDesktopFilled /></Button>
								</div>
							</div>
							<a href="/rss" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2">
								RSS {" "}<IconRss class="size-4" />
							</a>
					</div>
				{/if}

				{#if isMenuOpen}
				<div 
					class="h-dvh w-dvw absolute top-12 left-0 backdrop-blur-sm z-10" onclick={handleOutsideClick}
					onkeydown={handleOutsideClick}
					aria-hidden="true"
					in:fade
					out:fade
				></div>
				{/if}
			</div>
		</nav>
	</Container>
</header>

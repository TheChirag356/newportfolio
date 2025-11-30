<script lang="ts">
	import { page } from '$app/state';
	const isNotFound = page.status === 404;

	import Container from '$lib/components/container.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/separator';
	import { cn } from '$lib/utils';

	const rows = 40;
	const cols = 40;
</script>

<Separator />
<Container class="h-[45vh] w-full overflow-hidden">
	<div class="relative h-full w-full overflow-hidden">
		<div
			class="absolute"
			style="
				transform: rotateX(60deg) rotateZ(45deg) scale(2) translateX(-25%) translateY(-25%);
				transform-origin: center center;
				left: 50%;
				top: 50%;
				width: 800px;
				height: 600px;
				display: grid;
				grid-template-columns: repeat({cols}, 30px);
				grid-template-rows: repeat({rows}, 30px);
				gap: 0px;
				"
		>
			{#each Array.from({ length: rows * cols }) as box}
				<div
					class="border border-dashed border-gray-400 opacity-20"
					style="width: 30px; height: 30px"
				></div>
			{/each}
		</div>
	</div>
</Container>
<Separator />
<Container class="h-[45vh] w-full font-mono">
	<div
		class="flex h-full w-full flex-col items-center justify-center gap-8 px-6 sm:flex-row sm:items-center sm:justify-between"
	>
		<h1
			class={cn(
				'text-center font-bold uppercase sm:w-1/2',
				isNotFound ? 'text-7xl sm:text-left' : 'text-center text-9xl'
			)}
		>
			{isNotFound ? 'Page Not Found' : page.status}
		</h1>
		<div class="flex flex-col items-center gap-4 text-center sm:w-1/2 sm:items-start sm:text-left">
			<h2 class="text-lg sm:text-2xl">
				<!-- {isNotFound ? "Couldn't find the page you were looking for." : page.error?.message} -->
				{page.error?.message}
			</h2>
			<a href="/">
				<Button variant="outline" class="cursor-pointer">Go to Home</Button>
			</a>
		</div>
	</div>
</Container>
<Separator />
<script lang="ts">
	import Container from '$lib/components/container.svelte';
	import { SeparatorBox } from '$lib/components/separator';
	import Image from '$lib/components/image.svelte';
	import type { SpotifyData } from '$lib/types';
	import { url } from '$lib/config';
	import { cn } from '$lib/utils';
	import { fade } from 'svelte/transition';

	let { initialData }: { initialData?: SpotifyData | false } = $props();

	let isOffline = $derived(!initialData);
	let spotifyData = $derived<SpotifyData | false>(initialData || false);

	// Refresh every 60 seconds
	$effect.pre(() => {
		updateSpotify();
		const interval = setInterval(updateSpotify, 30000);
		return () => clearInterval(interval);
	});

	async function updateSpotify() {
		try {
			const res = await fetch(url + '/api/spotify');
			if (res.ok) {
				spotifyData = await res.json();
				isOffline = false;
			} else {
				isOffline = true;
			}
		} catch {
			isOffline = true;
		}
	}

	const spotifyText = $derived(
		spotifyData?.isPlaying ? `${spotifyData?.title} by ${spotifyData?.artist}` : ''
	);
</script>

<section id="profile">
	<Container class="flex h-42 lg:h-48">
		<!-- My Image -->
		<div class="relative flex h-full items-center justify-center border-r">
			<!-- GREEN SPOTIFY PULSE -->
			<div
				class={cn(
					'pointer-events-none absolute inset-0 -z-10 m-auto h-full w-full rounded-full blur-xl transition-all duration-500',
					spotifyData?.isPlaying ? 'animate-spotify-pulse bg-[#1DB954]/50' : 'opacity-0'
				)}
			></div>

			<!-- PROFILE IMAGE (NO OVERFLOW HIDDEN SO NOTES CAN ESCAPE) -->
			<div class="relative flex items-center justify-center">
				<Image
					src="/profile.jpg"
					height={256}
					width={256}
					alt="Chirag's Image"
					class="aspect-square rounded-full border border-neutral-500 object-cover p-1 transition-all duration-300"
				/>

				<!-- FLOATING NOTES -->
				{#if spotifyData?.isPlaying}
					<div class="notes pointer-events-none absolute inset-0" in:fade out:fade>
						<div class="note">♪</div>
						<div class="note">♫</div>
						<div class="note">♬</div>
					</div>
				{/if}
			</div>
		</div>

		<div class="relative z-10 flex h-full w-full flex-col justify-end">
			<SeparatorBox class="h-3/5 overflow-hidden">
				{#key `${spotifyData?.title}-${spotifyData?.isPlaying}`}
					{#if spotifyData?.isPlaying}
						<div
							class="z-10 flex items-center w-full justify-start gap-2 px-4 py-1 text-sm text-foreground"
							in:fade out:fade
						>
							<Image
								src={spotifyData?.albumImageUrl}
								alt="Album Art"
								class={cn(
									'size-4 rounded-sm',
									spotifyData?.isPlaying ? 'animate-[spin_3s_linear_infinite]' : ''
								)}
							/>

							<div class="text-foreground/70">
								<span>{spotifyText}</span>
							</div>
						</div>
					{/if}
				{/key}
			</SeparatorBox>

			<div class="flex h-1/5 items-center border-t">
				<h1 class="px-4 text-2xl font-bold">Chirag Arora</h1>
			</div>

			<div class="flex h-1/5 items-center justify-self-end border-t">
				<p class="px-4 text-sm">Full Stack Web Developer</p>
			</div>
		</div>
	</Container>
</section>

<style>
	@keyframes spotifyPulse {
		0% {
			transform: scale(0.9);
			opacity: 0.75;
		}
		50% {
			transform: scale(1);
			opacity: 1;
		}
		100% {
			transform: scale(0.9);
			opacity: 0.75;
		}
	}

	.animate-spotify-pulse {
		animation: spotifyPulse 2.2s ease-in-out infinite;
	}

	/* floating notes */
	.notes {
		position: absolute;
	}

	.note {
		position: absolute;
		font-size: 14px;
		color: rgb(30, 215, 96);
		opacity: 0;
		animation: floatNote 2.5s linear infinite;
	}

	.note:nth-child(1) {
		left: 40%;
		animation-delay: 0s;
	}
	.note:nth-child(2) {
		left: 55%;
		animation-delay: 0.5s;
	}
	.note:nth-child(3) {
		left: 50%;
		animation-delay: 1s;
	}

	@keyframes floatNote {
		0% {
			transform: translateY(10px) scale(0.8);
			opacity: 0;
		}
		20% {
			opacity: 1;
		}
		60% {
			transform: translateY(-25px) scale(1);
			opacity: 1;
		}
		100% {
			transform: translateY(-55px) scale(1.25);
			opacity: 0;
		}
	}
</style>

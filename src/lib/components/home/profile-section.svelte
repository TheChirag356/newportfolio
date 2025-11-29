<script lang="ts">
	import Container from '$lib/components/container.svelte';
	import { SeparatorBox } from '$lib/components/separator';
	import Image from '$lib/components/image.svelte';
</script>

<section id="profile">
	<Container class="h-50 flex">
		<div class="h-full space-y-0 border-r">
			<Image
				src="/profile.jpg"
				height={256}
				width={256}
				alt="Chirag's Image"
				class="aspect-square rounded-full border border-neutral-500 object-cover p-1"
			/>
		</div>
		<div class="relative z-10 flex h-full w-full flex-col justify-end">
			<SeparatorBox class="h-3/5" />
			<div class="flex h-1/5 items-center border-t">
				<h1 class="px-4 text-2xl font-bold">Chirag Arora</h1>
			</div>
			<div class="flex h-1/5 items-center justify-self-end border-t">
				<p class="px-4 text-sm">Full Stack Web Developer</p>
			</div>
		</div>
	</Container>
</section>

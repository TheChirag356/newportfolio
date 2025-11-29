<script lang="ts">
	import Container from '$lib/components/container.svelte';
	import { Separator } from '$lib/components/separator';
	import Heading from '$lib/components/heading.svelte';
</script>

<section id="about">
	<Heading>About</Heading>
	<Separator />
	<Container class="px-4 py-4">
		<div
			class="flex flex-col items-center justify-start gap-4 text-sm text-neutral-800 dark:text-neutral-200"
		>
			<p>
				Hey! I am Chirag Arora — a Design Engineer passionate about creating high-performance,
				user-centric software solutions with intuitive and engaging designs.
			</p>
			<p>
				I&apos;m a frontend heavy full stack developer with a passion for elegant and beautiful web
				designs. I specialize in building high-quality web applications using Next.js, React,
				TypeScript, and modern front-end technologies.
			</p>
			<p>
				I also enjoy learning new things daily, which i will try to share to everyone with my blogs.
				Currently working with Golang to build amazing softwares and backends.
			</p>
		</div>
	</Container>
</section>

<script lang="ts">
	import Container from '$lib/components/container.svelte';
	import { Separator } from '$lib/components/separator';
	import Heading from '$lib/components/heading.svelte';
	import ContributionGraph from '$lib/components/contribution-graph.svelte';
	import type { Week } from '$lib/types';
    let {weeks, totalContributions}: {weeks: Week[], totalContributions: number} = $props();
</script>

<Heading>GitHub Contributions</Heading>
<Separator />
<Container class="flex flex-col w-full">
	<ContributionGraph {weeks} {totalContributions} />
</Container>

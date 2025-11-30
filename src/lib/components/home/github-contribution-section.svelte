<script lang="ts">
	import Container from '$lib/components/container.svelte';
	import { Separator } from '$lib/components/separator';
	import Heading from '$lib/components/heading.svelte';
	import ContributionGraph from '$lib/components/contribution-graph.svelte';
    let {weeks}: {weeks: import('$lib/types').Week[]} = $props();
</script>

<Heading>GitHub Contributions</Heading>
<Separator />
<Container>
	<ContributionGraph {weeks} />
</Container>

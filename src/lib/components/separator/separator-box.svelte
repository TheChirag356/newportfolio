<script lang="ts">
	import { cn } from '$lib/utils';

	let { class: className, children }: { class?: string; children?: any } = $props();
</script>

<div>
	<div
		class={cn('pointer-events-none absolute inset-0 z-0 items-center justify-center', className)}
		style="background-image: repeating-linear-gradient(-60deg,
              var(--border) 0px,
              var(--border) 1px,
              transparent 1px,
              transparent 8px
              )"
	></div>
	{@render children?.()}
</div>

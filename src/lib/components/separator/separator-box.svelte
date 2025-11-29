<script lang="ts">
	import { cn } from '$lib/utils';

	let { class: className, children }: { class?: string; children?: any } = $props();
</script>

<div>
	<div
		class={cn('pointer-events-none absolute inset-0 z-0 items-center justify-center', className)}
		style="background-image: repeating-linear-gradient(-60deg,
              rgba(255, 255, 255, 0.08) 0px,
              rgba(0, 255, 128, 0) 1px,
              transparent 1px,
              transparent 8px
              )"
	></div>
	{@render children?.()}
</div>

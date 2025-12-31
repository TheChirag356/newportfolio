<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import * as pdfjsLib from 'pdfjs-dist';
  import pdfWorker from 'pdfjs-dist/build/pdf.worker?url';

  pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

  export let src: string;

  let container: HTMLDivElement;
  let error: string | null = null;
  let pdf: pdfjsLib.PDFDocumentProxy | null = null;
  let observer: ResizeObserver;

  async function render(width: number) {
    if (!width) return;

    container.innerHTML = '';

    try {
      pdf ??= await pdfjsLib.getDocument(src).promise;

      const dpr = window.devicePixelRatio || 1;

      for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        const page = await pdf.getPage(pageNum);

        const baseViewport = page.getViewport({ scale: 1 });

        // Scale to fit container (CSS size)
        const cssScale = width / baseViewport.width;

        // CSS viewport (layout)
        const viewport = page.getViewport({ scale: cssScale });

        // Canvas pixel size for HiDPI (multiply by devicePixelRatio)
        const canvasViewport = page.getViewport({ scale: cssScale * dpr });

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d')!;

        canvas.width = Math.floor(canvasViewport.width);
        canvas.height = Math.floor(canvasViewport.height);

        // CSS size (layout) stays same as viewport
        canvas.style.width = `${viewport.width}px`;
        canvas.style.height = `${viewport.height}px`;

        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = 'high';

        container.appendChild(canvas);

        await page.render({
          canvas,
          canvasContext: context,
          viewport: canvasViewport
        }).promise;
      }
    } catch (e) {
      console.error(e);
      error = 'Failed to load PDF';
    }
  }

  onMount(() => {
    observer = new ResizeObserver(([entry]) => {
      render(entry.contentRect.width);
    });
    observer.observe(container);
  });

  onDestroy(() => {
    observer?.disconnect();
  });
</script>

{#if error}
  <p class="text-red-400">{error}</p>
{/if}

<div
  bind:this={container}
  class="mx-auto w-full max-w-5xl flex flex-col items-center gap-4 overflow-auto rounded-xs"
></div>

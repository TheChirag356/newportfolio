<script lang="ts">
  import Container from '$lib/components/container.svelte';
  import { DiagonalSeparator } from '$lib/components/separator';
  import PdfViewer from '$lib/components/pdf-viewer.svelte';

  const pdfUrl = '/cv.pdf';
</script>

<DiagonalSeparator />

<Container class="h-[80vh] w-full overflow-auto bg-neutral-950 py-4 px-4 flex flex-col items-center">
  <PdfViewer src={pdfUrl} />
</Container>

<DiagonalSeparator />

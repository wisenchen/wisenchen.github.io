<template>
  <canvas id="the-canvas" style="border: 1px solid black"></canvas>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const initPdf = async (url) => {
  const pdfjsLib = globalThis.pdfjsLib;
  const scale = 1.5;
  const canvas = document.getElementById('the-canvas') as HTMLCanvasElement;
  const context = canvas.getContext('2d');

  pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.worker.min.mjs';

  try {
    const pdf = await pdfjsLib.getDocument(url).promise;
    const page = await pdf.getPage(1);
    const viewport = page.getViewport({ scale });

    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderContext = {
      canvasContext: context,
      viewport,
    };

    await page.render(renderContext).promise;
    console.log('Page rendered');
  } catch (error) {
    console.error('Error while loading or rendering PDF:', error);
  }
};

export default defineComponent({
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    setTimeout(() => {
      initPdf(props.url);
    }, 100);
  },
});
</script>

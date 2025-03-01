<template>
  <div>
    <Line :data="chartData" :options="chartOptions"></Line>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Line } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import type { ChartData, ChartOptions } from 'chart.js';
import type { PropType } from 'vue';

// Register the necessary chart.js components
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

export default defineComponent({
  name: 'LineChart',
  components: {
    Line
  },
  props: {
    chartData: {
      type: Object as PropType<ChartData<'line'>>,
      required: true
    },
    chartOptions: {
      type: Object as PropType<ChartOptions<'line'>>,
      required: true
    }
  }
});
</script>

<style scoped>
div {
  position: relative;
  width: 100%;
  height: 400px;
}
</style>
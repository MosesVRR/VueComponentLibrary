<script setup lang="ts">
import { Button, LineChart } from './index';

const handleButtonClick = () => {
  alert('Button clicked!');
};

const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: '#f87979',
      data: [40, 39, 10, 40, 39, 80, 40]
    }
  ]
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false
};
</script>

<template>
  <Button label="Click Me" @click="handleButtonClick" />
  <!-- Add other components to test them -->
  <!-- <AnotherComponent /> -->
  <div>
    <LineChart :chart-data="chartData" :chart-options="chartOptions" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

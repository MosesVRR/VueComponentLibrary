<script setup lang="ts">
import Button from './components/Button.vue'

const handleButtonClick = () => {
  alert('Button clicked!')
}
</script>

<template>
  <Button label="Click Me" @click="handleButtonClick" />
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

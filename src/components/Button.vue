<template>
  <button @click="handleClick">{{ label }}</button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{ label: string }>()
const emit = defineEmits<{ (e: 'click'): void }>()

const handleClick = () => {
  emit('click')
}
</script>

<style scoped>
button {
  padding: 10px 20px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #38a169;
}
</style>

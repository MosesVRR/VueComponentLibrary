<template>
  <Button label="Click Me" @click="handleButtonClick" />
</template>

<script setup lang="ts">
import { Button } from '../index';

const handleButtonClick = () => {
  alert('Button clicked!');
};
</script>

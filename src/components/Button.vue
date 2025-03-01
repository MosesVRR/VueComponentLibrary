<template>
  <button @click="handleClick">{{ label }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
    label: {
      type: String,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
});
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

<template>
  <button class="button font-button" @click="handleClick">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";

const emit = defineEmits<{
  "click:button": [];
}>();

function handleClick() {
  emit("click:button");
}
</script>

<style scoped>
.button {
  display: inline-block;
  border: none;
  padding: 10px;
  width: 100px;
  transition-duration: 0.4s;
  color: var(--color-white);
  background-color: var(--color-primary);
  text-align: center;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
}
</style>

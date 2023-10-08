<template>
  <div class="wrapper">
    <div class="header">
      <div class="header-border" />
      <div class="header-text font-h1">{{ headline }}</div>
    </div>
    <div class="hero">
      <div class="left">
        <div class="left-title font-h2-primary">{{ title }}</div>
        <div class="left-subtitle font-base">
          {{ description }}
        </div>
        <Button class="cta-button" @click:button="handleOpenContact">
          {{ buttonLabel }}
        </Button>
      </div>
      <div class="right">
        <img :src="imageSrc" class="cta-image" :alt="imageAlt" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import Button from "./Button.vue";

const emit = defineEmits<{
  "open:contact": [];
}>();

defineProps({
  title: String,
  description: String,
  buttonLabel: String,
  imageSrc: String,
  imageAlt: String,
  headline: String,
});

function handleOpenContact() {
  emit("open:contact");
}
</script>

<style scoped>
.header {
  display: flex;
  padding: 20px 16px;
}
.header-text {
  padding-left: 10px;
  padding-right: 10px;
}
.header-border {
  border-left: 6px solid var(--color-negative);
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
}
.hero {
  display: flex;
  flex-direction: column-reverse;
  align-items: stretch;
}
.left {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  gap: 30px;
  padding: 16px;
  background-color: var(--color-gray-light);
}

.left-title {
  font-size: 24px;
  font-weight: 600;
}
.left-subtitle {
  font-size: 16px;
}

.cta-image {
  width: 100%;
  height: auto;
  object-fit: fill;
}
.cta-button {
  margin: 10px 0;
  color: var(--color-white);
  cursor: pointer;
}
@media screen and (min-width: 768px) {
  .header {
    padding-left: 60px;
    padding-bottom: 20px;
  }
  .hero {
    align-items: center;
    flex-direction: column-reverse;
  }
  .left {
    display: flex;
    padding: 60px;
    width: 100%;
  }
  .right {
    display: flex;
    width: 100%;
  }
}
@media screen and (min-width: 1024px) {
  .hero {
    flex-direction: row;
    align-items: stretch;
  }

  .left {
    padding: 60px;
  }
}
</style>

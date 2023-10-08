<template>
  <div class="contact">
    <div class="contact-title font-h2-secondary">{{ title }}</div>
    <Button class="contact-button" @click="handleCloseContact">
      <CloseIcon class="contact-svg" />
    </Button>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from "vue";
import CloseIcon from "./icons/CloseIcon.vue";
import Button from "./Button.vue";

const emit = defineEmits<{
  "close:contact": [];
}>();

defineProps({
  title: String,
});

const handleCloseContact = () => {
  emit("close:contact");
};
</script>

<style scoped>
.contact {
  display: flex;
  position: relative;
  justify-content: space-between;
  margin-top: 15px;
  padding: 16px;
  width: 100%;
  height: 200px;
  background: var(--color-secondary);

  /* For styling the triangle */
  &::before {
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid var(--color-secondary);
    position: absolute;
    width: 0;
    height: 0;
    content: "";
    top: -10px;
  }
}
.contact-title {
  width: 100%;
  color: var(--color-white);
}
.contact-button {
  display: flex;
  align-items: center;
  border: 0;
  height: 30px;
  width: auto;
  background-color: transparent;
}
.contact-svg {
  cursor: pointer;
  color: var(--color-white);
}

@media screen and (min-width: 768px) {
  .contact {
    padding: 16px 60px;

    &::before {
      left: 50px;
    }
  }
  .contact-button {
    justify-content: flex-end;
  }
}
@media screen and (min-width: 1024px) {
  .contact {
    padding: 16px 60px;

    &::before {
      left: 60px;
    }
  }
}
</style>
```

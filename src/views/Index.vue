<template>
  <main>
    <Hero
      title="A wonderful serenity has taken possession"
      description="A wonderful serenity has taken possession of my entire soul, like these sweet moments."
      buttonLabel="Contact us"
      :imageSrc="Image"
      imageAlt="Mountains"
      headline="CTA - Main conversion"
      @open:contact="handleOpenContact"
    />
    <Contact
      v-if="isContactViisible"
      title="Contact us"
      @close:contact="handleCloseContact"
    />
  </main>
</template>

<script setup lang="ts">
// Container component that is repsonsible for logic and layout
import { ref } from "vue";
import Hero from "../components/Hero.vue";
import Contact from "../components/Contact.vue";
import Image from "../assets/hero-mountains.jpg";

const isContactViisible = ref(false);

function handleOpenContact() {
  isContactViisible.value = true;
}

function handleCloseContact() {
  isContactViisible.value = false;
}
</script>

<style scoped></style>

<script setup lang="ts">
import HeaderComponent from "./components/HeaderComponent.vue";
import ScrollerComponent from "./components/ScrollerComponent.vue";
</script>

<template>
  <HeaderComponent />
  <main>
    <h2 class="section-heading">Popular on Netflix</h2>
    <ScrollerComponent componentNumber="1" />
    <h2 class="section-heading">Trending Now</h2>
    <ScrollerComponent componentNumber="2" />
    <h2 class="section-heading">Watchlist for User</h2>
    <ScrollerComponent componentNumber="3" />
  </main>
</template>

<style scoped>
main {
  margin-bottom: 3rem;
}
.section-heading {
  padding-inline-start: 3rem;

  font-size: var(--fs-normal);
}
</style>

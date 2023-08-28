<template>
  <footer>
    <p>Questions? Contact us.</p>
    <div class="footer-grid">
      <p class="footer-link" v-for="link in footerLinks" :key="link">
        {{ link }}
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const footerLinks = ref([
  "FAQ",
  "Account",
  "Jobs",
  "Buy Gift Cards",
  "Privacy",
  "Contact Us",
  "Legal Notices",
  "Cancel Membership",
  "Media Center",
  "Netflix Shop",
  "Ways to Watch",
  "Cookie Preferences",
  "Speed Test",
  "Only on Netflix",
  "Help Center",
  "Investor Relations",
  "Redeem Gift Cards",
  "Terms of Use",
  "Impressum",
  "Legal Guarantee",
  "Ad Choices",
]);
</script>

<style scoped>
footer {
  padding-inline: 15rem;
  padding-block: 2rem;

  border-top: 0.25rem solid var(--dark);

  font-size: var(--fs-small);
}
.footer-grid {
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  grid-auto-flow: column;
  margin-block: 2rem;

  gap: 1rem;
}

.footer-link {
  cursor: pointer;
  text-decoration: underline;
}
</style>

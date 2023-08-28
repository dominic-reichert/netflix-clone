<script setup lang="ts">
import HeaderComponent from "./components/HeaderComponent.vue";
import ScrollerComponent from "./components/ScrollerComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

import { ref } from "vue";

const trendingData = ref({ results: [] });
const popularData = ref({ results: [] });
const topratedData = ref({ results: [] });

const fetchTrendingContent = () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDk0OGUxODQ5NmU1MzQ5ZjMyOTA3NGVmNmYzYmM1YSIsInN1YiI6IjY0ZWM2NWUyMWZlYWMxMDEzOGRiYzRjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WcSoypk83Bf8g-UaebuFUZBitChEXvsRL88W82CM7UQ",
    },
  };

  fetch("https://api.themoviedb.org/3/trending/tv/day?language=en-US", options)
    .then((response) => response.json())
    .then((data) => (trendingData.value = data.results))
    .catch((err) => console.error(err));
};

const fetchPopularContent = () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDk0OGUxODQ5NmU1MzQ5ZjMyOTA3NGVmNmYzYmM1YSIsInN1YiI6IjY0ZWM2NWUyMWZlYWMxMDEzOGRiYzRjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WcSoypk83Bf8g-UaebuFUZBitChEXvsRL88W82CM7UQ",
    },
  };

  fetch(
    "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .then((data) => (popularData.value = data.results))
    .catch((err) => console.error(err));
};

const fetchTopratedContent = () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDk0OGUxODQ5NmU1MzQ5ZjMyOTA3NGVmNmYzYmM1YSIsInN1YiI6IjY0ZWM2NWUyMWZlYWMxMDEzOGRiYzRjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WcSoypk83Bf8g-UaebuFUZBitChEXvsRL88W82CM7UQ",
    },
  };

  fetch(
    "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .then((data) => (topratedData.value = data.results))
    .catch((err) => console.error(err));
};

fetchTopratedContent();
fetchPopularContent();
fetchTrendingContent();
</script>

<template>
  <HeaderComponent />
  <main>
    <h2 class="section-heading">Popular on Netflix</h2>
    <ScrollerComponent componentNumber="1" :apiData="popularData" />
    <h2 class="section-heading">Trending Now</h2>
    <ScrollerComponent componentNumber="2" :apiData="trendingData" />
    <h2 class="section-heading">Top Rated</h2>
    <ScrollerComponent componentNumber="3" :apiData="topratedData" />
  </main>
  <FooterComponent />
</template>

<style scoped>
main {
  margin-top: 6rem;
  margin-bottom: 3rem;
}
.section-heading {
  padding-inline-start: 3rem;

  font-size: var(--fs-normal);
}
</style>

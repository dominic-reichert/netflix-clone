<template>
  <div class="scroller-container test1">
    <div :class="'card-scroller scroller-' + componentNumber">
      <button
        v-if="currentChild !== 1"
        class="prev"
        @click="clickPrevHandler()"
      >
        <img class="prev-icon" src="../assets/icons/previous.svg" alt="" />
      </button>
      <div class="card-group" id="group-1">
        <CardComponent
          v-for="entry in apiData.slice(0, 5)"
          :key="entry.id"
          :cardTitle="entry.original_name"
          :cardDescription="entry.overview"
          :cardImage="entry.backdrop_path"
        />
      </div>
      <div class="card-group" id="group-2">
        <CardComponent
          v-for="entry in apiData.slice(5, 10)"
          :key="entry.id"
          :cardTitle="entry.original_name"
          :cardDescription="entry.overview"
          :cardImage="entry.backdrop_path"
        />
      </div>
      <div class="card-group" id="group-3">
        <CardComponent
          v-for="entry in apiData.slice(10, 15)"
          :key="entry.id"
          :cardTitle="entry.original_name"
          :cardDescription="entry.overview"
          :cardImage="entry.backdrop_path"
        />
      </div>
      <div class="card-group" id="group-4">
        <CardComponent
          v-for="entry in apiData.slice(15, 21)"
          :key="entry.id"
          :cardTitle="entry.original_name"
          :cardDescription="entry.overview"
          :cardImage="entry.backdrop_path"
        />
      </div>
      <button
        v-if="currentChild !== 4"
        class="next"
        @click="clickNextHandler()"
      >
        <img class="next-icon" src="../assets/icons/next.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script setup>
import CardComponent from "./CardComponent.vue";
import { ref, watch } from "vue";

const currentChild = ref(1);
const props = defineProps(["componentNumber", "apiData"]);

const clickNextHandler = () => {
  currentChild.value++;
  let elements = document.querySelector(
    ".scroller-" + props.componentNumber
  ).children;
  elements
    .namedItem("group-" + currentChild.value)
    .scrollIntoView({ block: "nearest" });
};

const clickPrevHandler = () => {
  currentChild.value--;
  let elements = document.querySelector(
    ".scroller-" + props.componentNumber
  ).children;
  elements[currentChild.value].scrollIntoView({ block: "nearest" });
};
</script>

<style scoped>
.scroller-container {
  position: relative;
  margin: 1.5rem 0 2rem 0;
}

.card-scroller,
.card-group {
  display: grid;
  gap: 0.5rem;
  grid-auto-flow: column;
}
.card-scroller {
  scroll-behavior: smooth;
  grid-auto-columns: 100%;
  padding: 0 3rem;
  scroll-padding-inline: 3rem;
  overflow-x: hidden;
}

.card-group {
  grid-auto-columns: 1fr;
}

.card-scroller:hover .next {
  opacity: 1;
}

.card-scroller:hover .prev {
  opacity: 1;
}

.next,
.prev {
  position: absolute;
  display: flex;
  align-items: center;

  width: 2.5rem;
  padding: 0.25rem;

  background: rgb(0 0 0 / 0);
  opacity: 0;

  border: none;

  z-index: 300;
}

.prev {
  left: 0;
  top: 0;
  bottom: 0;
}

.next {
  right: 0;
  top: 0;
  bottom: 0;
}

.prev:hover,
.next:hover {
  background: rgb(0 0 0 / 0.3);
}
</style>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import imageSrc from "../assets/sunflowers.webp";
import { getElementDocumentOffset } from "../lib/dom-utils";

const thumbnailElement = ref<HTMLDivElement>();
const overlayElement = ref<HTMLDivElement>();
const isOverlayVisible = ref(false);

watchEffect(() => {
  if (!thumbnailElement.value || !overlayElement.value) return;
  const thumbnailOffset = getElementDocumentOffset(thumbnailElement.value);
  const thumbnailWidth = thumbnailElement.value.offsetWidth;
  overlayElement.value.style.left = `${thumbnailOffset.left}px`;
  overlayElement.value.style.top = `${thumbnailOffset.top}px`;
  overlayElement.value.style.width = `${thumbnailWidth}px`;
});
</script>

<template>
  <div class="carousel-item">
    <div
      ref="thumbnailElement"
      class="carousel-item-thumbnail"
      @mouseenter="isOverlayVisible = true"
    >
      <img :src="imageSrc" alt="Sunflowers" class="carousel-item-image" />
    </div>
    <Teleport to="body">
      <Transition name="scale">
        <div
          v-if="isOverlayVisible"
          ref="overlayElement"
          class="carousel-item-overlay"
          @mouseleave="isOverlayVisible = false"
        >
          <img :src="imageSrc" alt="Sunflowers" class="carousel-item-image" />
          <div class="card-description">
            <div class="action-bar">
              <div class="bar-left">
                <button class="play-button">
                  <img
                    class="play-icon"
                    src="../assets/icons/playButton.svg"
                    alt="playButton"
                  />
                </button>
                <button class="add-button">
                  <img
                    class="add-icon"
                    src="../assets/icons/addButton.svg"
                    alt="addButton"
                  />
                </button>
              </div>
              <div class="bar-right">
                <button class="down-button">
                  <img
                    class="down-icon"
                    src="../assets/icons/downButton.svg"
                    alt="downButton"
                  />
                </button>
              </div>
            </div>
            <div class="carousel-item-title">Sunflowers</div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.carousel-item {
  flex-shrink: 0;
  width: 100%;
}
.carousel-item-thumbnail {
  border-radius: 4px;
  overflow: hidden;
}
.carousel-item-overlay {
  background-color: var(--secondary);
  border-radius: 4px;
  position: absolute;
  overflow: hidden;
  scale: 1.1;
}

.carousel-item-image {
  display: block;
  max-width: 100%;
}
.carousel-item-title {
  margin: 0.5rem;
  font-weight: bold;
}
.carousel-item-description {
  margin: 0.5rem;
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  scale: 1;
}
.scale-enter-active,
.scale-leave-active {
  transition: opacity ease-in-out 300ms, scale ease-in-out 300ms;
}

.card-description {
  padding: 1rem;
}

.action-bar {
  display: flex;
  justify-content: space-between;
}

.action-bar button {
  background-color: transparent;
  border: none;
}

.action-bar img {
  height: 24px;
  width: 24px;
}
</style>

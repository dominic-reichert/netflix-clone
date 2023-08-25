<template>
  <div class="card-element">
    <img src="https://picsum.photos/300/200" alt="" />
    <div class="card-info-element">
      <div class="interaction-bar">
        <ul class="action-list">
          <li class="action-button">Play</li>
          <li class="action-button">Add</li>
          <li class="action-button">Like</li>
          <li class="action-button">Dislike</li>
        </ul>
        <button>Open/Close</button>
      </div>
      <h3 class="card-title">Placeholder</h3>
    </div>
  </div>
</template>

<style scoped>
.card-element {
  display: flex;
  flex-direction: column;
  border-radius: 0.25rem;

  padding: 1.5rem 0;
  transition: transform 200ms ease-in-out;
}

.card-element:hover {
  transform: scale(1.2);
}

.card-element > img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.card-info-element {
  background: var(--dark);
  display: none;
}

.card-element:hover .card-info-element {
  display: block;
}

.interaction-bar {
  display: flex;

  justify-content: space-between;
}

.action-list {
  display: flex;
  gap: 1rem;

  padding: 0;
}

.action-button {
  list-style-type: none;
}
</style>

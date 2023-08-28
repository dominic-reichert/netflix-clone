<template>
  <header>
    <div class="left-side">
      <img src="../assets/NetflixLogo.png" alt="netflix-logo" />
      <nav class="nav-bar">
        <ul class="nav-list">
          <li class="nav-link">Home</li>
          <li class="nav-link">TV Shows</li>
          <li class="nav-link">Movies</li>
          <li class="nav-link">Recently Added</li>
          <li class="nav-link">My List</li>
        </ul>
      </nav>
    </div>
    <div class="right-side"></div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;

  height: 5rem;
  padding-inline-start: 1.5rem;

  background: var(--primary);
  z-index: 10;
}

.left-side,
.right-side {
  display: flex;
}

.left-side > img {
  height: 5rem;
}

.nav-bar {
  display: flex;
  align-items: center;
}

.nav-list {
  display: flex;
  gap: 1.5rem;

  padding: 0;

  font-size: var(--fs-small);
}

.nav-link {
  list-style-type: none;
  transition: color 100ms linear;

  cursor: pointer;
}

.nav-link:hover {
  color: var(--dark);
}
</style>

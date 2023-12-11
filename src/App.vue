<script setup>
import { RouterLink, RouterView } from "vue-router";
import NotedHeader from "./components/header/NotedHeader.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <NotedHeader />
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

header {
  line-height: 1.5;
  max-height: 100vh;
  margin-bottom: 2em;
}

header .wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--color-border);
}
</style>

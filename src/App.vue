<script setup>
import { RouterLink, RouterView } from "vue-router";
import NotedHeader from "./components/header/NotedHeader.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <NotedHeader />
    </div>
    <nav>
      <RouterLink to="/">Work-in-progress</RouterLink>
      <RouterLink to="/completed">Completed</RouterLink>
    </nav>
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
}

header .wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--color-border);
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: left;
  margin-left: -1rem;
  font-size: 1.05rem;
  padding: 1rem 0;
  margin-bottom: 1em;
  display: flex;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>

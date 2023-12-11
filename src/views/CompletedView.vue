<script setup>
import TodoList from "../components/TodoList.vue";
</script>

<template>
  <main>
    <TodoList :todos="todos" :refresh="refresh" />
  </main>
</template>

<script>
import axiosd from "axios";

export default {
  components: {
    TodoList,
  },

  data() {
    return {
      todos: [],
    };
  },

  created() {
    axiosd
      .get(`${import.meta.env.VITE_API_URL}completed`)
      .then((response) => {
        this.todos = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  methods: {
    refresh() {
      axiosd
        .get(`${import.meta.env.VITE_API_URL}completed`)
        .then((response) => {
          this.todos = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

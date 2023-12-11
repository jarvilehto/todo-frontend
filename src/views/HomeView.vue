<script setup>
import TodoList from "../components/TodoList.vue";
import axiosd from "axios";

const API_URL = import.meta.env.VITE_API_URL;

let todosWip = [];
let todosCompleted = [];

const refresh = async () => {
  try {
    const [wipResponse, completedResponse] = await Promise.all([
      axiosd.get(`${API_URL}wip`),
      axiosd.get(`${API_URL}completed`),
    ]);
    todosWip = wipResponse.data;
    todosWip.reverse();
    todosCompleted = completedResponse.data;
  } catch (error) {
    console.log(error);
  }
};

refresh(); // Initial call to populate todosWip and todosCompleted
</script>

<template>
  <main>
    <div v-if="todosWip < 2">hei</div>
    <TodoList
      :todos="todosWip"
      :todosCompleted="todosCompleted"
      :refresh="refresh"
    />
  </main>
</template>

<script>
export default {
  components: {
    TodoList,
  },

  setup() {
    return {
      todosWip,
      todosCompleted,
      refresh,
    };
  },

  watch: {
    todosWip: {
      handler() {
        this.refresh();
      },
      deep: true,
    },
    todosCompleted: {
      handler() {
        this.refresh();
      },
      deep: true,
    },
  },
};
</script>

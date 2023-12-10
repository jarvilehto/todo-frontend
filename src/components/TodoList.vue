<template>
  <div>
    <button class="refresh" @click="refresh">Refresh List</button>
    <TodoCard v-for="todo in todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script>
import axiosd from "axios";
import TodoCard from "./TodoCard.vue";

export default {
  name: "TodoList",
  components: {
    TodoCard,
  },

  data() {
    return {
      todos: [],
    };
  },

  created() {
    axiosd
      .get("http://localhost:3000/todos/wip")
      .then((response) => {
        this.todos = response.data;
        console.log(this.todos);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  methods: {
    refresh() {
      axiosd
        .get("http://localhost:3000/todos")
        .then((response) => {
          this.todos = response.data;
          console.log(this.todos);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    complete() {
      axiosd.patch("http://localhost:3000/todos/complete/:id").then((res) => {
        console.log(res);
        refresh();
      });
    },
  },
};
</script>

<style>
.refresh {
  margin-left: auto;
  border: 1px solid var(--color-border);
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: var(--color-background);
  color: var(--color-text);
  font-weight: 600;
  cursor: pointer;
}
</style>

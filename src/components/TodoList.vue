<template>
  <div>
    <h1>Todo List</h1>
    <button @click="fetchTodos">Refresh List</button>
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
      .get("http://localhost:3000/todos")
      .then((response) => {
        this.todos = response.data;
        console.log(this.todos);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

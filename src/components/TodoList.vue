<template>
  <div>
    <h1>Todo List</h1>
    <TodoForm />
    <TodoList />
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

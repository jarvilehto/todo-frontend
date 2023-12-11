<template>
  <div class="todo-card">
    <div class="header">
      <h2>{{ todo.title }}</h2>
      <p>Created at: {{ new Date(todo.createdAt).toLocaleDateString() }}</p>
    </div>
    <p>{{ todo.description }}</p>
    <p>Completed: {{ todo.completed }}</p>
    <button @click="complete(todo._id)" type="button">complete</button>
  </div>
</template>

<script>
import axiosd from "axios";

export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    complete(id) {
      console.log(id);
      axiosd
        .patch(`${import.meta.env.VITE_API_URL}complete/${id}`)
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style scoped>
.todo-card {
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem 0;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.todo-card h2 {
  font-size: 1.2rem;
  font-weight: 600;
}

.todo-card p {
  font-size: 1rem;
  margin: 0.5rem 0;
}

.todo-card p:last-of-type {
  margin-bottom: 0;
}

.todo-card p:first-of-type {
  font-weight: 600;
}

.todo-card p:nth-of-type(2) {
  font-style: italic;
}
</style>

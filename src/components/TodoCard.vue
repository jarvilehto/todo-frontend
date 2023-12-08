<template>
  <div class="todo-card">
    <h2>{{ todo.title }}</h2>
    <p>{{ todo.description }}</p>
    <p>Created at: {{ todo.createdAt }}</p>
    <p>Completed: {{ todo.completed }}</p>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
};
</script>

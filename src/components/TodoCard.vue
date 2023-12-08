<template>
  <div class="todo-card">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <p>Created at: {{ createdAt }}</p>
    <p>Completed: {{ completed }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
    },
    completed: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
.todo-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>

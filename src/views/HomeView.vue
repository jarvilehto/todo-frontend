<script>
import axiosd from "axios";
import TodoList from "@/components/TodoList.vue";

export default {
  components: {
    TodoList,
  },
  data() {
    return {
      todosWip: [],
      todosCompleted: [],
    };
  },
  methods: {
    async refresh() {
      try {
        await Promise.all([
          axiosd.get(`${import.meta.env.VITE_API_URL}wip`).then((res) => {
            console.log(res.data);
            this.todosWip = res.data.reverse();
          }),
          axiosd.get(`${import.meta.env.VITE_API_URL}completed`).then((res) => {
            console.log(res.data);
            this.todosCompleted = res.data.reverse();
          }),
        ]);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.refresh(); // Initial call to populate todosWip and todosCompleted
  },
};
</script>

<template>
  <main>
    <TodoList
      :todos="todosWip"
      :todosCompleted="todosCompleted"
      :refresh="refresh"
    />
  </main>
</template>

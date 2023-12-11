<template>
  <div>
    <div class="btnCluster">
      <button class="buttonStyling" @click="refresh">Refresh List.</button>
      <button class="buttonStyling" @click="showForm = true">New Note.</button>
    </div>
    <div v-if="todos.length">
      <TodoCard
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        :refresh="refresh"
      />
    </div>
    <div v-else>
      <p>No todos found.</p>
    </div>

    <div v-if="showForm" class="modal-background">
      <div class="modal">
        <form>
          <label for="title">Title:</label>
          <input type="text" id="title" v-model="newNote.title" />

          <label for="message">Message Body:</label>
          <textarea id="message" v-model="newNote.message"></textarea>

          <button class="buttonStyling" @click="showForm = false">close</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import TodoCard from "./TodoCard.vue";
export default {
  name: "TodoList",
  components: {
    TodoCard,
  },

  props: {
    todos: {
      type: Object,
      required: true,
    },
    refresh: {
      type: Function,
      required: false,
    },
  },

  data() {
    return {
      showForm: false,
      newNote: {
        title: "",
        message: "",
      },
    };
  },

  methods: {
    saveNote() {
      // Logic to save the new note
      // ...
      this.showForm = false;
    },

    cancelNote() {
      this.showForm = false;
    },
  },
};
</script>

<style>
.buttonStyling {
  border: 1px solid var(--color-border);
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: var(--color-background);
  color: var(--color-text);
  font-weight: 600;
  cursor: pointer;
}

.btnCluster {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.formButtons {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
}

.buttonStyling {
  border: 1px solid var(--color-border);
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: var(--color-background);
  color: var(--color-text);
  font-weight: 600;
  cursor: pointer;
}

.btnCluster {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.modal-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 500px;
}
</style>

<template>
  <div>
    <div class="btnCluster">
      <button class="buttonExtra" @click="changeView">
        {{ selectView ? "Completed" : "Work-in-progress" }}
      </button>
      <button class="buttonExtra" @click="showForm = true">New Note.</button>
    </div>
    <div v-if="selectView">
      <TodoCard
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        :refresh="refresh"
      />
    </div>
    <div v-else>
      <TodoCard
        v-for="todo in todosCompleted"
        :key="todo.id"
        :todo="todo"
        :refresh="refresh"
      />
    </div>

    <div v-if="showForm" class="modal-background">
      <div class="modal">
        <h1>New Note.</h1>
        <form>
          <div>
            <label for="title">Title:</label>
            <input type="text" id="title" v-model="newNote.title" />
          </div>
          <div class="noteDescription">
            <label for="message">Description:</label>
            <textarea id="message" v-model="newNote.description"></textarea>
          </div>

          <button class="buttonStyling modalButton" @click="showForm = false">
            close
          </button>
          <button class="buttonStyling modalButton" @click="saveNote">
            Save
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import TodoCard from "./TodoCard.vue";
import axiosd from "axios";
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
    todosCompleted: {
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
        description: "",
      },
      selectView: true,
    };
  },

  methods: {
    saveNote() {
      axiosd
        .post(`${import.meta.env.VITE_API_URL}`, {
          title: this.newNote.title,
          description: this.newNote.description,
        })
        .then((response) => {
          console.log(response);
          this.refresh();
        })
        .catch((error) => {
          console.log(error);
        });
      // ...
      this.showForm = false;
    },

    cancelNote() {
      this.showForm = false;
    },

    changeView() {
      this.selectView = !this.selectView;
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

.buttonExtra {
  border-radius: 0;
  padding: 0.5rem 1rem;
  border: 0;
  border-bottom: 2px solid var(--color-border);
  background-color: var(--color-background);
  color: var(--color-text);
  font-weight: 600;
  cursor: pointer;
}

.test {
  width: 100%;
  font-size: 12px;
  text-align: left;
  font-size: 1.05rem;
  padding: 1rem 0;
  display: flex;
}

.test a {
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

.test a:first-of-type {
  border: 0;
}

.test a:active {
  color: white;
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
  height: 80%;
  max-width: 500px;
  max-height: 550px;
}

.noteDescription {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
}
</style>

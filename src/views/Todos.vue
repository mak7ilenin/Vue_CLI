<template>
    <div>
        <h2>Todo Page</h2>
        <router-link to="/">Home</router-link>
        <AddTodo
            @addTodo="addTodo"
        />
        <Loader v-if="loading"/>
        <TodoList
            v-else-if="todos.length"
            v-bind:todos="todos"
            @removeTodo="removeTodo"
        />
        <p class="empty-list" v-else>Nothing there!</p>
    </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
import Loader from '@/components/Loader'
export default {
  name: 'App',
  data() {
    return {
      todos: [],
      loading: true
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => response.json())
      .then(json => { 
        setTimeout(() => {
            this.todos = json
            this.loading = false
        }, 600);
      })
  },
  components: {
    TodoList,
    AddTodo,
    Loader
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    },
    addTodo(todo) {
      this.todos.push(todo);
      if(this.todos.classList.contains('completed')) {
        
      }
    },
  }
}
</script>

<style>
.empty-list {
    font-size: 32px;
    margin-top: 50px;
}
</style>
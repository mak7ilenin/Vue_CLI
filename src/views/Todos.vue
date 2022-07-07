<template>
    <div>
        <h2>Todo Page</h2>
        <router-link to="/">Home</router-link>
        <AddTodo
            @addTodo="addTodo"
        />
        <TodoList
            v-bind:todos="todos"
            @removeTodo="removeTodo"
        /> 
    </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
export default {
  name: 'App',
  data() {
    return {
      todos: [
        {id: 1, title: 'Обучиться Vue', completed: false},
        {id: 2, title: 'Сверстать сайт используя SASS', completed: true},
        {id: 3, title: 'Пообедать', completed: false}
      ]
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => { 
        this.todos = json
      })
  },
  components: {
    TodoList,
    AddTodo
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    },
    addTodo(todo) {
      this.todos.push(todo);
    }
  }
}
</script>
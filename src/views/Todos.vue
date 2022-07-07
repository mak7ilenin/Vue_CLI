<template>
    <div>
        <h2>Your notes</h2>
        <router-link to="/">Home</router-link>
        <AddTodo
            @addTodo="addTodo"
        />
        <div>
          <p class="choose-txt">Choose notes filter:</p>
          <select name="filter" v-model="filter">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not-completed">Not completed</option>
          </select>
        </div>
        <Loader v-if="loading"/>
        <TodoList
            v-else-if="todoFilter.length"
            v-bind:todos="todoFilter"
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
      loading: true,
      filter: 'all'
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
    Loader,
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    },
    addTodo(todo) {
      this.todos.push(todo);
    },
  },
  computed: {
    todoFilter() {
      if(this.filter === 'all') {
          return this.todos;
      }
      if(this.filter === 'completed') {
          return this.todos.filter(t => t.completed);
      }
      if(this.filter === 'not-completed') {
          return this.todos.filter(t => !t.completed);
      }
    }
  }
}
</script>

<style>
.empty-list {
    font-size: 32px;
    margin-top: 50px;
}
.choose-txt {
    font-size: 30px;
}
select {
    width: 300px;
    height: 40px;
    margin-top: 15px;
    margin-bottom: 10px;
    font-size: 22px;
    text-align: center;
    font-style: italic;
    font-weight: 600;
    letter-spacing: 1px;
}
select option {
    font-size: 18px;
}
</style>
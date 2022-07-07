<template>
  <h1>Hello Vue!</h1>
  <img alt="Vue logo" src="./assets/logo.png">
  <router-view />
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

<style>
body {
  background-color: #2c3e50;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
}
h1 {
  font-size: 72px;
}
h2 {
  font-size: 52px;
}
a {
  text-decoration: underline;
  color: #fff;
  font-size: 26px;
  font-weight: 700;
}
ul {
  width: 50%;
  margin: 0 auto;
  padding: 0;
}
li {
  width: 100%;
  background-color: #7a7a7a56;
  padding: 15px;
  border-radius: 2px;
  list-style: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: 22px;
  margin: 10px;
}
p {
  margin: 0;
  padding: 0;
}
li span {
  width: 94%;
  text-align: left;
  display: flex;
  align-items: center;
}
li span p {
  height: 100%;
}
li span strong {
  margin-right: 15px;
}
li input {
  width: 25px;
  height: 25px;
  margin: 0;
  margin-right: 20px;
  cursor: pointer;
}
li button {
  width: 35px;
  height: 35px;
  margin: 0;
  margin-left: 15px;
  font-size: 25px;
  border-radius: 3px;
  cursor: pointer;
}
li button:hover {
  background-color: #ff0000
}
.completed {
  text-decoration: line-through;
  color: #9e9e9e;
}
</style>

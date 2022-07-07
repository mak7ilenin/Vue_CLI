<template>
  <h1>Hello Vue!</h1>
  <img alt="Vue logo" src="./assets/logo.png">
  <TodoList
    v-bind:todos="todos"
  /> 
</template>

<script>
import TodoList from '@/components/TodoList'

export default {
  name: 'App',
  data() {
    return {
      todos: [
        {id: 1, title: 'Обучиться Vue', completed: false},
        {id: 2, title: 'Сверстать сайт на SASS', completed: true},
        {id: 3, title: 'Пообедать', completed: false}
      ]
    }
  },
  components: {
    TodoList
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
ul {
  width: 50%;
  margin: 0 auto;
  padding: 0;
}
li {
  width: 100%;
  list-style: none;
  display: inline-block;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 22px;
  margin: 10px;
}
li input {
  height: 16.5px;
  margin: 0;
  margin-right: 20px;
  cursor: pointer;
}
li button {
  height: 25px;
  margin: 0;
  margin-left: 15px;
  font-size: 18px;
  border-radius: 3px;
  cursor: pointer;
}
li button:hover {
  background-color: #ff0000
}
</style>

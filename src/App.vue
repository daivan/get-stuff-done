<script setup>
import TodoList from './components/TodoList.vue'
import NewTask from './components/NewTask.vue'
</script>

<template>
  <TodoList />
  <NewTask />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

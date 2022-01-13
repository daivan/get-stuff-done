<template>
  <div class="todoListItem">
    <label><input type="checkbox" /> {{title}}</label>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    id: String,
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div class="todoListItem">
    <li>{{historyListItem.name}} - {{historyListItem.count}} - {{historyListItem.done}}</li>
  </div>
</template>

<script>
export default {
  name: 'HistoryListItem',
  props: {
    historyListItem: Object,
    date: Number
  },
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

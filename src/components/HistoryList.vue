<template>
  <div class="todoListItem">
    {{date}}
      <HistoryListItem
    v-for="(historyListItem, index) in historyList"
    :key="index"
    :date="index"
    :historyListItem="historyListItem"
  ></HistoryListItem>
  </div>
</template>

<script>

import HistoryListItem from "./HistoryListItem.vue";


export default {
  name: 'HistoryList',
  components: {
    HistoryListItem
  },
  props: {
    historyList: Array,
    date: String
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

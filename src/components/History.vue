<template>
  <div class="hello">
<h1>The history</h1>
  <HistoryList
    v-for="(post, index) in history"
    :key="index"
    :date="index"
    :historyList="post"
  ></HistoryList>
  </div>
</template>

<script>
import HistoryList from "./HistoryList.vue";

export default {
  name: 'History',
  components: {
    HistoryList
  },
data() {
  return {
       history:[]
  }
},
  methods:{
    allStorage() {

    var archive = {}, // Notice change here
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
      
        archive[ keys[i] ] = JSON.parse(localStorage.getItem( keys[i] ));
    }

    return archive;
}
  },
  mounted(){
      this.history = this.allStorage();      
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

<template>
  <div class="hello">
    <h1 v-on:click="hej">{{ msg }} CLICK HERE</h1>
{{posts}}
  <TodoListItem
    v-for="post in posts"
    :key="post.id"
    :title="post.title"
  ></TodoListItem>

  </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue'

export default {
  name: 'App',
  components: {
    TodoListItem
  },
    props: {
    msg: String
  },
data() {
  return {
    foo: 1,
    posts: [ 
      {id: 1, title: 'first'},
      {id: 2, title: 'second'}
       ]
  }
},
  methods:{
    hej(){
      console.log('is this how its done?')
      let key = 'foo'
      localStorage.setItem(key, 'we doin it!');
      let bajs = localStorage.getItem(key);
      console.log('load', bajs)
         

    }
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

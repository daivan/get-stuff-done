<template>
  <div class="hello">
    <h1 v-on:click="hej">CLICK HERE TO SAVE</h1>
{{posts}}
  <TodoListItem
    v-for="post in posts"
    :key="post.name"
    :name="post.name"
    :done="post.done"
    @changeTitle="ChangeT($event)"
  ></TodoListItem>

  </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue'
import moment from 'moment'

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
      {name: 'something', done: false},
      {name: 'something else', done: false}
       ]
  }
},
  methods:{
    hej(){
      
      let today = moment().format('YMMD');
      

      let dailyEntryTemplate = [
        {
        'name':  'Pushups',
        'done':  false
      },
                {
        'name':  'Pullups',
        'done':  false
      }
      ];
      if (localStorage.getItem(today) === null) {
       localStorage.setItem(today, JSON.stringify(dailyEntryTemplate))
      }

      
      let dailyEntryJSON = localStorage.getItem(today)
      this.posts = JSON.parse(dailyEntryJSON);
      console.log('post', this.posts);
      //console.log(dailyEntryJSON)
//console.log(this.posts)
         

    },
    ChangeT(title)
    {
      console.log('getting what i want', title);
      this.posts.map(post => {
        if(post.name == title){
          post.done = true;
        }
        //console.log('hej', x);
        //console.log('title', title);
      })
      this.title=title;
      console.log('getting what i want', this.posts);
      let today = moment().format('YMMD');
      localStorage.setItem(today, JSON.stringify(this.posts))
    },
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

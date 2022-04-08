<template>
  <div class="hello">
  <TodoListItem
    v-for="post in posts"
    :key="post.name"
    :name="post.name"
    :done="post.done"
    @changeTitle="ChangeT($event)"
    v-model:count = 'post.count'
  ></TodoListItem>


<br>
<button v-on:click="save">Save</button>

  <History></History>
  </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue'
import History from './History.vue'
import moment from 'moment'

export default {
  name: 'TodoList',
  components: {
    TodoListItem,
    History
  },
data() {
  return {
    today: moment().format('YMMD'),
    posts: [ 
      {name: 'something', done: false, count: 0},
       ],
       history:[]
  }
},
  methods:{
    save(){
      localStorage.setItem(this.today, JSON.stringify(this.posts))
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
    allStorage() {

    var archive = {}, // Notice change here
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        archive[ keys[i] ] = localStorage.getItem( keys[i] );
    }

    return archive;
}
  },
  mounted(){

      let dailyEntryTemplate = [{
        'name':  'Pushups',
        'done':  false,
        'count':  10
      },
      {
        'name':  'Pullups',
        'done':  false,
        'count':  15
      }];
      if (localStorage.getItem(this.today) === null) {
       localStorage.setItem(this.today, JSON.stringify(dailyEntryTemplate))
      }

      let dailyEntryJSON = localStorage.getItem(this.today)
      this.posts = JSON.parse(dailyEntryJSON);

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

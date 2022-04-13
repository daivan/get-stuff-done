<template>
  <div class="hello">
  
<br>
<h1>Enter daily tasks in json format here</h1>
<textarea v-model="dailyTaskString"></textarea>
{{dailyTaskJson}}
<button v-on:click="save">Save New Task</button>

  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'NewTask',
  components: {
  },
data() {
  return {
    dailyTaskString: '{}'
  }
},
  methods:{
    save(){
      localStorage.setItem('daily_tasks', JSON.stringify(this.dailyTaskString))
    },
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
      if (localStorage.getItem('daily_tasks') === null) {
       localStorage.setItem('daily_tasks', JSON.stringify(dailyEntryTemplate))
      }

      this.dailyTaskString = localStorage.getItem('daily_tasks')
    
  },
  computed:{
    dailyTaskJson(){
      let dailyTask = '';
      if (this.dailyTaskString){
        dailyTask = this.dailyTaskString;
      }
      return JSON.parse(dailyTask);
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

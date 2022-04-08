<template>
  <div class="todoListItem">
    {{count}}
    <label v-if="done"><input type="checkbox" checked="checked" /> {{name}}</label>
    <label v-else><input type="checkbox" @click='passEvent(name)' />{{name}}</label>
  </div>
      <label> Number </label>
    <input 
      type='text'
      :value='count'
      placeholder='Input'
      @input='$emit("update:count", $event.target.value)'
    />
</template>

<script>
export default {
  name: 'TodoListItem',
  props: {
    key: String,
    name: String,
    done: Boolean,
    count: Number
  },
  methods:{
    passEvent(name)
    {
      console.log('done', this.done)
      console.log('send pass event');
      this.$emit('changeTitle', name)
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

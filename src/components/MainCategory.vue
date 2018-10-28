<template>
  <div class="categories">
    <div class="header p-3">
        <i class="fas fa-minus-circle" @click="removeCategory(boardObj.id, category.id)"></i>
        <h3>{{ category.title }} {{category.id}}</h3>
    </div>
<!--     <div class="category bg-light m-4" v-for="(categoryObj, index) in boards" :key="index">
      <div class="header p-4">
        <i class="fas fa-minus-circle" @click="removeBoard(index)"></i>
        <h1>{{ boardObj.board }}</h1>
      </div>
    </div> -->
  </div>
</template>

<script>
import {store} from '../store.js';

export default {
  name: 'MainCategory',
  props: ['category', 'boardObj'],
  data(){
    return{
      categoryInput: ''
    }
  },
  methods: {
      removeCategory(boardObjId, categoryId){
          store.removeCategory(boardObjId, categoryId);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.categories{
    background-color: aquamarine;
    margin: 5px;
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
.fa-minus-circle {
  float: right;
  cursor: pointer;
}
</style>

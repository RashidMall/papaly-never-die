<template>
  <div class="categories">
    <div class="header p-3">
        <i class="fas fa-minus-circle" @click="removeCategory(boardObj.id, category.id)"></i>
        <h3>{{ category.title }}</h3>
    </div>
    <div class="input-group mb-3">
        <input class="form-control" type="text" name="websiteURL"
          placeholder="Add new url" 
          v-model="websiteURL"
        />
        <div class="input-group-append">
          <button @click="addCategory(boardObj.id, websiteURL)" class="btn btn-outline-secondary" type="button">Add</button>
        </div>
      </div>
      <WebSite v-for="(webSite, index) in category.webSites" :key="index" :webSite="webSite"/>
  </div>
</template>

<script>
import {store} from '../store.js';
import WebSite from './WebSite.vue';

export default {
  name: 'MainCategory',
  props: ['category', 'boardObj'],
  data(){
    return{
      websiteURL: ''
    }
  },
  methods: {
      removeCategory(boardObjId, categoryId){
          store.removeCategory(boardObjId, categoryId);
      }
  },
  components: {
      WebSite
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

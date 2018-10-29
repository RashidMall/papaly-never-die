<template>
  <div class="website">
    <div class="header p-3">
        <i class="fas fa-minus-circle" @click="removeWebSite(boardObj.id, category.id, webSite.id)"></i>
        <a :href="webSite.url">{{ webSite.url}}</a>
    </div>
  </div>
</template>

<script>
import {store} from '../store.js';

export default {
  name: 'WebSite',
  props: ['category', 'boardObj', 'webSite'],
  data(){
    return{
      categoryInput: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #4442b9;
}
.fa-minus-circle {
  float: right;
  cursor: pointer;
}
</style>
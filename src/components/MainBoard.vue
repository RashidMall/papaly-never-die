<template>
  <div class="boards">
    <form @submit.prevent="addBoard(board)">
      <div class="form-group">
        <input class="form-control" type="text" name="board"
          placeholder="Add new board" 
          v-model="board" 
          v-validate="'required|min:3'"
        />
        <p class="alert alert-danger" v-if="errors.has('board')">{{ errors.first('board') }}</p>
      </div>
    </form>
    <div class="board bg-light m-4" v-for="(boardObj, index) in sharedState.seedData" :key="boardObj.id" :boardObj="boardObj">
      <div class="header p-4">
        <i class="fas fa-minus-circle" @click="removeBoard(index, boardObj.id)"></i>
        <h1>{{ boardObj.title }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import {store} from '../store.js';
import MainCategory from './MainCategory.vue';

export default {
  name: 'MainBoard',
  props: ['boardObj'],
  data(){
    return{
      sharedState: store.state,
      board: ''
    }
  },
  methods: {
    addBoard(title){
      this.$validator.validateAll().then(result => {
        if(result){
          store.addBoard(title);
          this.board = '';          
        }else{
          console.log('Not a valid board name!');
        }
      })
    },
    removeBoard(index, id){
      store.removeBoard(index, id);
    }
  },
  components: {
    MainCategory
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
.board {

}
.fa-minus-circle {
  color: red;
  float: right;
  cursor: pointer;
}
</style>

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
      <!-- Add new Category input -->
      <div class="input-group mb-3">
        <input class="form-control" type="text" name="categoryInput"
          placeholder="Add new category" 
          v-model="categoryInput"
        />
        <div class="input-group-append">
          <button @click="addCategory(boardObj.id, categoryInput)" class="btn btn-outline-secondary" type="button">Add</button>
        </div>
      </div>

      <MainCategory v-for="(category, index) in boardObj.categories" :key="index" :category="category" :boardObj="boardObj"/>

    </div>
  </div>
</template>

<script>
import {store} from '../store.js';
import MainCategory from './MainCategory.vue';

export default {
  name: 'MainBoard',
  data(){
    return{
      sharedState: store.state,
      board: '',
      categoryInput: ''
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
    },
    addCategory(boardId, title){
      store.addCategory(boardId, title);
      this.categoryInput = '';
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

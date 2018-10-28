import {seedData} from './seed.js';

export const store = {
    state: {
        seedData
    },

    addBoard(title){
        const id = this.state.seedData.length + 1;
        this.state.seedData.push({"id": id, "title": title, "categories": []});
    },

    removeBoard(index, boardId) {
        console.log(index);
        console.log(boardId);
        const boardIndexToRemove = this.state.seedData.findIndex(
          board => board.id === boardId
        );
        this.state.seedData.splice(boardIndexToRemove, 1);
    },

    addCategory(boardId, title){
        const boardObj = this.state.seedData.find(board => board.id === boardId);
        const id = boardObj.categories.length + 1;
        boardObj.categories.push({"id": id, "title": title, "subCategories": [], "webSites": []});
    }
}
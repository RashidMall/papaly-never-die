import {seedData} from './seed.js';

export const store = {
    state: {
        seedData
    },

    getBoardObj(boardId){
        return this.state.seedData.find(board => board.id === boardId);
    },

    addBoard(title){
        const id = this.state.seedData.length + 1;
        this.state.seedData.push({"id": id, "title": title, "categories": []});
    },

    removeBoard(index, boardId) {
        const boardIndexToRemove = this.state.seedData.findIndex(
          board => board.id === boardId
        );
        this.state.seedData.splice(boardIndexToRemove, 1);
    },

    addCategory(boardId, title){
        const boardObj = this.getBoardObj(boardId);
        const id = boardObj.categories.length + 1;
        boardObj.categories.push({"id": id, "title": title, "subCategories": [], "webSites": []});
    },

    removeCategory(boardId, categoryId){
        const boardObj = this.getBoardObj(boardId);
        const categoryIndexToRemove = boardObj.categories.findIndex(
            category => category.id === categoryId
        );
        boardObj.categories.splice(categoryIndexToRemove, 1);
    }
}
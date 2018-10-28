import {seedData} from './seed.js';

export const store = {
    state: {
        seedData
    },

    addBoard(title){
        let id = this.state.seedData.length + 1;
        this.state.seedData.push({"id": id, "title": title, "categories": []});
    }
}
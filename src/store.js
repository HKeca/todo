import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      items: [
        {id: 1, title: 'PHP', description: 'learn PHP', done: true},
        {id: 2, title: 'MySQL', description: 'learn MySQL', done: false},
        {id: 3, title: 'Java', description: 'learn Java', done: false}
      ]
    }
});

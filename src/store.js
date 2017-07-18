import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = Vuex.Store({
    state: {
      items: [
        {title: 'PHP', description: 'learn PHP', done: true},
        {title: 'MySQL', description: 'learn MySQL', done: false},
        {title: 'Java', description: 'learn Java', done: false}
      ]
    }
});

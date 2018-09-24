import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      items: []
    },
    mutations: {
        createTodo(state, data) {
          const todo = {
            id: data.id,
            title: data.title,
            description: data.desc,
            done: data.done
          };

          state.items.push(todo);
        },
        removeTodo(state, noteId) {
          const todo = state.items.findIndex(item => {
            return item.id == noteId;
          });

          state.items.splice(todo, 1);
        },
        changeStatus(state, todoId) {
          let todo = state.items.find(item => {
            return item.id == todoId;
          });

          todo.done = !todo.done;
        },
        updateTodo(state, data) {
          let todo = state.items.find(item => {
            return item.id == data.id;
          });

          todo.title = data.title;
          todo.description = data.description;
          todo.done = data.done;
        }
    },
    actions: {
      getItemsFromStorage(context) {
        let todoItems = JSON.parse(localStorage.getItem('items'));

        if (todoItems === null)
          return;


        todoItems.forEach((item) => {
          var temp = {
            id: item.id,
            title: item.title,
            description: item.description,
            done: item.done
          }
          context.state.items.push(temp);
        });
      },
      saveItems(context) {
        localStorage.setItem('items', JSON.stringify(context.state.items));
      }
    },
    getters: {
      getTodoById: (state, getters) => (id) => {
        return state.items.find(todo => todo.id === id);
      }
    }
});

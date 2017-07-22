<template>
  <div>
    <div class="modal" v-if="isCreate()">
      <div class="modal-title">New Todo <span v-if="newTitle != ''"> - {{ newTitle }}</span></div>
      <div class="modal-inputs">
        <div>
          <input type="text" placeholder="Title" class="modal-input" v-model="newTitle">
        </div>
        <div>
          <textarea class="modal-input-text" cols="40"
                    rows="10" placeholder="Description" v-model="newDescription"></textarea>
        </div>
        <div>
          <button class="modal-btn" @click="cancel()">Cancel</button>
          <button class="modal-btn" @click="createTodo()">Create</button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="box" v-for="item in items" @key="item.title" @dblclick="edit(item)">
        <div class="box-title">{{ item.title }}</div>
        <div class="box-desc">{{ item.description }}</div>

        <a class="box-btn-del" href="#" @click="removeTodo(item.id)">&times;</a>
        <a class="box-btn box-done" href="#" v-if="item.done" @click="changeStatus(item.id)">Done</a>
        <a class="box-btn" href="#" @click="changeStatus(item.id)" v-else>incomplete</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        newId: "",
        newTitle: "",
        newDescription: ""
      }
    },
    computed: {
      items() {
        return this.$store.state.items;
      }
    },
    methods: {
      cancel() {
        this.$router.push({path: '/'});
      },
      isCreate() {
        return this.$route.query.create != null;
      },
      edit(todo) {
        this.$router.push({name: 'itemEdit', params: {id: todo.id}});
      },
      createTodo() {
        if (this.newTitle === "" || this.newDescription === "")
        {
          alert('Title or Description can\'t be empty');
          return;
        }

        const data = {
          id: this.uuid(),
          title: this.newTitle,
          desc: this.newDescription,
          done: false
        };

        this.$store.commit('createTodo', data);
        this.$store.dispatch('saveItems');
        this.$router.push({path: '/'});
      },
      removeTodo(id) {
        this.$store.commit('removeTodo', id);
        this.$store.dispatch('saveItems');
      },
      changeStatus(id) {
        this.$store.commit('changeStatus', id);
        this.$store.dispatch('saveItems');
      },
      uuid() {
        return ([1e7]+1e3+4e3+8e3+1e11).replace(/[018]/g, c =>
          (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
      }
    }
  }
</script>

<style>
  .container {
    margin: 20px;
    display: flex;
    justify-content: center;
    flex-flow: wrap;
  }

  .box {
    position: relative;
    background: white;
    box-shadow: 0 0 6px rgba(0,0,0,0.2);
    width: 500px;
    min-height: 100px;
    padding: 5px;
    margin: 15px;
  }

  .box-title {
    color: #DD4336;
    border-bottom: 2px solid #DD4336;
    font-weight: 500;
    padding: 5px;
    font-size: 1.5em;
  }

  .box-desc {
    color: #black;
    opacity: 0.8;
    padding: 10px 5px;
    font-size: 1.3em;
  }

  .box-btn {
    position: absolute;
    right: 6px;
    bottom: 6px;
    color: white;
    background: #DD4336;
    padding: 3px 15px;
    border-radius: 3px;
    text-decoration: none;
    font-size: 1.1em;
  }

  .box-done {
    background: #3098B2;
  }

  .box-btn-del {
    transition: all 0.1s;
    padding: 5px;
    text-decoration: none;
    opacity: 0.4;
    font-size: 2em;
    color: #DD4336;
    position: absolute;
    top: 2px;
    right: 5px;
  }

  .box-btn-del:hover {
    opacity: 1;
  }

  .modal {
    box-shadow: 0 3px 12px rgba(0,0,0,0.3);
    z-index: 12;
    margin: 250px 0;
    background: white;
    border-radius: 4px;
    position: absolute;
    min-width: 50%;
    min-height: 60%;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
  }

  .modal-title {
    font-size: 2em;
    text-align: center;
    margin: 10px 0;
    padding: 10px;
    color: #DD4336;
    border-bottom: 2px solid #DD4336;
  }

  .modal-inputs {
    display: flex;
    justify-content: center;
    flex-flow: column;
    text-align: center;
  }

  .modal-input:focus, .modal-input-text:focus, .modal-btn:focus {
    outline: none;
  }

  .modal-input {
    margin: 10px 0;
    padding: 10px;
    width: 300px;
    border: none;
    border-left: 4px solid #DD4336;
    background: #f9f9f9;
    font-size: 1.4em;
  }

  .modal-input-text {
    border: none;
    font-size: 1.4em;
    padding: 5px;
    background: #f9f9f9;
    border-left: 4px solid #DD4336;
    resize: none;
  }

  .modal-btn {
    border: 2px solid #DD4336;
    cursor: pointer;
    padding: 10px 25px;
    background: transparent;
    margin: 10px 10px;
    font-size: 1.2em;
  }

  .modal-btn:hover {
    transition: all 0.2s;
    background: #DD4336;
    color: white;
  }
</style>

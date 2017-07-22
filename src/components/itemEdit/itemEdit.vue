<template>
  <div class="container">
    <div class="editBox">
      <div class="editBox-title">Editing {{ staticTitle }}</div>
      <div class="editBox-inputs">
        <div>
          <input type="text" class="editBox-input" v-model="title" placeholder="Title">
        </div>
        <div>
          <textarea class="editBox-input-text" cols="40"
                    rows="5" placeholder="Description" v-model="description"></textarea>
        </div>
        <div>
          <input id="isDone" type="checkbox" v-model="done">
          <label for="isDone">Is Done</label>
        </div>
        <div>
          <button class="editBox-btn" @click="cancel()">Cancel</button>
          <button class="editBox-btn" @click="save()">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'itemEdit',
    data() {
      return {
        id: "",
        staticTitle: "",
        title: "",
        description: "",
        done: false
      }
    },
    methods: {
      cancel() {
        return this.$router.push({path: '/'});
      },
      save() {
        let data = {
          id: this.id,
          title: this.title,
          description: this.description,
          done: this.done
        };

        this.$store.commit('updateTodo', data);

        return this.$router.push({path: '/'});
      }
    },
    mounted() {
        let data = this.$store.getters.getTodoById(this.$route.params.id);

        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        this.done = data.done;
        this.staticTitle = data.title;
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
  }

  .editBox {
    margin: 10px 0;
    background: white;
    box-shadow: 0 0 6px rgba(0,0,0,0.3);
    width: 60%;
    min-width: 300px;
    height: 400px;
  }

  .editBox-title {
    color: #DD4336;
    font-weight: 500;
    font-size: 2em;
    text-align: center;
    padding: 20px 0;
    border-bottom: 2px solid #DD4336;
  }

  .editBox-inputs {
    text-align:center;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }

  .editBox-input {
    margin: 10px 0;
    padding: 10px;
    width: 300px;
    border: none;
    border-left: 4px solid #DD4336;
    background: #f9f9f9;
    font-size: 1.4em;
  }

  .editBox-input-text {
    border: none;
    font-size: 1.4em;
    padding: 5px;
    background: #f9f9f9;
    border-left: 4px solid #DD4336;
    resize: none;
  }

  .editBox-input:focus, .editBox-input-text:focus,.editBox-btn:focus {
    outline: none;
  }

  .editBox-btn {
    border: 2px solid #DD4336;
    cursor: pointer;
    padding: 10px 25px;
    background: transparent;
    margin: 10px 10px;
    font-size: 1.2em;
  }

  .editBox-btn:hover {
    transition: all 0.2s;
    background: #DD4336;
    color: white;
  }
</style>

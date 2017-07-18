<template>
  <div class="container">
    <div class="box" v-for="item in items" @key="item.title">
      <div class="box-title">{{ item.title }}</div>
      <div class="box-desc">{{ item.description }}</div>

      <a class="box-btn box-done" href="#" v-if="item.done == false">Done</a>
      <a class="box-btn" href="#" v-else>incomplete</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {

      }
    },
    computed: {

    }
  }
</script>

<style scoped>
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
</style>

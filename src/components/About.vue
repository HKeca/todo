<template>
  <div class="container">
    <div class="box">
      <div class="title">Todo list</div>
      <p>Simple todo list app build with <a href="https://vuejs.org/">Vue.js</a></p>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
  }

  .box {
    text-align: center;
    background: white;
    padding: 15px;
  }

  .title {
    font-size: 2em;
    padding: 10px 0;
    border-bottom: 2px solid #DD4336;
  }

  p {
    padding: 15px;
    font-size: 1.5em;
  }
</style>

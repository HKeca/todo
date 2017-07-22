<template>
  <div id="app">
    <div class="navbar">
      <div class="nav-title">Todo List</div>
      <div>
        <router-link class="nav-link" to="/?create=">New Todo</router-link>
        <a class="nav-link" href="#">Home</a>
        <router-link class="nav-link" to="/about">About</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    this.$store.dispatch('getItemsFromStorage');
  }
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }

  .navbar {
    display: flex;
    align-items: baseline;
    justify-content: space-around;
    width: 100%;
    box-shadow: 0 0 6px rgba(0,0,0,0.3);
  }

  .nav-link {
    color: #DD4336;
    padding: 15px;
    text-decoration: none;
    font-size: 1.3em;
  }

  .nav-link:hover {
    border-bottom: 3px solid #DD4336;
  }

  .nav-title {
    color: #DD4336;
    font-weight: 500;
    padding: 15px;
    font-size: 2em;
  }
</style>

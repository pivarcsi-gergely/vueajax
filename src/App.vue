<template>
  <div id="app">
    <nav>
      <router-link to="/">Statue-list</router-link>
      <router-link to="/info">Info</router-link>
    </nav>
    <div id="vonal"></div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
},
  data() {
    return {
    }
  },
  methods: {
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav a {
  background-color: grey;
  padding: 10px;
  color: white;
  text-decoration: none;
}
nav {
  margin-bottom: 12px;
}
#vonal {
  background-color: rgb(99, 99, 99);
  height: 0.01em;
  width: 100%;
  margin-bottom: 1em;
  }
</style>

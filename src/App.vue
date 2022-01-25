<template>
  <div id="app">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Person</th>
          <th>Height</th>
          <th>Price</th>
        </tr>
      </thead>
      <router-view></router-view>
    </table>
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
</style>

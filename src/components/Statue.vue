<template>
<div>
    <h1>Statue no.{{ $route.params.id }}</h1>
    <h2>Owner: {{ statue.person }}</h2>
    <p>Height: {{ statue.height }}</p>
    <p>Price:{{ statue.price }} </p>
    <p><router-link to="/">Back to the list</router-link></p>
</div>
</template>

<script>
export default {
    name: 'Statue',
    data(){
        return {
            statue: {
            id: null,
            person: '',
            height: null,
            price: null
      }
        }
    },
    methods: {
        async loadStatue(id) {
            let Response = await fetch(`http://127.0.0.1:8000/api/statues/${id}`)
            let data = await Response.json()
            this.statue = data
        },
    },
    mounted() {
            this.loadStatue(this.$route.params.id)
        }
}
</script>

<style>
#main {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
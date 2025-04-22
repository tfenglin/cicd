<template>
  <div id="app">
    <h1>hello world</h1>
    <h2></h2>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created() { 
    console.log("store", this.$store);
    this.increment();
  },
  mounted() { 
    console.log("count",this.$store.state.count);
  },
  methods: {
    increment() { 
      this.$store.commit("increment");
      console.log("count",this.$store.state.count);
    }
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
<style lang="scss">
  $color: #00ff80;
  body {
    color: $color;
  }
</style>
<style lang="less" scoped>
@color: #d62f2f;
#app {
  background-color: @color;
}
</style>

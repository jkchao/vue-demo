<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <router-link
      v-for="(item,index) in $router.options.routes" :key="index"
      :to="item.path"
      class="nav">{{item.name}}</router-link>
    <div class="demo">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 600px;
  margin: 60px auto;
}

.nav {
  margin-right: 20px;
}

a {
  text-decoration: none;
}

.demo {
  margin-top: 50px;
}
</style>

<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <div class="nav">
      <router-link
        v-for="(item,index) in $router.options.routes" :key="index"
        :to="item.path"
        class="nav-list"
        tag="li">{{item.name}}</router-link>
    </div>
    <!--I'm a comment.-->
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
  },
  comments: true
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 700px;
  margin: 60px auto;
}

.nav {
  display: flex;
  flex-wrap: wrap;
}

.nav-list {
  padding: 6px 10px;
  text-decoration: none;
  color: #20A0FF;
  cursor: pointer;
  list-style: none;
}


.demo {
  margin-top: 50px;
}
</style>

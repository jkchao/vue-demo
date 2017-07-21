<template>
  <div id='demo7'>
    <h3>demo7</h3>
    <child-com :foo="f" :boo="b"></child-com>
  </div>
</template>

<script>
const childCom = () => import('../components/childCom.vue').then(m => m.default)
export default {
  name: 'demo7',
  data () {
    return {
      f: 'hello world!',
      b: 'hello vue!'  
    }
  },
  components: { childCom }
}
</script>

<style scoped>

</style>

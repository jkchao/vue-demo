<template>
  <div id='demo7'>
    <h3>demo7</h3>
    {{ num }}    
    <child-com :foo="foo" :boo="boo" :coo="coo" :doo="doo" @increase="add"></child-com>
  </div>
</template>

<script>
const childCom = () => import('../components/childCom1.vue')
export default {
  name: 'demo7',
  data () {
    return {
      foo: 'Hello World!',
      boo: 'Hello Javascript!',
      coo: 'Hello Vue！',
      doo: 'Last',
      num: 0
    }
  },
  methods: {
    add () {
      console.log(111)
      this.num ++
    }
  },
  components: { childCom }
}
</script>

<style scoped>

</style>

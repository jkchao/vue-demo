<template>
  <div id='demo3'>
    <h3>demo3</h3>
    <asyncCom></asyncCom>
  </div>
</template>

<script>

// 2.3 之前，异步组件
// const asyncCom = () => import('../components/asyncCom.vue')

// 2.3 新增
const asyncCom = () => ({
  component: import('../components/asyncCom.vue'),
  loading: import('../components/loadingCom.vue'),
  err: import('../components/err.vue'),
  delay: 200,
  timeout: 3000
})

export default {
  name: 'demo3',
  components: {
    asyncCom
  }
}
</script>

<style scoped>

</style>

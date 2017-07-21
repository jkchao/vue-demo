<template>
  <div id='childCom2' class="list">
    <p>childCom2</p>
    <p>boo: {{ boo }}</p>
     <p>attrs: {{ $attrs }}</p> 
    <child-com3 v-bind="$attrs" v-on="$listeners"></child-com3>
  </div>
</template>

<script>
const childCom3 = () => import('../components/childCom3.vue')
export default {
  name: 'childCom2',
  props: ['boo'],
  inheritAttrs: false,
  components: { childCom3 }
}
</script>

<style scoped>
.list {
  border: 1px solid #e1e4e8;
  padding: 16px;
}
</style>

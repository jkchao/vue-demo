<template>
  <div id='childCom1' class="list">
    <p>childCom1</p>
    <p>foo: {{ foo }}</p>
     <p>attrs: {{ $attrs }}</p> 
    <child-com2 v-bind="$attrs" v-on="$listeners"></child-com2>
  </div>
</template>

<script>
const childCom2 = () => import('./childCom2.vue')
export default {
  name: 'childCom1',
  props: ['foo'],
  inheritAttrs: false,
  components: { childCom2 }
}
</script>

<style scoped>
.list {
  border: 1px solid #e1e4e8;
  padding: 16px;
}
</style>

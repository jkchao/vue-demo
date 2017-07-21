<template>
  <div id='child2'>
    {{ foo }}
  </div>
</template>

<script>
export default {
  name: 'child2',
  props: ['foo'],
  inheritAttrs: false
}
</script>

<style scoped>

</style>

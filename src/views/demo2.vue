<template>
  <div id='demo2'>
    <h3>demo2</h3>
    foo: {{foo}}
    <child :bar.sync="foo"></child>
  </div>
</template>

<script>
import child from '../components/child2.vue'
export default {
  name: 'demo2',
  data () {
    return {
      foo: 1
    }
  },
  components: {
    child
  }
}
</script>

<style scoped></style>

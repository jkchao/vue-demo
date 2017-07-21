<template>
  <div id='child1'>
    <h4>This is a child components</h4>
    bar: {{ bar }} <button @click="increase"> + </button>
  </div>
</template>

<script>
export default {
  name: 'child1',
  props: ['bar'],
  data () {
    return {
      num: this.bar
    }
  },
  methods: {
    increase () {
      this.num ++
      this.$emit('update:bar', this.num)
    }
  }
}
</script>

<style scoped>
button {
  margin-left: 20px;
}
</style>

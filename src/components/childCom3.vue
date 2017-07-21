<template>
  <div id='childCom3' class="list">
    <p>childCom3</p>
    <p>coo: {{ coo }}</p>
    <p>doo: {{ $attrs }}</p>
    <p> {{ $attrs }}</p>
    <button @click="increase"> + </button>
  </div>
</template>

<script>
export default {
  name: 'childCom3',
  props: ['coo'],
  methods: {
    increase () {
      this.$emit('increase')
    }
  }
}
</script>

<style scoped>
.list {
  border: 1px solid #e1e4e8;
  padding: 16px;
}
</style>

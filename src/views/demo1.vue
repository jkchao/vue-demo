<template>
  <div id='demo1'>
    <h3>demo1</h3>
    <!--aaa  -->
    <a @click.passive="cli" href="javascript:;">鼠标左键点击后查看控制台报错。</a>
  </div>
</template>

<script>
export default {
  name: 'demo1',
  methods: {
    cli (e) {
      e.preventDefault()
    }
  },
  comments: true
}
</script>

<style scoped></style>

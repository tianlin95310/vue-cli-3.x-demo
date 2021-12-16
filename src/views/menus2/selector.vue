<template>
  <div class="selector page-container">
    <h2>特殊的选择器</h2>
    <a>链接1</a>
    <a target>链接2</a>

    <a target="_self">链接2</a>
  </div>

</template>

<script>
  export default {
    name: 'Selector',
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>

.selector {
  a[target] {
    color: #42b983;
  }
  a[target="_self"] {
    color: red;
  }
}
</style>

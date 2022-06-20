<template>
  <div class="page-container">
    <button class="button" @click="testeq">测试==</button>
  </div>
</template>

<script>
/*eslint-disable*/
  export default {
    name: 'autoCast',
    methods: {
      testeq() {
        var a = {
          value: 1,
          [Symbol.toString]() {
            return a.value++
          }
        }
        console.log((a == 1 && a == 2 && a == 3))
      }
    }
  }
</script>

<style scoped>

</style>

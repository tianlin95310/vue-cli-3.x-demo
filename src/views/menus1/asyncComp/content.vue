<template>
  <div class="content">
    Async Components
  </div>
</template>

<script>
  export default {
    async setup() {
      const loadData = () => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(111)
          }, 2000)
        })
      }
      await loadData()
      console.log('content setup')
    }
  }
</script>

<style>
  .content {
    width: 300px;
    height: 300px;
    line-height: 300px;
  }
</style>

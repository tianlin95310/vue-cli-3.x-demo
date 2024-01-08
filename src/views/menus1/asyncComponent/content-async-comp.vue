<template>
  <div class="async-content1">
    Async Components with Async Setup, defineAsyncComponent, Suspense
  </div>
</template>

<script>
  export default {
    name: 'AsyncContent',
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
  .async-content1 {
    line-height: 200px;
    background-color: #aaa;
  }
</style>

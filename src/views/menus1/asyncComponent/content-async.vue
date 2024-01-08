<template>
  <div class="async-content2">
    Async Components With Async Setup, Suspense
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
  .async-content2 {
    line-height: 200px;
    background-color: #bbb;
  }
</style>

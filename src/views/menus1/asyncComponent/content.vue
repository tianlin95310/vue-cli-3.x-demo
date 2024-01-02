<template>
  <div class="async-content page-container">
    Async Components
  </div>
</template>

<script>
  export default {
    name: 'ACTContent',
    setup() {
      const loadData = () => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(111)
          }, 2000)
        })
      }
      loadData()
      console.log('content setup')
    }
  }
</script>

<style>
  .async-content {
    line-height: 300px;
    background-color: antiquewhite;
  }
</style>

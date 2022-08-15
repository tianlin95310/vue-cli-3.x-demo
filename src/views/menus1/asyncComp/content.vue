<template>
  <div>content</div>
</template>

<script>
  import { onMounted } from 'vue'
  export default {
    setup() {
      console.log('content setup')
      const loadData = () => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(111)
          }, 3000)
        })
      }
      onMounted(async() => {
        await loadData()
        console.log('content onMounted')
      })
      loadData()
    }
  }
</script>

<style>
</style>

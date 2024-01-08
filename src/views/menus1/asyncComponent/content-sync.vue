<template>
  <div class="sync-content">
    Async Components with defineAsyncComponent
  </div>
</template>

<script>
  export default {
    name: 'AsyncContent',
    setup() {
      console.log('content setup')
    }
  }
</script>

<style>
  .sync-content {
    line-height: 200px;
    background-color: #ccc;
  }
</style>

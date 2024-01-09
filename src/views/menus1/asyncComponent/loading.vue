<template>
  <div class="loadding-container">Loading...</div>
</template>

<script>
  /* eslint-disable */
  import {
    onMounted
  } from 'vue'

  export default {
    name: 'loading',
    setup() {
     console.log('loading setup')
    }
  }
</script>

<style>
.loadding-container {
  height: 100px;
  line-height: 100px;
}
</style>

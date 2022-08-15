<template>
  <async-comp></async-comp>
</template>
<script>
  import { defineAsyncComponent } from 'vue'
  import loading from './loading.vue'
  import error from './error.vue'
  // const time = (t, callback = () => {}) => {
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       callback()
  //       resolve()
  //     }, t)
  //   })
  // }
  const asyncComp = defineAsyncComponent({
    // loader: async() => {
    //   await time(3000)
    //   return import('./content.vue')
    // },
    loader: async() => import('./content.vue'),
    loadingComponent: loading,
    errorComponent: error,
    delay: 0,
    timeout: 3000,
    suspensible: true
  })
  export default {
    components: {
      asyncComp
    }
  }
</script>

<style>
</style>

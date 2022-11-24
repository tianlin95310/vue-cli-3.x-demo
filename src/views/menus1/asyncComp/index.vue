<template>
  <!-- 写在这里会顶替RouterView的内容,让页面结构失去RouterView -->
  <Suspense>
    <Content></Content>
    <template #fallback>
      <div style="height: 300px;line-height: 300px;">Loading...</div>
    </template>
  </Suspense>
</template>
<script>
  /*eslint-disable*/
  import { defineAsyncComponent } from 'vue'
  import loading from './loading.vue'
  import error from './error.vue'
  import Content from './content.vue'
  const asyncComp = defineAsyncComponent({
    loader: async() => import('./content.vue'),
    loadingComponent: loading,
    errorComponent: error,
    delay: 0,
    timeout: 2000,
    suspensible: true
  })
  export default {
    components: {
      asyncComp,
      Content
    }
  }
</script>

<style>
</style>

<template>
  <router-view v-slot="{ Component}" >
    <component :is="Component" />
  </router-view>
</template>

<script>
  import device from './utils/Device.js'
  import {
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
    onErrorCaptured,
    onRenderTracked,
    onRenderTriggered
  } from 'vue'
  export default {
    setup(props, context) {
      console.log('App setup---', this)
      onBeforeMount(() => {
        console.log('App onBeforeMount---', this)
      })
      onMounted(() => {
        function resetFont() {
          let size = '14px'
          if (device.IsPC()) {
            const width = document.body.clientWidth
            size = width / (1600 / 14) + 'px'
          } else {
            const width = document.body.clientWidth
            size = width / (375 / 14) + 'px'
          }
          document.getElementById('app').style.fontSize = size
          console.log('is Pc =', device.IsPC(), '\t', 'document.style.fontSize =', size)
        }
        resetFont()
        // 全局事件
        window.onresize = resetFont
        console.log('App onMounted', 'clientWidth =', document.body.clientWidth, 'clientHeight =', document.body.clientHeight)
        console.log('App onMounted', 'screen.width =', screen.width, 'screen.height =', screen.height)
      })
      onBeforeUpdate(() => {
        console.log('App onBeforeUpdate')
      })
      onUpdated(() => {
        console.log('App onUpdated')
      })
      onBeforeUnmount(() => {
        console.log('App onBeforeUnmount')
      })
      onUnmounted(() => {
        console.log('App onUnmounted')
      })
      onErrorCaptured(() => {
        console.log('App onErrorCaptured')
      })
      onRenderTracked(() => {
        console.log('App onRenderTracked')
      })
      onRenderTriggered(() => {
        console.log('App onRenderTriggered')
      })
      return {
        tip2: 'v3.x采用setup返回data'
      }
    }
  }
</script>
<style lang="scss">
  @import "assets/css/theme";
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

</style>

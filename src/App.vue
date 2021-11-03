<template>
  <router-view />
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
      console.log('setup---', this)
      onBeforeMount(() => {
        console.log('app onBeforeMount---', this)
      })
      onMounted(() => {
        let size = '14px'

        if (device.IsPC()) {
          const width = document.body.clientWidth

          size = width / (1920 / 14) + 'px'
        } else {
          const width = document.body.clientWidth
          size = width / (320 / 14) + 'px'
          document.getElementById('app').style.fontSize = size
        }
        document.getElementById('app').style.fontSize = size
        console.log('onMounted', 'clientWidth =', document.body.clientWidth, 'clientHeight =', document.body.clientHeight)
        console.log('is Pc =', device.IsPC(), '\t', 'document.style.fontSize =', size)
      })
      onBeforeUpdate(() => {
        console.log('app onBeforeUpdate')
      })
      onUpdated(() => {
        console.log('app onUpdated')
      })
      onBeforeUnmount(() => {
        console.log('app onBeforeUnmount')
      })
      onUnmounted(() => {
        console.log('app onUnmounted')
      })
      onErrorCaptured(() => {
        console.log('app onErrorCaptured')
      })
      onRenderTracked(() => {
        console.log('app onRenderTracked')
      })
      onRenderTriggered(() => {
        console.log('app onRenderTriggered')
      })
      return {
        tip2: 'v3.x采用setup返回data'
      }
    }
  }
</script>
<style lang="scss">
  @import "./assets/css/theme.css";
  body {
    background-color: whitesmoke;
  }
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

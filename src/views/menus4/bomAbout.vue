<template>
  <div class="bom-about page-container">
    <button class="button primary">{{ timer }}</button>
  </div>
</template>

<script setup>
  import { onMounted, ref, onActivated, onDeactivated, onUnmounted, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onUpdated } from 'vue'
  const timer = ref(0)
  let innerval = null
  if (!innerval) {
    innerval = setInterval(() => {
      console.log('计时器', timer.value)
      timer.value++
    }, 1000)
  }
  onBeforeMount(() => {
    console.log('bomAbout onBeforeMount')
  })
  onMounted(() => {
    console.log('bomAbout onMounted')
  })
  onBeforeUnmount(() => {
    console.log('bomAbout onBeforeUnmount')
  })
  onUnmounted(() => {
    console.log('bomAbout onUnmounted')
    clearInterval(innerval)
  })
  onActivated(() => {
    console.log('bomAbout onActivated')
  })
  onDeactivated(() => {
    console.log('bomAbout onDeactivated')
  })
  // onBeforeUpdate(() => {
  //   console.log('bomAbout onBeforeUpdate')
  // })
  // onUpdated(() => {
  //   console.log('bomAbout onUpdated')
  // })
  // 页面获取焦点
  window.onblur = () => {
    console.log('window.onblur')
  }
  // 页面是去焦点
  window.onfocus = () => {
    console.log('window.onfocus')
  }
  // 界面可见性
  document.addEventListener('visibilitychange', () => {
    console.log('document.hidden', document.hidden)
  })
  window.onbeforeunload = (e) => {
    console.log('window.onbeforeunload', e)
    e = window.event || e
    e.returnValue = '确认关闭界面吗?'
  }
</script>

<style>
.bom-about {
  background-color: blueviolet;
}
</style>

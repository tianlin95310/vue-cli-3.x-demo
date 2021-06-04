<template>
  <div class="canvas-view">
    <tl-circle-ratio :size="230" unit="px" :percent="percent" />
  </div>
</template>
<script>
  import TlCircleRatio from './comp/TlCircleRatio'
  export default {
    components: {
      TlCircleRatio
    },
    data() {
      return {
        percent: 0.1
      }
    },
    created() {
      const timer = setInterval(() => {
        console.log('setInterval', this.percent)
        this.percent += 0.01
        if (this.percent >= 1) {
          if (timer) {
            clearInterval(timer)
          }
        }
      }, 50)
    }
  }
</script>

<style lang="scss" scoped>
  .canvas-view {
    font-size: 14px;
  }
</style>

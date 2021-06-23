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
        percent: 0.0
      }
    },
    created() {
      const timer = setInterval(() => {
        console.log('setInterval', this.percent)
        this.percent += 0.05
        this.percent = parseFloat(this.percent.toFixed(2))
        if (this.percent > 1) {
          this.percent = 0.0
        }
        if (this.percent > 1) {
          if (timer) {
            clearInterval(timer)
          }
        }
      }, 200)
    }
  }
</script>

<style lang="scss" scoped>
  .canvas-view {
    font-size: 14px;
  }
</style>

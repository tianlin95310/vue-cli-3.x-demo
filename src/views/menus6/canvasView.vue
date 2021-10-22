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
    timer: {},
    data() {
      return {
        percent: 0.0
      }
    },
    created() {
      this.$options.timer = setInterval(() => {
        console.log('setInterval', this.percent)
        this.percent += 0.05
        this.percent = parseFloat(this.percent.toFixed(2))
        if (this.percent > 1) {
          this.percent = 0.0
        }
      }, 200)
    },
    unmounted() {
      console.log('unmounted---', this.$options.timer)
      clearInterval(this.$options.timer)
    }
  }
</script>

<style lang="scss" scoped>
  .canvas-view {
    font-size: 14px;
  }
</style>

<template>
  <div class="tl-circle-ratio">
    <canvas ref="canvas" class="canvas" :style="{width: size + unit, height: size + unit}" :width="size + unit"
      :height="size + unit" @mousedown="onmousedown" @mousemove="onmousemove" @mouseup="onmouseup" />
  </div>
</template>
<script>
  export default {
    name: 'TlCircleRatio',
    props: {
      size: {
        type: Number,
        default: 2
      },
      unit: {
        type: String,
        default: 'rem'
      },
      percent: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {}
    },
    watch: {
      percent() {
        this.onDraw()
      }
    },
    methods: {
      onmousemove(event) {
        console.log('onmousemove', event)
      },
      onmouseup(event) {
        console.log('onmouseup', event)
      },
      onmousedown(event) {
        console.log('onmousedown', event)
      },
      onDraw() {
        const canvas = this.$refs.canvas
        const cxt = canvas.getContext('2d')
        cxt.antialias = true
        if (!cxt) {
          return
        }
        const radius = this.size / 2 * 0.9
        const center = this.size / 2
        const lineWidth = this.size / 2 / 5
        cxt.lineWidth = lineWidth

        // draw background
        // stroke，用于绘制边框，fill用于填充
        cxt.beginPath()
        cxt.strokeStyle = '#EBEBEB'
        cxt.arc(center, center, radius, 0, 2 * Math.PI)
        cxt.stroke()

        cxt.beginPath()
        cxt.strokeStyle = '#FBD990'
        const end = Math.PI * 2 * this.percent - Math.PI / 2
        cxt.arc(center, center, radius, -Math.PI / 2, end, false)
        cxt.stroke()
      }
    },
    mounted() {
      this.onDraw()
    }
  }
</script>

<style scoped>
  .tl-circle-ratio {
    display: inline-block;
  }
</style>

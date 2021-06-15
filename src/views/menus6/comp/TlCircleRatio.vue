<template>
  <div class="tl-circle-ratio">
    <canvas ref="canvas" class="canvas" :style="{width: size + unit, height: size + unit}" :width="size + unit"
      :height="size + unit" />
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
      onDraw() {
        const canvas = this.$refs.canvas
        canvas.width = this.size
        canvas.height = this.size
        const ctx = canvas.getContext('2d')
        ctx.antialias = true
        const radius = this.size / 2 * 0.9
        const center = this.size / 2
        const lineWidth = this.size / 2 / 5
        ctx.lineWidth = lineWidth

        // draw background
        // stroke，用于绘制边框，fill用于填充
        ctx.beginPath()
        ctx.strokeStyle = '#EBEBEB'
        ctx.arc(center, center, radius, 0, 2 * Math.PI)
        ctx.stroke()

        ctx.beginPath()
        ctx.strokeStyle = '#FBD990'
        const end = Math.PI * 2 * this.percent - Math.PI / 2
        ctx.arc(center, center, radius, -Math.PI / 2, end, false)
        ctx.stroke()
      }
    },
    mounted() {
      console.log(this.size)
      this.onDraw()
    }
  }
</script>

<style scoped>
  .tl-circle-ratio {
    display: inline-block;
  }
</style>

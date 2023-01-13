<template>
  <div ref="container" class="cylinder-progress">
    <canvas ref="canvas" class="canvas" :width="width" :height="height" />
  </div>
</template>
<script>
  export default {
    name: 'TlCircleRatio',
    props: {
      percent: {
        type: Number,
        default: 0
      },
      width: {
        type: Number,
        default: 200
      },
      height: {
        type: Number,
        default: 400
      },
      cylinderHeight: {
        type: Number,
        default: 50
      }
    },
    data() {
      return {
        canvas: null
      }
    },
    watch: {
      percent() {
        this.onDraw(this.canvas)
      },
      cylinderHeight() {
        this.onDraw(this.canvas)
      }
    },
    methods: {
      onDraw(canvas) {
        canvas.clearRect(0, 0, this.width, this.height)

        canvas.strokeStyle = 'blue'
        canvas.fillStyle = 'grey'

        // 绘制左边竖线
        const offsetH = 0
        canvas.beginPath()
        canvas.moveTo(0, this.cylinderHeight + offsetH)
        canvas.lineTo(0, this.height - this.cylinderHeight - offsetH)
        canvas.stroke()
        canvas.closePath()

        // 绘制右边竖线
        canvas.beginPath()
        canvas.moveTo(150, this.cylinderHeight)
        canvas.lineTo(150, this.height - this.cylinderHeight)
        canvas.stroke()
        canvas.closePath()

        // 绘制底部
        canvas.save()
        canvas.beginPath()
        canvas.ellipse(75, this.height - this.cylinderHeight, 75, this.cylinderHeight, 0, Math.PI, Math.PI * 2)
        canvas.setLineDash([6, 6])
        canvas.stroke()
        canvas.closePath()
        canvas.restore()
        canvas.beginPath()
        canvas.ellipse(75, this.height - this.cylinderHeight, 75, this.cylinderHeight, 0, 0, Math.PI)
        canvas.stroke()
        canvas.closePath()

        // 绘制当前进度
        if (this.percent >= 0.1 && this.percent <= 1) {
          const total = this.height - this.cylinderHeight - this.cylinderHeight
          const current = total * this.percent
          canvas.beginPath()
          canvas.strokeStyle = 'rgba(0, 156, 156, 0.5)'
          canvas.fillStyle = 'rgba(0, 156, 156, 0.5)'
          canvas.ellipse(75, this.height - this.cylinderHeight - current, 75, this.cylinderHeight, 0, 0, Math.PI * 2)
          canvas.stroke()
          canvas.fill()
          canvas.closePath()

          // 填充
          canvas.beginPath()
          canvas.moveTo(this.width, this.height - this.cylinderHeight - current)
          canvas.ellipse(75, this.height - this.cylinderHeight - current, 75, this.cylinderHeight, 0, 0, Math.PI)
          canvas.lineTo(0, this.height - this.cylinderHeight)
          canvas.ellipse(75, this.height - this.cylinderHeight, 75, this.cylinderHeight, 0, -Math.PI, 0, true)
          canvas.lineTo(this.width, this.height - this.cylinderHeight - current)
          canvas.fill()
          // 便于查看测试填充路径
          // canvas.strokeStyle = 'red'
          // canvas.stroke()
          canvas.closePath()
        }

        // 绘制顶部的口
        canvas.strokeStyle = 'blue'
        canvas.fillStyle = 'grey'
        canvas.beginPath()
        canvas.ellipse(75, this.cylinderHeight, 75, this.cylinderHeight, 0, 0, Math.PI * 2)
        canvas.stroke()
        canvas.closePath()
      },
      initCanvas() {
        const canvas = this.$refs.canvas
        // 通过api获取元素的style
        console.log('container style', window.getComputedStyle(this.$refs.container))
        canvas.width = this.width
        canvas.height = this.height
        const context = canvas.getContext('2d')
        this.canvas = context
      }
    },
    mounted() {
      this.initCanvas()
      this.onDraw(this.canvas)
    }
  }
</script>

<style lang="scss" scoped>
  .cylinder-progress {
    display: inline-block;
    width: 100%;
    height: 100%;
    .canvas {
      width: 100%;
      height: 100%;
    }
  }
</style>

<template>
  <div class="tl-chart">
    <canvas class="canvas" :width="canvasW" :height="canvasH" ref="canvas"></canvas>
  </div>
</template>

<script>
  /*eslint-disable*/
  export default {
    props: {
      list: {
        type: Array,
        default () {
          return [12, 15, 16, 18, 14, 13, 19]
        }
      }
    },
    data() {
      return {
        padding: 50,
        canvasW: 1920,
        canvasH: 1080,
        canvas: undefined,
        itemWidth: 0
      }
    },
    mounted() {
      this.initCanvas()
      this.initItemWidth()
      this.onDraw()
    },
    methods: {

      onDraw() {
        let canvas = this.canvas
        // 绘制x轴
        canvas.strokeStyle = 'black'
        canvas.font = '42px Helvetica';
        canvas.textAlign = 'center'
        canvas.textBaseline = 'middle'
        canvas.moveTo(0 + this.padding, this.canvasH - this.padding)
        canvas.lineTo(this.canvasW, this.canvasH - this.padding)
        canvas.stroke()
        for (let i = 0; i < this.list.length; i++) {
          let left = (2 * (i + 1) - 1) * this.itemWidth + this.padding
          let bottom = this.canvasH
          canvas.fillText(`${i + 1}`, left + this.itemWidth / 2, bottom - this.padding / 2, this.itemWidth)
        }

        // 绘制圆点
        canvas.fillText('0', this.padding / 2, this.canvasH - this.padding / 2)

        // 绘制y轴
        let yAxis = []
        let min = this.list[0]
        let max = this.list[0]
        this.list.forEach(item => {
          if (item < min) {
            min = item
          }
          if (item > max) {
            max = item
          }
        })
        let axisItem = (max - min) / 4
        for (let i = 0; i < 5; i++) {
          yAxis.push(min + axisItem * i)
        }
        canvas.moveTo(0 + this.padding, this.canvasH - this.padding)
        canvas.lineTo(0 + this.padding, 0)
        canvas.stroke()

        let yItem = (this.canvasH - this.padding * 2) / yAxis.length

        for (let i = 0; i < yAxis.length; i++) {
          let left = this.padding / 2
          let bottom = this.canvasH - this.padding - (i + 1) * yItem
          canvas.beginPath()
          canvas.setLineDash([5])
          canvas.moveTo(0 + this.padding, bottom)
          canvas.lineTo(this.canvasW, bottom)
          canvas.stroke()
          canvas.fillText(`${yAxis[i]}`, left, bottom)
          canvas.setLineDash([])
        }

        for (let i = 0; i < this.list.length; i++) {
          let left = (2 * (i + 1) - 1) * this.itemWidth + this.padding
          let right = 2 * (i + 1) * this.itemWidth + this.padding

          let top = this.canvasH - this.padding - ((this.list[i] - min) / axisItem + 1) * yItem
          let bottom = this.canvasH - this.padding
          // console.log(left, top, right, bottom)
          let gnt1 = canvas.createLinearGradient(left, top, right, bottom);
          gnt1.addColorStop(0, 'red');
          gnt1.addColorStop(1, 'blue');
          canvas.fillStyle = gnt1;
          canvas.fillRect(left, top, right - left, bottom - top);

          canvas.textBaseline = 'bottom'
          canvas.fillText(`${this.list[i]}`, left + this.itemWidth / 2, top, this.itemWidth)
        }
      },
      initCanvas() {
        const canvasContext = this.$refs.canvas
        const canvas = canvasContext.getContext('2d')
        this.canvas = canvas
        canvas.antialias = true
        // console.log(canvas)
      },
      initItemWidth() {
        this.itemWidth = (this.canvasW - this.padding * 2) / (this.list.length * 2 + 1)
        // console.log('itemWidth', this.itemWidth)
      }
    }
  }
</script>

<style lang="css">
  .tl-chart {
    display: inline-block;
    width: 100%;
    height: 100%;
    /* border: 1px solid gainsboro; */
  }
  .canvas {
    width: 100%;
    height: 100%;
  }
</style>

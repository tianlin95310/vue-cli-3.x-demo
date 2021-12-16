<template>
  <div class="canvas-view page-container" @mousemove="onMouseMove">
    <input v-model="inputValue"/>
    <div style="width: 100px;height: 100px;display: inline-block;">
      <tl-circle-ratio :percent="percent" />
    </div>
    <div style="width: 100px;height: 100px;display: inline-block;">
      <tl-circle-ratio-round :percent="percent" />
    </div>
    <div style="width: 480px;height: 270px;">
      <chart></chart>
    </div>
    <div style="height: 600px;">
    </div>
    <div style="width: 100px;height: 100px;display: inline-block;">
      <tl-circle-ratio-round :percent="percent" />
    </div>
    <div class="move-position" :style="{left: eventPo.mx - leftWidth - 40 + 'px', top: eventPo.my - 40 - 15 + 'px', 'z-index': 100}">
    <!-- {{ eventPo.mx - leftWidth }}, {{eventPo.my - 40}} -->
    {{ eventPo.mx }}, {{eventPo.my }}
    </div>
  </div>
</template>
<script>
  import TlCircleRatio from './comp/TlCircleRatio'
  import TlCircleRatioRound from './comp/TlCircleRatioRound.vue'
  import chart from './comp/chart.vue'
  import { swapEvent } from '@/utils/event.js'

  export default {
    name: 'CanvasView',
    components: {
      TlCircleRatio,
      TlCircleRatioRound,
      chart
    },
    timer: {},
    data() {
      return {
        percent: 0.0,
        eventPo: {},
        leftWidth: 0,
        inputValue: ''
      }
    },
    created() {
      console.log('canvasView created', this.$el)
    },
    mounted() {
      console.log('canvasView mounted', this.$el)
      this.leftWidth = 18 * document.documentElement.clientWidth / 100
    },
    unmounted() {
      console.log('canvasView unmounted---', this.$options.timer, this.$el)
      clearInterval(this.$options.timer)
    },
    activated() {
      console.log('canvasView activated---', this.$el)
      const timer = setInterval(() => {
        // console.log('setInterval', this.percent)
        this.percent += 0.01
        this.percent = parseFloat(this.percent.toFixed(2))
        if (this.percent >= 1) {
          if (timer) {
            clearInterval(timer)
          }
        }
      }, 10)
    },
    deactivated() {
      console.log('canvasView deactivated---', this.$el)
    },
    methods: {
      onMouseMove(event) {
        event = swapEvent(event, document.getElementById('main-content'))
        this.eventPo = event
        // console.log('文档宽高', document.documentElement.clientWidth, document.documentElement.clientHeight)
        // // 1，获取相对于“触发事件的元素”的坐标
        // console.log('相对坐标', event.offsetX, event.offsetY)
        // // 2,通过 event 对象的 screenX 和 screenY 可以获取屏幕坐标（包括上面浏览器工具栏标签页
        // console.log('屏幕坐标', event.screenX, event.screenY)
        // // 3，获取相对于浏览器可视区域的坐标
        // console.log('可视区域', event.clientX, event.clientY)
        // // 4，获取相对document文档的坐标
        // console.log('文档坐标', event.mx, event.my)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .canvas-view {
    font-size: 14px;
    background: gainsboro;
    position: relative;

    .move-position {
      pointer-events: none;
      background-color: yellowgreen;
      opacity: 0.7;
      width: 80px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      position: absolute;
      color: white;
    }
  }
</style>

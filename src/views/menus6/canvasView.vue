<template>
  <div class="canvas-view page-container" @mousemove="onMouseMove">
   <div>
     <div style="display: inline-block;width: 240px;vertical-align: middle">
       <div>点的屏幕坐标：{{ eventPo.mx }}, {{eventPo.my }}</div>
       <div>相对应右侧内容块的坐标：{{ eventPo.mx - leftWidth }}, {{eventPo.my - 40}}</div>
       <input v-model="inputValue" style="vertical-align: middle" placeholder="测试keep Alive"/>
     </div>
     <div style="width: 100px;height: 100px;display: inline-block;vertical-align: middle">
       <tl-circle-ratio :percent="percent" />
     </div>
     <div style="width: 100px;height: 100px;display: inline-block;vertical-align: middle">
       <tl-circle-ratio-round :percent="percent" />
     </div>
     <button class="button" @click="showDialog">图片裁剪</button>
   </div>
    <div style="height: 320px;display: flex;flex-direction: column;justify-content: center;align-items: center">
      <chart style="width: 480px;height: 270px;"></chart>
    </div>
    <t-l-dialog v-model="visible">
      <template v-slot:content>
        <div class="dialog-content">
          <div>
            <input type="file" @change="onFileChange">
          </div>
          <div class="img-content">
            <div class="img-div">
              <img :src="currentImg" :style="styleObj" class="img">
            </div>
            <div class="img-cut">
              <t-l-image-cut style="z-index: 210" />
            </div>
          </div>
        </div>
      </template>
    </t-l-dialog>
  </div>
</template>
<script>
  import TlCircleRatio from './comp/TlCircleRatio'
  import TlCircleRatioRound from './comp/TlCircleRatioRound.vue'
  import chart from './comp/chart.vue'
  import { swapEvent } from '@/utils/event.js'
  import TLDialog from '@/components/TLDialog'
  import TLImageCut from './comp/TLImageCut'
  export default {
    name: 'CanvasView',
    components: {
      TlCircleRatio,
      TlCircleRatioRound,
      chart,
      TLDialog,
      TLImageCut
    },
    data() {
      return {
        percent: 0.0,
        eventPo: {},
        leftWidth: 0,
        inputValue: '',
        isDone: false,
        visible: false,
        currentImg: null,
        styleObj: {
          height: '500px',
          width: 'auto'
        }
      }
    },
    created() {
      console.log('canvasView created', this.$el)
    },
    mounted() {
      console.log('canvasView mounted', this.$el)
      this.leftWidth = 18 * document.documentElement.clientWidth / 100
    },
    activated() {
      console.log('canvasView activated---', this.$el)
      if (!this.isDone) {
        const timer = setInterval(() => {
          // console.log('setInterval', this.percent)
          this.percent += 0.01
          this.percent = parseFloat(this.percent.toFixed(2))
          if (this.percent >= 1) {
            this.isDone = true
            if (timer) {
              clearInterval(timer)
            }
          }
        }, 10)
      }
    },
    methods: {
      onFileChange(event) {
        console.log('onFileChange', event)
        const file = event.target.files[0]
        this.currentImg = URL.createObjectURL(file)
        const image = new Image()
        image.src = this.currentImg
        const _this = this
        image.onload = function() {
          console.log(this.naturalWidth, this.naturalHeight)
          if (this.naturalWidth > this.naturalHeight) {
            _this.styleObj = {
              height: 'auto',
              width: '500px'
            }
          } else {
            _this.styleObj = {
              height: '500px',
              width: 'auto'
            }
          }
        }
      },
      showDialog() {
        this.visible = true
      },
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
    position: relative;
    .dialog-content {
      .img-content {
        height: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        .img-div {
          position: absolute;
          display: flex;
          top: 0;
          left: 0;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          z-index: 200;
        }
        .img-cut {
          z-index: 210;
          position: absolute;
          width: 100%;
          top: 0;
          left: 0;
          text-align: center;
        }
      }
    }
  }
</style>

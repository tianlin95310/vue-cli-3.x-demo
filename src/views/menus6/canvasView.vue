<template>
  <div class="canvas-view page-container" @mousemove="onMouseMove">
    <div>
      <div>点的屏幕坐标：{{ eventPo.mx }}, {{ eventPo.my }}</div>
      <div>
        相对应右侧内容块的坐标：{{ eventPo.mx - leftWidth }},
        {{ eventPo.my - 40 }}
      </div>
    </div>

    <div>
      <div
        class="ib-vm"
        style="width: 100px;height: 100px;"
        title="普通的原型百分比"
      >
        <tl-circle-ratio :percent="percent" />
      </div>
      <div
        class="ib-vm"
        style="width: 100px;height: 100px;"
        title="渐变色的原型百分比"
      >
        <tl-circle-ratio-round :percent="percent" />
      </div>
      <button class="button" @click="showDialog">图片裁剪</button>

      <div class="ib-vm" style="width: 200px;height: 200px;background: #D42D00">
        <tl-round-count-down :progress="progress" />
      </div>

      <div class="ib-vm">
        <CylinderProgress
          :percent="percent2"
          :cylinderHeight="cylinderHeight"
          :width="150"
          :height="300"
        >
        </CylinderProgress>
      </div>

      <div class="ib-vm">
        <div>
          <button class="button" @click="cylinderHeight += 1">加一点</button>
          倾斜度：{{ cylinderHeight }}
          <button class="button" @click="cylinderHeight -= 1">减一点</button>
        </div>
        <div>
          <button class="button" @click="percent2 += 0.1">加一点</button>
          进度：{{ percent2.toFixed(1) }}
          <button class="button" @click="percent2 -= 0.1">减一点</button>
        </div>
      </div>

      <div class="ib-vm">
        <CylinderProgress
          :percent="percent"
          :cylinderHeight="100 / 6"
          :invisableDashed="true"
          containerColor="gold"
          progressColor="rgba(156, 156, 0, 0.5)"
          :width="100"
          :height="200"
        >
        </CylinderProgress>
      </div>

      <div class="ib-vm">
        <TLWaveView
          :waveAmplitude="waveAmplitude"
          :waveHeight="waveHeight"
          :width="200"
          :height="200"
          bgColor="gainsboro"
          :isCycle="true"
          :styleObj="{ border: '1px solid white', borderRadius: '50%' }"
          waveColor="rgba(0, 255, 255, 255)"
        ></TLWaveView>
      </div>

      <div class="ib-vm">
        <div>
          <button class="button" @click="waveAmplitude += 5">加一点</button>
          振幅：{{ waveAmplitude }}
          <button class="button" @click="waveAmplitude -= 5">减一点</button>
        </div>
        <div>
          <button class="button" @click="waveHeight += 5">加一点</button>
          高度：{{ waveHeight }}
          <button class="button" @click="waveHeight -= 5">减一点</button>
        </div>
      </div>

      <div class="ib-vm">
        <TLChart style="width: 320px;height: 180px;" />
      </div>
    </div>

    <t-l-dialog v-model="visible">
      <template v-slot:content>
        <div class="dialog-content">
          <div>
            <input type="file" class="button" @change="onFileChange" />
          </div>
          <div class="img-content">
            <div class="img-div">
              <img :src="currentImg" :style="styleObj" class="img" />
            </div>
            <div class="img-cut" style="width: 300px;height: 300px;">
              <t-l-image-cut style="z-index: 210" />
            </div>
          </div>
        </div>
      </template>
    </t-l-dialog>
  </div>
</template>
<script>
/*eslint-disable*/
import { swapEvent } from "@/utils/event.js";
import TlCircleRatio from "./canvas/TlCircleRatio";
import TlCircleRatioRound from "./canvas/TlCircleRatioRound.vue";
import TLChart from "./canvas/TLChart.vue";
import TLDialog from "@/components/TLDialog";
import TLImageCut from "./canvas/TLImageCut";
import TlRoundCountDown from "./canvas/TlRoundCountDown.vue";

import CylinderProgress from './canvas/CylinderProgress'
// import TLWaveView from './canvas/TLWaveView'
import TLWaveView from "vue-waveview";
import "vue-waveview/vue-waveview.css";

// import CylinderProgress from "vue-cylinder-progress";
// import "vue-cylinder-progress/vue-cylinder-progress.css";

export default {
  name: "CanvasView",
  components: {
    TlCircleRatio,
    TlCircleRatioRound,
    TLChart,
    TLDialog,
    TLImageCut,
    TlRoundCountDown,
    CylinderProgress,
    TLWaveView
  },
  data() {
    return {
      eventPo: {},
      leftWidth: 0,
      isDone: false,
      isDone2: false,
      visible: false,
      currentImg: null,
      styleObj: {
        height: "300px",
        width: "auto"
      },
      progress: 60,
      percent: 0.0,
      percent2: 0.5,
      cylinderHeight: 30,
      waveAmplitude: 10,
      waveHeight: 100
    };
  },
  created() {
    console.log("canvasView created", this.$el);
  },
  mounted() {
    console.log("canvasView mounted", this.$el);
    this.leftWidth = Math.floor(
      (18 * document.documentElement.clientWidth) / 100
    );
  },
  activated() {
    console.log("canvasView activated---", this.$el);
    if (!this.isDone) {
      this.isDone = true;
      const timer = setInterval(() => {
        // console.log('setInterval', this.percent)
        this.percent += 0.01;
        this.percent = parseFloat(this.percent.toFixed(2));
        if (this.percent >= 1) {
          if (timer) {
            clearInterval(timer);
          }
        }
      }, 200);
    }
    if (!this.isDone2) {
      this.isDone2 = true;
      const timer2 = setInterval(() => {
        this.progress--;
        if (this.progress <= 0) {
          if (timer2) {
            clearInterval(timer2);
          }
        }
      }, 1000);
    }
  },
  methods: {
    onFileChange(event) {
      console.log("onFileChange", event);
      const file = event.target.files[0];
      if (!file) {
        return;
      }
      this.currentImg = URL.createObjectURL(file);
      const image = new Image();
      image.src = this.currentImg;
      const _this = this;
      image.onload = function() {
        console.log(this.naturalWidth, this.naturalHeight);
        if (this.naturalWidth > this.naturalHeight) {
          _this.styleObj = {
            height: "auto",
            width: "300px"
          };
        } else {
          _this.styleObj = {
            height: "300px",
            width: "auto"
          };
        }
      };
    },
    showDialog() {
      this.visible = true;
    },
    onMouseMove(event) {
      event = swapEvent(event, document.getElementById("main-content"));
      this.eventPo = event;
      console.log(
        event,
        "文档宽高",
        document.documentElement.clientWidth,
        document.documentElement.clientHeight,
        "相对坐标",
        event.offsetX,
        event.offsetY,
        "屏幕坐标",
        event.screenX,
        event.screenY,
        "可视区域",
        event.clientX,
        event.clientY,
        "文档坐标",
        event.mx,
        event.my
      );
      // // 1，获取相对于“触发事件的元素”的坐标
      console.log();
      // // 2,通过 event 对象的 screenX 和 screenY 可以获取屏幕坐标（包括上面浏览器工具栏标签页
      console.log();
      // // 3，获取相对于浏览器可视区域的坐标
      console.log();
      // // 4，获取相对document文档的坐标
      console.log();
    }
  }
};
</script>

<style lang="scss" scoped>
.dialog-content {
  .img-content {
    height: 300px;
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
      text-align: center;
      margin: 0 auto;
    }
  }
}
.canvas-view {
  font-size: 14px;
  position: relative;
}
</style>

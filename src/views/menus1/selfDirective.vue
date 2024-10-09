<template>
  <div class="self-directive page-container">
    <h2>测试使用自定义指令，前面加v-</h2>

    <div class="move-able" :style="{ left: left + 'px', top: top + 'px' }" @mousedown="mousedown" @mousemove="mousemove" @mouseup="mouseup">
      <span>视频自动播放</span>
      <video v-autoplay :muted="true">
        <source src="@/assets/video/demo.mp4" type="video/mp4" />
      </video>
    </div>

    <div>
      <div>
        第一个输入框：
        <input />
      </div>
      <div>
        第二个输入框：
        <input v-focus />
      </div>
    </div>
    <div v-randomcolor>随机颜色</div>

    <div>
      <button class="button" @click="showDialog = true">可拖拽弹窗</button>
    </div>

    <div id="infinite" ref="infinite" class="infinite" @click="hideFullScreen">
      <LoadingCotantainer ref="loading" @loadMore="loadMore">
        <template #content>
          <div class="load-more-content">
            <div v-for="(item, index) in items" :key="index" class="load-item" v-randomcolor>{{ index + 1 }}</div>
          </div>
        </template>
      </LoadingCotantainer>
    </div>

    <div>
      <button class="button" @click="items.push({})">添加一个元素</button>
      <button class="button" @click="items = []">清空列表</button>
      <button class="button" @click="fullScreen">全屏</button>
    </div>

    <t-l-dialog v-model="showDialog" tableTitle="a fixed Table" :appendToBody="false">
      <template v-slot:content>
        <div style="height: 100px;background-color: #cccccc">我是谁</div>
      </template>
    </t-l-dialog>

  </div>
</template>
<script setup>
import TLDialog from 'comp/TLDialog'
import LoadingCotantainer from 'comp/LoadingCotantainer'
import { reactive, toRefs, ref, isReactive, isRef, onMounted } from 'vue'

const state = {
  left: 700,
  top: 0,
  mouseX: 0,
  mouseY: 0,
  isDown: false,
  showDialog: false,
  items: ref([]),
  other: reactive({
    recItems: []
  })
}
const loading = ref(null)
const stateRefs = toRefs(reactive(state))
const { showDialog, items, other } = stateRefs
const { left, top } = stateRefs
/// items is a ref
console.log('state items', isReactive(items), isRef(items))
console.log('state showDialog', isReactive(showDialog), isRef(showDialog))
console.log('state other', isReactive(other), isRef(other))
console.log('state other', isReactive(other.value.recItems), isRef(other.value.recItems))

const vRandomcolor = {
  mounted: function (el) {
    const random = () => {
      return Math.ceil(Math.random() * 0xffffff)
    }
    el.style.color = '#' + random().toString(16)
    el.style.backgroundColor = '#' + random().toString(16)
  }
}
const vAutoplay = {
  mounted: function (el) {
    console.log('---autoplay mounted---', el)
    if (el) {
      el.play()
    }
  }
}

onMounted(() => {
  state.items.value = []
})

const vFocus = {
  // 指令的定义
  created: function (el, binding) {
    // console.log('---focus created', el)
  },
  beforeMount: function (el) {
    // console.log('---focus beforeMount', el)
  },
  mounted: function (el) {
    console.log('---focus mounted', el)
    el.focus()
  },
  beforeUpdate: function (el) {
    // console.log('---focus beforeUpdate', el)
  }
}

const loadMore = () => {
  console.info('loadMore called')
  setTimeout(() => {
    state.items.value.push(...[{}, {}, {}, {}, {}])
    loading.value.loadFinished()
    console.log('state.items', state.items.value)
  }, 2000)
}
const mouseup = (ev) => {
  console.log('mouseup')
  state.isDown = false
}
const mousemove = (ev) => {
  if (!state.isDown) {
    return
  }
  const dx = ev.clientX - state.mouseX
  const dy = ev.clientY - state.mouseY

  left.value += dx
  top.value += dy
  state.mouseX = ev.clientX
  state.mouseY = ev.clientY

  console.log('mousemove', dx, dy, left, top)
}
const mousedown = (ev) => {
  console.log('mousedown')
  state.mouseX = ev.clientX
  state.mouseY = ev.clientY
  state.isDown = true
}
// const fullScreen = () => {
//   const ele = document.getElementById('infinite')
//   console.log(ele.style, ele.classList, ele.className, ele.cssText)
//   ele.parentElement.removeChild(ele)
//   document.body.appendChild(ele)
// }
const fullScreen = () => {
  const ele = document.getElementById('infinite')
  ele.classList.add('component-full-screen')
}
const hideFullScreen = () => {
  const ele = document.getElementById('infinite')
  ele.classList.remove('component-full-screen')
}
</script>

<style lang="scss" scoped>
.component-full-screen {
  position: fixed;
  width: 80%;
  height: 80% !important;
  left: 10%;
  top: 10%;
  box-shadow: gray 0 0 3px 3px;

  &:after {
    content: 'X';
    display: block;
    position: absolute;
    right: -16px;
    top: -16px;
    cursor: pointer;
  }
}

.self-directive {
  position: relative;

  .infinite {
    height: 300px;

    .load-more-content {
      .load-item {
        height: 200px;
        line-height: 200px;
        font-size: 30px;
        text-align: center;
      }
    }
  }

  .move-able {
    position: absolute;
    background-color: aqua;
    text-align: center;
    line-height: 200px;
    cursor: pointer;
    user-select: none;
    opacity: 0.8;

    video {
      position: absolute;
      width: 200px;
      height: 200px;
      border-radius: 100%;
    }

    span {
      z-index: 100;
      font-size: 1rem;
      color: white;
      width: 200px;
      display: inline-block;
      position: absolute;
    }
  }
}
</style>

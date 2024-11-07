<script setup>
import { reactive, ref, onMounted, getCurrentInstance, nextTick, onBeforeUnmount, defineExpose, watch } from 'vue'
import { debounce } from 'lodash'
const initBegin = 0
const initEnd = 10

const itemHeight = 120

const offsetPosition = ref(0)
let direction = 'down'

const state = reactive({
  list: Array.from({ length: 20 }, (_, index) => index + 1),
  reuseItems: []
})

const containerRef = ref(null)
const bodyMatch = ref(null)
state.reuseItems = state.list.slice(initBegin, initEnd)

const renderInViewCount = Math.ceil(400 / itemHeight)
console.log('当前渲染的能渲染的视图有', renderInViewCount)

let currentRenderBegin = initBegin
let currentRenderEnd = initEnd
const lastScrollTop = ref(0)

const renderList = (offset, begin, end) => {
  if (currentRenderBegin === begin && currentRenderEnd === end) {
    return
  } else {
    currentRenderBegin = begin
    currentRenderEnd = end
  }
  console.log('renderList', offset, begin, end)
  state.reuseItems = state.list.slice(currentRenderBegin, currentRenderEnd)
}

const onScrollFun = (event) => {
  // console.log('event', event)
  const scrollTop = event.target.scrollTop
  offsetPosition.value = Math.floor(scrollTop / itemHeight)
  if (scrollTop - lastScrollTop.value > 0) {
    // 下滑
    console.log('下滑', scrollTop)
    direction = 'down'
  } else {
    // 上滑
    console.log('上滑', scrollTop)
    direction = 'up'
  }
  renderList(offsetPosition.value, initBegin + offsetPosition.value, initEnd + offsetPosition.value)
  lastScrollTop.value = scrollTop
}
watch(offsetPosition, (newV, oldV) => {
  console.log('offsetPosition changed', newV, oldV)
  // renderLast(direction === 'down')
})

const renderLast = (firstToLast = true) => {
  const items = document.getElementById('items')
  if (firstToLast) {
    const first = items.firstElementChild
    items.removeChild(first)
    items.appendChild(first)
  } else {
    const last = items.lastElementChild
    items.removeChild(last)
    items.insertBefore(last, items.firstElementChild)
  }
}

onMounted(() => {
  const container = containerRef.value
  console.log('container', container, container.scrollHeight)
  bodyMatch.value.style.height = state.list.length * itemHeight + 'px'
  container.addEventListener('scroll', onScrollFun)
})

onBeforeUnmount(() => {
  // containerRef.value.removeEventListener('scroll', debounce(onScrollFun, 200))
  containerRef.value.removeEventListener('scroll', onScrollFun)
})
defineExpose({
  moveToFirst: renderLast,
  moveToLast: () => renderLast(false)
})
</script>

<template>
  <div ref="containerRef" class="recycle-list">
    <div ref="bodyMatch" id="body-match" class="body-match"></div>
    <div id="items" class="items" :style="{ transform: `translateY(${lastScrollTop}px)` }">
      <div v-randomcolor v-for="(item, index) in state.reuseItems" :key="index" class="item"
        :style="{ height: `${itemHeight}px`, lineHeight: `${itemHeight}px` }">
        index{{ item }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.recycle-list {
  width: 200px;
  height: 400px;
  border: 1px solid gainsboro;
  overflow: auto;
  position: relative;

  .body-match {
    width: 100%;
  }

  .items {
    position: absolute;
    width: 100%;
    // left: 0;
    top: 0;
  }

  .item {
    width: 100%;
    // height: 50px;
    // line-height: 50px;
    text-align: center;
    border-bottom: 1px solid goldenrod;
  }
}
</style>

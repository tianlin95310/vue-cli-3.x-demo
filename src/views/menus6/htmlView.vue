<template>
  <div class="page-container html-view">
    <tl-rating :score="score" size="1.8em" @update="update" />
    <tl-index-view :items="items" class="index" />
    <div style="display: inline-block;width: 45%;">
      <TagSelect name="v1" v-model="v1" :items="['AAA', 'BBB', 'CCC', 'DDD']"></TagSelect>
    </div>

    <div style="display: inline-block;width: 45%;">
      <TagSelect name="v2" v-model="v2" :colCount="4" :items="['AAA', 'BBB', 'CCC', 'DDD']" type="radio"></TagSelect>
    </div>

    <div style="display: inline-block;width: 400px;">
      <TagSelect name="v3" v-model="v3" :items="['AAA', 'BBB', 'CCC', 'DDD']" type="radio" :disabled="true">
      </TagSelect>
    </div>

    <div class="list-view">
      <div class="card">
        <RecycleList ref="recycleView"></RecycleList>
      </div>

      <div id="recycleView" style="overflow-y:auto; height:200px; border:1px solid #000;display: inline-block;width: 200px;">
        <div id="itemsContainer">
          <!-- 项目将被插入这里 -->
        </div>
      </div>
    </div>

    <div>
      <button class="button" @click="moveToLast">移动到末尾</button>
      <button class="button" @click="moveToFirst">移动到开头</button>

      <button class="button" @click="addData">添加数据级</button>
    </div>

  </div>
</template>
<script setup>
import { ref, watch, reactive, toRefs, onActivated, onMounted } from 'vue'
import TlIndexView from './html/TLIndexView.vue'
import TlRating from './html/TlRating.vue'
import TagSelect from './html/TagSelect'
import RecycleList from './html/RecycleList'
import RecycleView from './html/RecycleViewV2/index'
const recycleList = ref(null)
const state = reactive({
  score: ref(3),
  items: [
    'A', 'B', 'C', 'D', 'E', 'F', 'G',
    'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'W', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z'
  ],
  v1: [],
  v2: null,
  v3: 'AAA',
  recycleView: null
})

const { v1, v2, v3, items, score } = toRefs(state)
watch(() => state.v1, (newV, oldV) => {
  console.log('watch v1', newV)
})

onMounted(() => {
  const recycleView = new RecycleView('#itemsContainer', (data, parent) => {
    const element = document.createElement('div')
    element.style.height = '50px'
    element.style.border = '1px solid #ccc'
    element.textContent = data.text
    parent.appendChild(element)
    return element
  })

  // 假设的数据
  const data = []
  for (let i = 0; i < 100; i++) {
    data.push({ text: `Item ${i}`, id: i })
  }

  // 设置数据并初始化回收逻辑
  recycleView.setData(data)
  state.recycleView = recycleView
})

onActivated(() => {
  console.log('this.$route.query', this.$route.query)
  console.log('this.$route.query.v1', this.$route.query.v1)
  console.log('this.$route.query.v2', this.$route.query.v2)
  console.log('this.$route.query.v2 == undefined', this.$route.query.v2 === undefined)
})
const addData = () => { 
  // state.recycleView
}
const moveToLast = () => {
  state.recycleList.moveToLast()
}
const moveToFirst = () => {
  state.recycleList.moveToFirst()
}
const update = (v) => {
  state.score = v
}
const onIndexClick = (item) => {
  console.log('---onIndexClick---', item)
  this.$refs[item][0].scrollIntoView({
    behavior: 'smooth'
  })
}
</script>

<style lang="scss">
.html-view {
  width: 100%;
  background-color: white;

  .list-view {
    .card {
      display: inline-block;
    }
  }

  .index {
    position: fixed;
    right: 17px;
    top: 40px;
    height: calc(100% - 40px);
  }
}
</style>

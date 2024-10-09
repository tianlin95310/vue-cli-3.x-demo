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

      <div class="card">
        <RecycleViewV2></RecycleViewV2>
      </div>

      <button class="button" @click="moveToLast">移动到末尾</button>
      <button class="button" @click="moveToFirst">移动到开头</button>
    
    </div>
    
  </div>
</template>
<script>
import TlIndexView from './html/TLIndexView.vue'
import TlRating from './html/TlRating.vue'
import TagSelect from './html/TagSelect'
import { ref, watch, reactive, toRefs } from 'vue'
import RecycleList from './html/RecycleList'
import RecycleViewV2 from './html/RecycleViewV2'

export default {
  name: 'HtmlView',
  components: {
    TlIndexView,
    TlRating,
    TagSelect,
    RecycleList,
    RecycleViewV2
  },
  setup() {
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
      v3: 'AAA'
    })
    watch(() => state.v1, (newV, oldV) => {
      console.log('watch v1', newV)
    })
    return {
      ...toRefs(state)
    }
  },
  created() {
    console.log('htmlView---', 'created')
  },
  activated() {
    console.log('this.$route.query', this.$route.query)
    console.log('this.$route.query.v1', this.$route.query.v1)
    console.log('this.$route.query.v2', this.$route.query.v2)
    console.log('this.$route.query.v2 == undefined', this.$route.query.v2 === undefined)
  },
  methods: {
    moveToLast() {
      this.$refs.recycleView.moveToLast()
    },
    moveToFirst() {
      this.$refs.recycleView.moveToFirst()
    },
    update(v) {
      this.score = v
    },
    onIndexClick(item) {
      console.log('---onIndexClick---', item)
      this.$refs[item][0].scrollIntoView({
        behavior: 'smooth'
      })
    }
  }
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

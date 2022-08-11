<template>
  <div class="page-container">
    <h1>{{ title }}</h1>
    <div v-for="(item, index) in listData" :key="index">{{ item.key }}</div>
  </div>
</template>

<script>
  import { onBeforeMount, onMounted, ref, reactive, toRefs } from 'vue'
  import { getListData } from '@/http/api'
  export default {
    name: 'CombineApi',
    setup(props, { emit, expose }) {
      const state = reactive({
        listData: [],
        title: ref('组合式API')
      })
      getListData().then(res => {
        console.log('setup getListData', res)
        state.listData = res
      })
      onMounted(() => {
        // this.listData = [{ key: 100 }, { key: 200 }]
        console.log('combineApi onMounted')
        state.listData = [{ key: 'onMounted' }]
      })
      onBeforeMount(() => {
        console.log('combineApi onBeforeMount')
        state.listData = [{ key: 'onBeforeMount' }]
      })
      return {
        ...toRefs(state)
      }
    }
  }
</script>

<style scoped>

</style>

<template>
  <div class="page-container">
    <h1>组合式API</h1>
    <div v-for="(item, index) in listData" :key="index">{{ item.key }}</div>
  </div>
</template>

<script>
  import { onBeforeMount, onMounted, ref } from 'vue'
  import { getListData } from '@/http/api'
  export default {
    name: 'CombineApi',
    setup() {
      const listData = ref([])
      getListData().then(res => {
        console.log('setup getListData', res)
        listData.value = res
      })
      onMounted(() => {
        // this.listData = [{ key: 100 }, { key: 200 }]
        console.log('combineApi onMounted')
        listData.value = [{ key: 'onMounted' }]
      })
      onBeforeMount(() => {
        console.log('combineApi onBeforeMount')
        listData.value = [{ key: 'onBeforeMount' }]
      })
      return {
        listData
      }
    }
  }
</script>

<style scoped>

</style>

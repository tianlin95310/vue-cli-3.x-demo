<template>
  <div class="page-container">
    <h1>{{ title }}</h1>
    <div v-for="(item, index) in listData" :key="index">{{ item.key }}</div>
    <div>
      d1 = {{ d1 }}
    </div>
    <div>
      d2 = {{ d2 }}
    </div>
    <div>
      d3 = {{ d3 }}-{{ d3.d31 }}-{{ d3.d32 }}
    </div>
    <div>
      d4 = {{ d4 }}
    </div>
    <div>
      d5 = {{ d5 }}--{{ d5.d31 }}--{{ d5.d32 }}
    </div>
    <div>
      props = {{ prop1 }} {{ prop2 }}
    </div>
    <div>
      ...d5 = {{ d31 }} {{ d32 }}
    </div>
  </div>
</template>

<script>
  /*eslint-disable*/
  import { onBeforeMount, onMounted, ref, reactive, toRefs, toRef, isReactive, isReadonly, isRef, isProxy, isRuntimeOnly } from 'vue'
  import { getListData } from '@/http/api'
  export default {
    name: 'CombineApi',
    props: {
      prop1: {
        type: String,
        default: '123'
      },
      prop2: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    setup(props, { emit, expose }) {
      const d1 = 111
      const d2 = ref(222)
      const d3 = reactive({
        d31: 31,
        d32: ref(32)
      })
      // 得到d31的ref对象，改变d3.d31会影响d4
      const d4 = toRef(d3, 'd31')
      d3.d31 = 100
      d3.d32 = 200

      const d5 = toRefs(d3)
      console.log('d1 isReactive =', isReactive(d1), 'isReadonly =', isReadonly(d1), 'isRef =', isRef(d1), 'isProxy =', isProxy(d1))
      console.log('d2 isReactive =', isReactive(d2), 'isReadonly =', isReadonly(d2), 'isRef =', isRef(d2), 'isProxy =', isProxy(d2))
      console.log('d3 isReactive =', isReactive(d3), 'isReadonly =', isReadonly(d3), 'isRef =', isRef(d3), 'isProxy =', isProxy(d3))
      console.log('d31 isReactive =', isReactive(d3.d31), 'isReadonly =', isReadonly(d3.d31), 'isRef =', isRef(d3.d31), 'isProxy =', isProxy(d3.d31))
      console.log('d32 isReactive =', isReactive(d3.d32), 'isReadonly =', isReadonly(d3.d32), 'isRef =', isRef(d3.d32), 'isProxy =', isProxy(d3.d32))
      console.log('d4 isReactive =', isReactive(d4), 'isReadonly =', isReadonly(d4), 'isRef =', isRef(d4), 'isProxy =', isProxy(d4))
      console.log('d5 isReactive =', isReactive(d5), 'isReadonly =', isReadonly(d5), 'isRef =', isRef(d5), 'isProxy =', isProxy(d5))
      console.log('d51 isReactive =', isReactive(d5.d31), 'isReadonly =', isReadonly(d5.d31), 'isRef =', isRef(d5.d31), 'isProxy =', isProxy(d5.d31))
      console.log('d52 isReactive =', isReactive(d5.d32), 'isReadonly =', isReadonly(d5.d32), 'isRef =', isRef(d5.d32), 'isProxy =', isProxy(d5.d32))
      console.log('props isReactive =', isReactive(props), 'isReadonly =', isReadonly(props), 'isRef =', isRef(props), 'isProxy =', isProxy(props))
      console.log('prop1 isReactive =', isReactive(props.prop1), 'isReadonly =', isReadonly(props.prop1), 'isRef =', isRef(props.prop1), 'isProxy =', isProxy(props.prop1))
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
        ...toRefs(state),
        d1, d2, d3, d4, d5,
        ...d5
      }
    }
  }
</script>

<style scoped>

</style>

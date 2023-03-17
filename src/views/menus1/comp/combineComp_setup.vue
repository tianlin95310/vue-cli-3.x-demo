<script setup>
  import { ref, reactive, toRefs, isRef, isReactive, isProxy } from 'vue'
  const state = reactive({
    name: 'CombineCompSetup',
    age: ref(22),
    height: 170
  })
  const nameV3 = ref('CombineCompSetup')

  const { name, age, height } = toRefs(state)

  // 用了reactive会自动解包
  const unp = reactive({ height })
  console.log('isProxy', isProxy(state), isProxy(state.name), isProxy(state.age), isProxy(name), isProxy(nameV3))
  console.log('isRef', isRef(state), isRef(state.name), isRef(state.age), isRef(name), isRef(nameV3))
  console.log('isReactive', isReactive(state), isReactive(state.name), isReactive(state.age), isReactive(name), isReactive(nameV3))
  console.log('isRef', isRef(height), isRef(state.height))
  const onNameClick = () => {
    console.log('onNameClick', state.name)
    // ref不会自动解包，返回顶层对象才会自动解包
    state.name += 'Y'
    name.value += 'X'
    age.value++
    unp.height++
    state.height++
    nameV3.value += 'X'
  }
</script>

<template>
  <div class="combine-comp-setup">
    <div>name: {{ name }} age: {{ age }} height: {{ height }}</div>
    <div @click="onNameClick">{{ nameV3 }}</div>
  </div>
</template>

<style>
.combine-comp-setup {
  background-color: gold
}
</style>

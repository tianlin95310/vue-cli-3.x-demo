<template>
  <t-l-collapse title="4,Vue技术的问题">
    <template v-slot:content>
      <pre>
        1，Vue2.0和Vue3.0为了实现响应式的区别和采用的api的区别
          .1 Vue2.0会遍历对象所有的属性，然后通过Object.defineProperty()来设置setter、getter，
          每个组件实例都有对应的观察者，对于数组的支持有限，如仅改变数组长度是无法监听到的
          .2 Vue3.x 使用代理Proxy实现响应式方案，Proxy 是在 ES6 中引入的，它使 Vue 3 避免了 Vue 早期版本中存在的一些响应性问题。
          Proxy 是一个对象，它包装了另一个对象，并允许你拦截对该对象的任何交互。我们这样使用它：new Proxy(target, handler)
      </pre>
    </template>
  </t-l-collapse>
</template>

<script>
  import TLCollapse from '@/components/TLCollapse.vue'
  export default {
    name: 'a4Vue',
    components: {
      TLCollapse
    }
  }
</script>

<style>
</style>

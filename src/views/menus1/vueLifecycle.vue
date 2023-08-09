<template>
  <div class="vue-life-cycle page-container">
    <h2>测试vue的生命周期方法，以及调用组件的方法</h2>
    <!-- <h3 style="margin: 16px 0;">{{ 1 | testFilter('111') }}</h3> -->
    <child/>
    <child3-x></child3-x>

    <div>
      <div>
        <button class="button" @click="show = !show">v-if与v-show</button>
      </div>
      <button class="button" v-if="show" title="v-if会直接删除，会不停的进行创建">v-if</button>
      <button class="button" v-show="show" title="v-show只是改变元素的display属性，不会删除">v-show</button>
    </div>
  </div>
</template>

<script>
  import child from './comp/childCompLife.vue'
  import child3X from './comp/childCompLife3.x.vue'
  import mixinOverride from '@/mixins/mixinOverride.js'

  /**
   * 组件的加载采用递归的模式
   */
  export default {
    data() {
      return {
        v1: 123,
        str: 'parent value',
        show: false
      }
    },
    mixins: [mixinOverride],
    components: {
      child,
      child3X
    },
    watch: {
      $route(newV, oldV) {
        console.log('watch $route', newV, oldV)
      }
    },
    methods: {
      funA() {
        console.log('fun A called: parent funA', 'str =', this.str)
      }
    },
    beforeCreate: function() {
      console.log('parent beforeCreate', 'v1 =', this.v1)
    },
    created() {
      console.log('parent created', 'v1 =', this.v1, 'str =', this.str)
      this.funA()
    },
    beforeMount() {
      console.log('parent beforeMount')
    },
    // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内
    mounted() {
      console.log('parent mounted')
      this.$nextTick(function() {
        console.log('parent mounted $nextTick')
      })
    },
    // 数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。
    beforeUpdate() {
      console.log('parent beforeUpdate')
    },
    updated() {
      console.log('parent updated')
    },
    // keep-alive 组件激活时调用,该钩子在服务器端渲染期间不被调用
    activated() {
      console.log('parent activated')
    },
    // keep-alive 组件停用时调用。该钩子在服务器端渲染期间不被调用。
    deactivated() {
      console.log('parent deactivated')
    },
    // 实例销毁之前调用。在这一步，实例仍然完全可用。
    beforeUnmount() {
      console.log('parent beforeUnmount')
    },
    unmounted() {
      console.log('parent destroyed')
    },
    errorCaptured() {
      console.log('parent errorCaptured')
      return false
    }
  }
</script>

<style lang="scss" scoped>
  .vue-life-cycle {
    width: 100%;

    div {
      margin-top: 16px;
    }
  }
</style>

<template>
  <t-l-collapse title="5,兼容性问题">
    <template v-slot:content>
      <pre>
        1，Doctype的作用
          严格模式：表示采用浏览器的最高编辑来排版
          混杂模式：表示浏览器向下兼容，支持老版本
        2，苹果的适配区域
          .1，刘海屏隔离，底部横线隔离
            @supports 隔离兼容样式，safe-area 顶部和底部的安全区域
          .2，苹果ios的软键盘淡出后页面上移，软键盘关闭后，页面不回弹，
            记录滚动距离，手动让他回单
          .3，ios滚动添加下fixed失效的问题
            采用类似于Android原生的布局方式，滚动控件自己滚动，不随body滚动

        4，移动端列表太长如何优化
          动态展示可显示区域的内容，不可见区域的内容不展示

        5，滑动穿透现象怎么解决
          给body添加fixed样式，使用js记录并还原滚动位置
      </pre>
    </template>
  </t-l-collapse>
</template>

<script>
  import TLCollapse from '@/components/TLCollapse.vue'
  export default {
    name: 'a5Compatible',
    components: {
      TLCollapse
    }
  }
</script>

<style>
</style>

<template>
  <t-l-collapse title="2,css问题">
    <template v-slot:content>
      <pre>
        1，IFrame的缺点
          加载会阻塞主线程onload时间，影响页面加载速度，切不利于<span class="highlight">SEO</span>
        2，防抖和节流本质是不一样的。防抖是将多次执行变为最后一次执行，节流是将多次执行变成每隔一段时间执行。
          .1 防抖(debounce):
          防抖触发高频率事件时n秒后只会执行一次,如果n秒内再次触发,则会重新计算。
          概述:每次触发时都会取消之前的延时调用。
          ,2 节流(thorttle):
          高频事件触发,每次触发事件时设置一个延迟调用方法，并且取消之前的延时调用方法。
          概述:每次触发事件时都会判断是否等待执行的延时函数。
          区别:降低回调执行频率,节省计算资源。
          函数防抖一定时间连续触发的事件,只在最后执行一次,而函数节流一段时间内只执行一次。
        3，重排与重绘，CSS哪些属性会引起重排
          .1 介绍
          当改变元素的尺寸和位置时，会重新触发样式计算-布局-绘制和所有其他流程，称之为重排
          当只改变原色颜色类属性时，会触发样式计算-绘制，称之为重绘
          重排和重绘都会占用JS主线程，和JS主线程抢占时间
          dom解析-css解析（样式计算）-布局-绘制是浏览器运行的方式
        .2 触发因素
          首次渲染
          浏览器-resize
          元素的位置和尺寸变化
          可见元素的增删
          内容发生变化
          字体font发生变化
          伪类激活
        .3 优化
          transform 属性不会重排与重绘
        .4 具体实现
          transform代替top等位移
          使用visiable代替display： none
          避免使用table布局
          尽可能在dom树的末端改变class
          写元素时style，class遵循一定的顺序
     </pre>
    </template>
  </t-l-collapse>
</template>

<script>
  import TLCollapse from '@/components/TLCollapse.vue'
  export default {
    name: 'a2Css',
    components: {
      TLCollapse
    }
  }
</script>

<style>
</style>

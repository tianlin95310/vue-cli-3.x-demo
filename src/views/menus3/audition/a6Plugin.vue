<template>
  <t-l-collapse title="6,插件和项目优化">
    <template v-slot:content>
      <pre>
        1，前端优化？
          减少http请求数量，请求资源压缩，页面懒加载，资源懒加载
          预解析DNS，CND分发，减少域名数
          Http资源缓存，大数据本地缓存
          JS/Css（属性编写顺序，尽量好用行内样式，少用行内变量）优化，服务器端渲染，减少页面重排重绘

        2，SSR和CSR 概念？
          SSR(Server Side Rendering) ：传统的渲染方式，由服务端把渲染的完整的页面吐给客户端。这样减少了一次客户端到服务端的一次http请求，
          加快相应速度，一般用于首屏的性能优化，拥有更高的核心Web指标分，能更好的SEO，统一的开发语言。
          CSR(Client Side Rendering)：是一种目前流行的渲染方式，它依赖的是运行在客户端的JS，用户首次发送请求只能得到小部分的指引性HTML代码。
          第二次请求将会请求更多包含HTML字符串的JS文件。
          简而言之，就是数据拼接HTML字符串这件事放在服务端还是客户端造成了两者区别。

          两者有何不同
          服务器端渲染的优势在于首屏渲染速度块，简单来讲它不需要来回多次往返于客户端和服务端。但是其性能等众多因素会影响用户体验，
          比如说：网速，在线活跃人数，服务器的物理位置等等。而客户端渲染则和服务端渲染相反，因为多次和服务器的交互导致首屏加载速度慢。
          但一旦这些请求完成之后，用户和页面之间的交互时用户体验就会好很多。用一个现实生活的例子来看：假如从超市买东西吃，
          以SSR的角度来看，你每次在超市买完随即吃完再走，每次饿了都需要出发去超市。而从CSR的角度来看，就是你从超市购买许多原材料
          拿回家去自己煮，多了能放冰箱，这样每次肚子饿了就不需要每次都往超市跑，唯一麻烦一点在于你得花时间挑选食材。
          简而言之，SSR强在首屏渲染。而CSR强在用户和页面多交互的场景。

        3，babel的功能
          .1语法转换
          .2对目标环境进行polyfill
          .3代码替换
          .4按需引入
          @babel/preset-env 按需引入
          babel 内包括了Webpack

        4，webpack的功能
          .1提供页面入口
          .2代码热更新
          .3本地开发提供跨域代理
          .4翻译ES6以上代码到ES5
          .5资源压缩
          .6静态资源服务
          .7最重要的一条就是代码装换

        5，Webpack分包配置

        6，Nuxt.js
          主要是用作服务端渲染SSR的
      </pre>
    </template>
  </t-l-collapse>

</template>

<script>
  import TLCollapse from '@/components/TLCollapse.vue'
  export default {
    name: 'a6Plugin',
    components: {
      TLCollapse
    }
  }
</script>

<style>
</style>

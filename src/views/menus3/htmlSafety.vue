<template>
  <div class="page-container">
<!--    脚本注入安全，对用户输入的内容进行渲染的控件需要特别注意，输入的内容需要进行脚本转义-->
    <!--  javascript:alert(#command#)-->
    <!--  可以注入在浏览器输入框-->
    <!--  https://www.jb51.net/article/92639.htm-->
    <form id="form" name="form">
      <input id="input" name="input" value="<script>alert(“Attack!”)</script>">
      <div class="buttons">
        <button type="reset">重置</button>
        <button type="submit">提交</button>
        <button id="button" type="button">操作1</button>
      </div>
    </form>
    <div v-html="html" style="width: 200px;height: 200px;background: #42b983"></div>
    <div>
      <span>用户输入的内容：</span>
      <input v-model="html" style="width: 80%">
    </div>

    <p id="p" name="p">i am a p element</p>
    <h2>网络安全建议</h2>

    <pre style="line-height: 1.3;">
      1，安全性问题？
        .1 XSS 攻击: 注入恶意代码
          cookie 设置 httpOnly
          转义页面上的输入内容和输出内容
        .2 CSRF : 跨站请求伪造，防护:
          et 不修改数据
          不被第三方网站访问到用户的 cookie
          设置白名单，不被第三方网站请求
          请求校验

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

      4, SSR和CSR 概念
        SSR(Server Side Rendering) ：传统的渲染方式，由服务端把渲染的完整的页面吐给客户端。这样减少了一次客户端到服务端的一次http请求，加快相应速度，一般用于首屏的性能优化。
        CSR(Client Side Rendering)：是一种目前流行的渲染方式，它依赖的是运行在客户端的JS，用户首次发送请求只能得到小部分的指引性HTML代码。第二次请求将会请求更多包含HTML字符串的JS文件。
        简而言之，就是数据拼接HTML字符串这件事放在服务端还是客户端造成了两者区别。
        两者有何不同
        服务器端渲染的优势在于首屏渲染速度块，简单来讲它不需要来回多次往返于客户端和服务端。但是其性能等众多因素会影响用户体验，比如说：网速，在线活跃人数，服务器的物理位置等等。而客户端渲染则和服务端渲染相反，因为多次和服务器的交互导致首屏加载速度慢。但一旦这些请求完成之后，用户和页面之间的交互时用户体验就会好很多。
        用一个现实生活的例子来看：假如从超市买东西吃，以SSR的角度来看，你每次在超市买完随即吃完再走，每次饿了都需要出发去超市。而从CSR的角度来看，就是你从超市购买许多原材料再拿回家去自己煮，多了能放冰箱，这样每次肚子饿了就不需要每次都往超市跑，唯一麻烦一点在于你得花时间挑选食材。
        简而言之，SSR强在首屏渲染。而CSR强在用户和页面多交互的场景。

      5，移动端列表太长如何优化
        动态展示可显示区域的内容，不可见区域的内容不展示

      6，普通函数和箭头函数的区别
        普通函数的this指向对象本省，可以作为构造函数，箭头函数都是匿名函数，不能作为构造函数
      7，Promise的静态方法
        见标签Promise的使用
      8，观察者模式和发布订阅模式
        被关注的对象的属性发生变化后，通过发送通知给到所有的订阅者，订阅者就能所处相应
      9，宏任务和微任务以及Promise
        setTimeout,setInter属于宏任务，Promise的构造阶段属于主线程同步快，then的处理属于微任务
        主线程同步代码 > 微任务 > 宏任务
      10，苹果的适配区域
        @supports 隔离兼容样式，safe-area 顶部和底部的安全区域
      10.1，苹果ios的软键盘淡出后页面上移，软键盘关闭后，页面不回弹，
        记录滚动距离，手动让他回单
      10.2，ios滚动添加下fixed失效的问题
        采用类似于Android原生的布局方式，滚动控件自己滚动，不随body滚动

      11，Map与Object的区别
        Object的key必须是简单类型，而Map的key可以为对象，所以Map不支持json而Object可以
        Map的key，Value添加时有顺序的，而Object则没有这个说法，
        属性删除较密集的时候使用Map，delete Object属性的效率低
        属性多Map的性能更好，特别是key未知的情况下，Map又方便的遍历迭代器API
      12，Object的静态方法
        Object.freeze(obj)可以冻结对象的，防止对象的值被修改如果是大数据量的数据，对于纯展示的大量数据，可以提高效率
        Object.entries() 产生迭代器，方便遍历
        Object.keys() 产生迭代器，方便遍历

      13，Vue2.0和Vue3.0为了实现响应式的区别和采用的api的区别
        .1 Vue2.0会遍历对象所有的属性，然后通过Object.defineProperty()来设置setter、getter，每个组件实例都有对应的观察者，对于数组的支持有限，如仅改变数组长度是无法监听到的
        .2 Vue3.x 使用代理Proxy实现响应式方案，Proxy 是在 ES6 中引入的，它使 Vue 3 避免了 Vue 早期版本中存在的一些响应性问题。那看起来灵敏，不过，需要一些 Proxy 的知识才能理解！
          所以让我们深入了解一下。有很多关于 Proxy 的文档，但你真正需要知道的是，Proxy 是一个对象，它包装了另一个对象，并允许你拦截对该对象的任何交互。我们这样使用它：new Proxy(target, handler)

      14，Symbol类的使用
        Symbol用作来解决Object字符串作为可能出现重复而覆盖的问题，Symbol可以作为Object的key
      15，js单例模式的实现
        1，使用闭包直接添加方法属性
        2，使用class添加静态方法
        详见函数界面
      16，Nuxt.js
        主要是用作服务端渲染SSR的
      17，babel的功能
        .1语法转换
        .2对目标环境进行polyfill
        .3代码替换
        .4按需引入
        @babel/preset-env 按需引入
        babel 内包括了Webpack
      18，webpack的功能
        .1提供页面入口
        .2代码热更新
        .3本地开发提供跨域代理
        .4翻译ES6以上代码到ES5
        .5资源压缩
        .6静态资源服务
        .7最重要的一条就是代码装换
      19，Webpack分包配置

      20，滑动穿透现象怎么解决
        给body添加fixed样式，使用js记录并还原滚动位置
      21，TS里的一些东西

    </pre>
  </div>

</template>

<script>
  window.onload = function() {
    document.getElementById('button').onclick = function() {
      console.log('button')
    }
  }
  export default {
    name: 'HtmlSafety',
    data() {
      return {
        html: '<form id="test"></form><button form="test" class="button" formaction="javascript:alert(document.getElementById(\'p\').innerHTML = document.cookie)">用户注入的脚本</button>'
      }
    }
  }
</script>

<style scoped>

.buttons {
}
button {
  margin: 16px;
}
</style>

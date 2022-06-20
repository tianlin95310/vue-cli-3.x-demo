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
    <pre>
10、安全性问题？
  XSS 攻击: 注⼊恶意代码
  cookie 设置 httpOnly
  转义页⾯上的输⼊内容和输出内容
  CSRF : 跨站请求伪造，防护:
  et 不修改数据
  不被第三⽅⽹站访问到⽤户的 cookie
  设置⽩名单，不被第三⽅⽹站请求
  请求校验

11,防抖和节流本质是不一样的。防抖是将多次执行变为最后一次执行，节流是将多次执行变成每隔一段时间执行。
  防抖(debounce):
  防抖触发高频率事件时n秒后只会执行一次,如果n秒内再次触发,则会重新计算。
  概述:每次触发时都会取消之前的延时调用。

  节流(thorttle):
  高频事件触发,每次触发事件时设置一个延迟调用方法，并且取消之前的延时调用方法。
  概述:每次触发事件时都会判断是否等待执行的延时函数。
  区别:降低回调执行频率,节省计算资源。
  函数防抖一定时间连续触发的事件,只在最后执行一次,而函数节流一段时间内只执行一次。
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

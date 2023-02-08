<template>
  <!--    脚本注入安全，对用户输入的内容进行渲染的控件需要特别注意，输入的内容需要进行脚本转义-->
  <!--  javascript:alert(#command#)-->
  <!--  可以注入在浏览器输入框-->
  <!--  https://www.jb51.net/article/92639.htm-->
  <t-l-collapse title="1,安全性问题">
    <template v-slot:content>
      <pre>
        1，安全性问题？
          1.1 XSS 攻击: 注入恶意代码
            cookie http请求头设置httpOnly
            转义页面上的输入内容和输出内容
          1.2 CSRF : 跨站请求伪造，防护:
            不修改数据
            不被第三方网站访问到用户的cookie
            设置白名单，不被第三方网站请求
            请求校验
          <div class="safe-test">
            <div v-html="html" style="width: 200px;height: 100px;background: #42b983" title="通过注入脚本读取隐私信息"></div>
            <p id="p"></p>
            <div><span>输入的脚本内容：</span><input v-model="html" style="width: 88%;font-size: 11px;"></div>
          </div>

        2，HTTPS和http协议的区别？
          HTTPS通过SSL实现了传输层加密，能防止被中间人篡改数据传输，但是HTTPS的性能要求更高。
          三次握手的作用
          1，S端可以确认收到报文
          2，C端可以收到S端的报文，并能确认S端能收到自己的报文
          3，S端确认C端可以收到自己的报文

        3，开源框架的LICENSE安全性问题？
          MIT协议
          GPL协议
          ISC协议

        4，cookie和session的区别？
          cookie存储在浏览器客户端，不安全，考虑到可以使用session，session存储在服务器，但是
          量大时会影响服务器性能，cookie的大小限制在4k

        5，常见错误码？
          100 客户端应继续其请求
          200 请求成功
          204 请求成功，但是没有返回内容
          205 重置内容，客户端应重置页面内容
          300 请求的资源包含多个位置
          301 请求的内容被移动
          304 缓存命中
          400 错误请求
          401 未授权的请求
          402 保留，将来使用
          403 禁止访问
          404 服务器没有找到对应的请求资源
          405 请求方式不支持
          500 服务器内部错误
          502 网关错误
          503 暂时无法访问
          504 网关超时

        6，http缓存策略
          协商缓存：浏览器发出请求，有缓存且没有过期直接读取，没有缓存时查看Etag，有的话向服务器询问If-none-match，没
          有的话查看Last-modified,如果是的话向服务器咨询If-modified-since，服务器决定是返回200还是304，Last-modified否
          的话请求Web服务器获取资源。
          强缓存：根据cache-control和Expire控制
     </pre>
    </template>
  </t-l-collapse>
</template>

<script>
  import TLCollapse from '@/components/TLCollapse.vue'
  export default {
    name: 'a1Safe',
    components: {
      TLCollapse
    },
    data() {
      return {
        html: '<form id="test"></form><button form="test" class="button" formaction="javascript:alert(document.getElementById(\'p\').innerHTML = document.cookie)">用户注入的脚本</button>'
      }
    }
  }
</script>

<style>
  .safe-test {
    background: yellow;
    white-space: nowrap;
  }
  button {
    margin: 16px;
  }
</style>

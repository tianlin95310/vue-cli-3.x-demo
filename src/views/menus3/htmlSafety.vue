<template>
  <div class="page-container">
    <component v-for="(comp, index) in comps" v-bind:is="comp" :key="index"></component>

    <div class="safe-test">
      <!--    脚本注入安全，对用户输入的内容进行渲染的控件需要特别注意，输入的内容需要进行脚本转义-->
      <!--  javascript:alert(#command#)-->
      <!--  可以注入在浏览器输入框-->
      <!--  https://www.jb51.net/article/92639.htm-->
      <form id="form" name="form" title="表单注入,按钮默认拦截">
        <input id="input" name="input" style="width: 70%;" value="<script>alert(“Attack!”)</script>">
        <div class="buttons">
          <button class="button" type="reset">重置</button>
          <button class="button" type="submit">提交</button>
          <button class="button" id="button" type="button">操作1</button>
        </div>
      </form>
      <div v-html="html" style="width: 200px;height: 100px;background: #42b983" title="通过注入脚本读取隐私信息">
      </div>
       <p id="p"></p>
      <div>
        <span>输入的脚本内容：</span>
        <input v-model="html" style="width: 88%">
      </div>
    </div>
  </div>

</template>

<script>
  import TLCollapse from '@/components/TLCollapse.vue'
  import comps from './audition'
  window.onload = function() {
    document.getElementById('button').onclick = function() {
      console.log('button')
    }
  }
  export default {
    name: 'HtmlSafety',
    data() {
      return {
        comps: ['a1Safe', 'a2Css', 'a3JS', 'a4Vue', 'a5Compatible', 'a6Plugin', 'a7SoftEng'],
        html: '<form id="test"></form><button form="test" class="button" formaction="javascript:alert(document.getElementById(\'p\').innerHTML = document.cookie)">用户注入的脚本</button>'
      }
    },
    components: {
      TLCollapse,
      ...comps
    }
  }
</script>

<style scoped>
  .buttons {
  }
  .safe-test {
    background: yellow;
  }
  button {
    margin: 16px;
  }
</style>

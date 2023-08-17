<template>
  <div class="dashboard page-container">
    <h2>测试下载文件</h2>
    <a class="download-a" href="/apk/app-dev-debug.apk" download="app-dev-debug.apk">下载public文件夹二进制文件</a>

    <a class="download-a" :href="href1" download="logo.png">下载assets文件下图片</a>

    <div class="todo">
      <h4>待研究问题</h4>
      <h5>1，服务端渲染-SSR和SSG</h5>
      <h5>2，ts的使用，代码测试</h5>
      <h5>3，react和react的状态管理</h5>
      <h5><ALink href="https://blog.csdn.net/m0_54854484/article/details/125009694" title="4，数据结构和算法"></ALink></h5>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        href1: require('@/assets/logo.png')
      }
    },
    mounted() {
      console.log(process.env.NODE_ENV)
      console.log(process.env.VUE_APP_BASE_URL)
    }
  }
</script>
<style lang="scss" scoped>
.dashboard {
  .todo {
    background-color: antiquewhite;
    text-align: center;
    padding: 16px;
  }
}
</style>

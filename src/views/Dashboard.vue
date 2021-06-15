<template>
  <div class="dashboard">
    <h1>This is an dashboard page</h1>
    <h2>测试下载文件</h2>
    <a href="/apk/app-dev-debug.apk" download="app-dev-debug.apk">下载</a>
  </div>
</template>
<script>
  export default {
    data() {},
    mounted() {
      console.log(process.env.NODE_ENV)
      console.log(process.env.VUE_APP_BASE_URL)
    }
  }
</script>

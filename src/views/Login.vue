<template>
  <div class="login">
    <div class="login-b">
      <button class="button" @click="login">登录</button>
    </div>
  </div>
</template>

<script>
  import { setToken } from '@/cookies/Cookies.js'
  export default {
    methods: {
      login() {
        setToken('DE112334343242342341123123123')
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped lang="scss">
  .login {
    width: 100%;
    position: relative;
    height: 100vh;
    .login-b {
      width: 200px;
      height: 200px;
      left: calc(50% - 100px);
      top: calc(50% - 100px);
      position: absolute;
      background-color: #34465C;
      text-align: center;
      border-radius: 16px;

      button {
        margin-top: 70px;
        width: 80px;
        height: 40px;
      }
    }
  }
</style>

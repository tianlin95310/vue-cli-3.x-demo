<template>
  <div class="main-content">
    <div class='header'>
      <img :class="['icon-item', isShow ? 'menu-show' : 'menu']" src="@/assets/svg/ic_collapse.svg" @click="collapse">
      <img class="icon-item wind-mill" src="@/assets/svg/test_svg.svg" title="莫挨老子" @click="logout">
    </div>
    <div class="route-content">
      <router-view :key="key" />
    </div>
  </div>
</template>

<script>
  import {
    removeToken
  } from '@/cookies/Cookies.js'
  export default {
    props: {
      key: {
        type: String,
        default: '/'
      }
    },
    data() {
      return {
        isShow: true
      }
    },
    methods: {
      logout() {
        removeToken()
        this.$router.push('/login')
      },
      collapse() {
        this.isShow = !this.isShow
        this.$emit('collapse', this.isShow)
      }
    }
  }
</script>

<style lang="scss">
  @keyframes rotateAll {
    0% {
      transform: rotate(deg)
    }

    100% {
      transform: rotate(360deg)
    }
  }

  .main-content {
    overflow-x: hidden;

    .route-content {
      width: 100%;
      padding: 16px;
      height: calc(100% - 40px);
      background-color: #F5F5F5;
    }

    .header {
      padding: 0 16px;
      height: 40px;
      line-height: 40px;
      background-color: #6f7a84;
      color: white;

      .wind-mill {
        float: right;
        margin: 8px 16px !important;
        /*linear匀速，可防止出现停顿的问题*/
        animation: rotateAll 1s linear 0s both infinite;
      }

      .wind-mill:hover {
        float: right;
        margin: 7px 15px !important;
        animation: none;
        /*linear匀速，可防止出现停顿的问题*/
        // animation: rotateAll 1s linear 0s both infinite;
      }

      .icon-item {
        margin: 8px 0;
        width: 24px;
        height: 24px;
        cursor: pointer;
        transition: 0.5s all;
      }

      .menu {
        transform: rotate(-90deg);
      }

      .menu-show {
        transform: rotate(-180deg);

      }
    }
  }
</style>

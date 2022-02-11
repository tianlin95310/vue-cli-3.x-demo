<template>
  <div id="main-content" class="main-content">
    <div class='header'>
      <div class="head-content">
        <img :class="['icon-item-icon', isShow ? 'menu-show' : 'menu']" src="@/assets/svg/ic_collapse.svg" @click="collapse">
        <div class="right-icon">
          <div class="icon-item">{{username}}</div>
          <img class="icon-item-icon wind-mill" src="@/assets/svg/test_svg.svg" title="莫挨老子" @click="logout">
        </div>
      </div>
    </div>
    <router-view v-slot="{ Component}" class="route-content scroll-bar" >
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="['CanvasView', 'HtmlView']">
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script>
  import {
    removeToken
  } from '@/cookies/Cookies.js'
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        isShow: true
      }
    },
    computed: {
      ...mapGetters([
        'username',
        'cachedViews'
      ])
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
  /* fade-transform */
  .fade-transform-leave-active,
  .fade-transform-enter-active {
    transition: all .3s;
  }

  .fade-transform-enter {
    opacity: 0;
    transform: translateX(-30px);
  }

  .fade-transform-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
  @keyframes rotateAll {
    0% {
      transform: rotate(0deg)
    }

    100% {
      transform: rotate(360deg)
    }
  }

  .main-content {
    overflow-x: hidden;
    position: relative;
     .route-content {
       width: 100%;
       margin-top: 40px;
       height: calc(100% - 40px);
       overflow-x: hidden;
       overflow-y: auto;
     }
    .header {
      position: fixed;
      left: 0;
      height: 40px;
      width: 100%;
      background-color: #545C64;
      z-index: 100;
      color: white;
      .head-content {
        position: relative;
        height: 100%;
        width: 100%;
        line-height: 40px;
        .icon-item {
          display: inline-block;
          width: 40px;
          height: 40px;
          line-height: 40px;
          cursor: pointer;
          transition: 0.5s all;
          vertical-align: top;
        }
        .icon-item-icon {
          display: inline-block;
          width: 26px;
          height: 26px;
          cursor: pointer;
          margin-top: 7px;
          transition: 0.5s all;
        }
        .menu {
          transform: rotate(-90deg);
          float: left;
          margin-left: 12vw;
        }
        .menu-show {
          float: left;
          margin-left: 18vw;
          transform: rotate(-180deg);
        }
        .right-icon {
          float: right;
          height: 100%;
          line-height: 40px;
          .wind-mill {
            margin: 8px 16px !important;
            animation: rotateAll 1s linear 0s both infinite;
          }
          .wind-mill:hover {
            margin: 7px 15px !important;
            animation: none;
          }
        }
      }
    }
  }
</style>

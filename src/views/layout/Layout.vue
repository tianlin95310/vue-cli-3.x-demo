<template>
  <div class="home">
    <transition name="fade" mode="out-in">
      <div v-if="!isPc && isShow" class="nav-mask" @click="$refs.content.collapse()" />
    </transition>
    <div :class="['nav-div', isPc ? '' : 'is-mobile']" :style="{ width: navWidth, left: navLeft }">
      <div class="logo" @click="$router.push('/dashboard'); $refs.content.collapse()">
        <div>{{ tip1 }}</div>
      </div>
      <ul class="nav-con scroll-bar-menus">
        <li v-for="(menu, index) in menus" :key="index" class="menu-item">
          <div class="menu-item-title" @click="show(menu)" :title="menu.menuTitle">
            <span :class="[menu.isOpen ? 'menu-selected' : '']">[{{ index + 1 }}] {{ menu.menuTitle }}</span>
            <span :class="['fa', menu.isOpen ? 'fa-open' : 'fa-close']">﹀</span>
          </div>

          <ul class="sub-menu-ul">
            <li v-for="(subMenu, index) in menu.subMenus" :key="index"
              :class="['menu-item-common', menu.isOpen ? 'sub-menu-item-open' : 'sub-menu-item-close', subMenu.isOpen ? 'menu-selected' : '']"
              @click="onNavClick(subMenu)" :title="subMenu.menuTitle">
              {{ subMenu.menuTitle }}
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <Content ref="content" :style="{ paddingLeft: contentPaddingLeft }" class="level1-route" @collapse="collapse" />
  </div>

</template>

<script>
import Content from './Content.vue'
import { MENUS } from './menus'
import { onMounted, ref, getCurrentInstance } from 'vue'
import device from '../../utils/Device.js'
let CONTEXT = null
// @ is an alias to /src
export default {
  name: 'Layout',
  components: {
    Content
  },
  setup(props, context) {
    console.log('Layout---', props, 'context =', context)
    CONTEXT = getCurrentInstance()
    console.log('CONTEXT', CONTEXT)

    onMounted(() => {
      console.log('CONTEXT.$refs.content', CONTEXT.refs.content)
    })
    const menus = ref([])
    menus.value = MENUS
    const menuPath = ref('')
    const isPc = device.IsPC()
    const navWidth = ref('18vw')
    const navLeft = ref('-60vw')
    const contentPaddingLeft = ref('18vw')
    if (isPc) {
      navWidth.value = '18vw'
      navLeft.value = '0'
      contentPaddingLeft.value = '18vw'
    } else {
      navWidth.value = '60vw'
      navLeft.value = '-60vw'
      contentPaddingLeft.value = '0'
    }

    return {
      tip1: 'Vue3.x Demo @TianLin',
      tip2: 'v3.x采用setup返回data, 仍然可以使用data, 但不可同时使用',
      menus,
      navWidth,
      menuPath,
      navLeft,
      contentPaddingLeft,
      isShow: isPc ? ref(true) : ref(false),
      isPc: isPc
    }
  },
  mounted() {
    console.log('Layout mounted')
    this.menuPath = this.$route.path
    this.updateFlag()
  },
  methods: {
    updateDir() {
      this.menus.forEach((menu) => {
        if (this.menuPath === menu.path) {
          menu.isOpen = !menu.isOpen
        }
      })
    },
    updateFlag() {
      console.log('this.menuPath', this.menuPath)
      this.menus.forEach((menu) => {
        menu.subMenus.forEach((subMenu) => {
          if (this.menuPath === subMenu.path) {
            subMenu.isOpen = true
            menu.isOpen = true
          } else {
            subMenu.isOpen = false
          }
        })
      })
    },
    collapse(isShow) {
      this.isShow = isShow
      if (this.isPc) {
        if (isShow) {
          this.navWidth = '18vw'
          this.navLeft = '0'
          this.contentPaddingLeft = '18vw'
        } else {
          this.navWidth = '12vw'
          this.navLeft = '0'
          this.contentPaddingLeft = '12vw'
        }
      } else {
        if (isShow) {
          this.navWidth = '60vw'
          this.navLeft = '0'
          this.contentPaddingLeft = '0'
        } else {
          this.navWidth = '60vw'
          this.navLeft = '-60vw'
          this.contentPaddingLeft = '0'
        }
      }
    },
    onNavClick(obj) {
      console.log('onNavClick', obj)
      if (obj.path && obj.path !== '') {
        this.$router.push(obj.path)
      }
      this.menuPath = obj.path
      this.updateFlag()
      if (!this.isPc) {
        this.$refs.content.collapse()
      }
    },
    show(menu) {
      this.menuPath = menu.path
      this.updateDir()
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/css/anim.css";

.home {
  width: 100%;
  height: 100vh;

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter-from {
    opacity: 0;
  }

  .fade-leave-to {
    opacity: 0;
  }

  .level1-route {
    width: 100%;
    height: 100%;
    position: absolute;
    transition: padding-left 0.5s ease;
  }

  .nav-mask {
    z-index: 200;
    transition: opacity 0.3s ease;
    background: rgba(12, 12, 12, 0.5);
    top: 0;
    position: fixed;
    width: 100vw;
    height: 100vh;
  }

  .is-mobile {
    position: fixed;
  }

  .nav-div {
    height: 100%;
    position: fixed;
    z-index: 201;
    transition: all 0.5s ease;
    background-color: white;

    .logo {
      height: 40px;
      font-size: 14px;
      text-align: center;
      color: white;
      line-height: 40px;
      background-color: #545C64;
      border-bottom: 1px solid grey;
      cursor: pointer;
    }

    .nav-con {
      overflow-y: auto;
      overflow-x: hidden;
      height: calc(100% - 40px);
      border-right: 1px solid whitesmoke;

      .menu-item {

        .sub-menu-ul {}

        .menu-item-common {
          cursor: pointer;
          padding-left: 16px;
          line-height: 40px;
          transition: all 0.3s ease;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 0.9rem;
        }

        .menu-item-common:hover {
          background-color: gainsboro;
          font-size: .91rem;
        }

        .sub-menu-item-open {
          height: 40px;
          background-color: white;
        }

        /*对于li元素高度为0是，如果文字还是出现并且重叠时，说明是overflow为可见时，这时需要将隐藏*/
        .sub-menu-item-close {
          height: 0px;
        }

        .menu-selected {
          color: #42b983;
        }

        .menu-item-title {
          display: block;
          height: 40px;
          line-height: 40px;
          padding-left: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .menu-item-title:hover {
          background-color: gainsboro;
        }

      }
    }
  }
}

.fa {
  float: right;
  margin-right: 8px;
  line-height: 40px;
  transition: all 0.3s ease-in;
  transform-origin: center center;
}

.fa-open {
  transform: rotate(0deg) scale(0.9)
}

.fa-close {
  transform: rotate(-90deg) scale(0.8);
}
</style>

<template>
  <div class="home">
    <div class="nav-div" :style="{width: navWidth}">
      <div class="logo" @click="$router.push('/dashboard')">
        <div>{{ tip1 }}</div>
      </div>
      <ul class="nav scroll-bar-menus">
        <li v-for="(menu, index) in menus" :key="index" class="menu-item">
          <div class="menu-item-title" @click="show(menu)">
            <span>[{{index + 1}}] {{ menu.menuTitle }}</span>
            <span :class="['fa', menu.isOpen ? 'fa-open' : 'fa-close']">﹀</span>
          </div>

          <ul class="sub-menu-ul">
            <li v-for="(subMenu, index) in menu.subMenus" :key="index"
              :class="['menu-item-common', menu.isOpen ? 'sub-menu-item-open' : 'sub-menu-item-close', subMenu.isOpen ? 'child-opend' : '']"
              @click="onNavClick(subMenu)">
              {{ subMenu.menuTitle }}
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <content :style="{paddingLeft: navWidth}" class="level1-route" @collapse="collapse"/>
  </div>

</template>

<script>
  /*eslint-disable*/
  import Content from './Content.vue'
  import { MENUS } from './menus'
  import { onMounted, ref } from "vue"
  // @ is an alias to /src
  export default {
    name: 'Layout',
    components: {
      Content
    },
    setup(props, context) {
      console.log('Layout---', props, context)
      onMounted(() => {
        console.log('Layout onMounted')
      })
      const menus = ref([])
      const navWidth = ref('18vw')
      const menuPath = ref('')
      menus.value = MENUS
      return {
        tip1: 'Vue3.x Demo @TianLin',
        tip2: 'v3.x采用setup返回data, 仍然可以使用data, 但不可同时使用',
        menus,
        navWidth,
        menuPath
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
              subMenu['isOpen'] = true
              menu.isOpen = true
            } else {
              subMenu['isOpen'] = false
            }
          })
        })
      },
      collapse(isShow) {
        if (isShow) {
          this.navWidth = '18vw'
        } else {
          this.navWidth = '12vw'
        }
      },
      onNavClick(obj) {
        console.log('onNavClick', obj)
        if (obj.path && obj.path !== '') {
          this.$router.push(obj.path)
        }
        this.menuPath = obj.path
        this.updateFlag()
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

    .level1-route {
      width: 100%;
      height: 100%;
      position: absolute;
      transition: padding-left 0.5s ease;
    }
    .nav-div {
      width: 18vw;
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
      .nav {
        overflow-y: auto;
        overflow-x: hidden;
        height: calc(100% - 40px);
        border-right: 1px solid whitesmoke;

        .menu-item {

          .sub-menu-ul {

          }
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
          .child-opend {
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
    transition: all 0.5s;
  }

  .fa-open {
    transform: rotate(0deg) scale(1)
  }

  .fa-close {
    transform: rotate(-90deg) scale(0.8);
  }
</style>

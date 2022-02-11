<template>
  <div class="home">
    <div class="nav-div" :style="{width: navWidth}">
      <div class="logo">
        <div>{{ tip1 }}</div>
        <div>{{ tip2 }}</div>
      </div>
      <ul class="nav scroll-bar">
        <li v-for="(menu, index) in menus" :key="index" class="menu-item">
          <div :class="['menu-item-title', menu.isOpen ? 'opend' : '']" @click="show(menu)">
            <span>[{{index + 1}}] {{ menu.menuTitle }}</span>
            <i :class="['fa', 'fa-chevron-down', menu.isOpen ? 'fa-open' : 'fa-close']"></i>
          </div>

          <ul :class="[menu.isOpen ? 'sub-menu-open' : 'sub-menu-close']">
            <li v-for="(subMenu, index) in menu.subMenus" :key="index"
              :class="['menu-item-common', menu.isOpen ? 'sub-menu-item-open' : 'sub-menu-item-close', subMenu.isOpen ? 'opend' : '']"
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
        tip1: 'vue3.x仍然可以使用data',
        tip2: 'v3.x采用setup返回data',
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
      background-color: #545C64;

      .logo {
        height: 60px;
        font-size: 14px;
        text-align: center;
        color: white;
        line-height: 30px;
        background-color: #545C64;
        border-bottom: 1px solid grey;
      }
      .nav {
        overflow-y: auto;
        overflow-x: hidden;
        height: calc(100% - 60px);

        .menu-item {
          color: white;

          .menu-item-common {
            cursor: pointer;
            padding-left: 16px;
            line-height: 40px;
            transition: all 0.5s ease;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis
          }

          .menu-item-common:hover {
            background-color: #434A50;
          }

          .sub-menu-item-open {
            height: 40px;
            background-color: #6f7a84;
          }

          /*对于li元素高度为0是，如果文字还是出现并且重叠时，说明是overflow为可见时，这时需要将隐藏*/
          .sub-menu-item-close {
            height: 0px;
          }

          .opend {
            background-color: #434A50;
          }

          .menu-item-title {
            display: block;
            height: 40px;
            line-height: 40px;
            padding-left: 8px;
            cursor: pointer;
            transition: all 0.5s ease;
          }

          .menu-item-title:hover {
            background-color: #434A50;
          }

        }
      }
    }
  }

  .fa {
    float: right;
    margin-right: 8px;
    line-height: 40px;
  }

  .fa-open {
    transition: all 0.5s;
    transform: rotate(0deg)
  }

  .fa-close {
    transform: rotate(-90deg);
    transition: all 0.5s;
  }
</style>

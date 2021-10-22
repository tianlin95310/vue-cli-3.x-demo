<template>
  <div class="home">
    <div class="nav-div" :style="{width: navWidth}">
      <div
        style="height: 60px;font-size: 14rpx;text-align: center;color: white;line-height: 30px;background-color: black;">
        <div>{{ tip1 }}</div>
        <div>{{ tip2 }}</div>
      </div>
      <ul class="nav">
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

    <content :style="{paddingLeft: navWidth}" :key="menuPath" class="level1-route" @collapse="collapse"/>
  </div>

</template>

<script>
  /*eslint-disable*/
  import Content from './Content.vue'
  import { mapGetters } from 'vuex'
  // @ is an alias to /src
  export default {
    name: 'Home',
    components: {
      Content
    },
    setup() {
      return {
        tip2: 'v3.x采用setup返回data'
      }
    },
		computed: {
			...mapGetters([
				'username'
			]),
		},
    mounted() {
      this.menuPath = this.$route.path
      this.updateFlag()
    },
    data() {
      return {
        tip1: 'vue3.x仍然可以使用data',
        menus: [{
            menuTitle: '测试vue的特性',
            path: '/menu1',
            isOpen: false,
            subMenus: [{
                menuTitle: '子组件更改父组件的data属性',
                isOpen: false,
                path: '/menu1/testChildModP'
              }, {
                menuTitle: 'vue的生命周期方法',
                isOpen: false,
                path: '/menu1/vueLifecycle'
              },
              {
                menuTitle: 'vue的transition动画',
                isOpen: false,
                path: '/menu1/vueTransition'
              },
              {
                menuTitle: '自定义双向绑定组件',
                isOpen: false,
                path: '/menu1/selfVModelEle'
              },
              {
                menuTitle: '自定义指令',
                isOpen: false,
                path: '/menu1/selfDirective'
              },
              {
                menuTitle: 'Vue响应数组数据',
                isOpen: false,
                path: '/menu1/bindArray'
              }
            ]
          },
          {
            menuTitle: '测试CSS的属性',
            path: '/menu2',
            isOpen: false,
            subMenus: [{
                menuTitle: 'Transition过渡和Transform变换',
                isOpen: false,
                path: '/menu2/testTransition'
              },
              {
                menuTitle: 'animation动画',
                isOpen: false,
                path: '/menu2/testAnimation'
              },
              {
                menuTitle: 'css布局属性探索',
                path: '/menu2/testCssStyle',
                isOpen: false
              },
              {
                menuTitle: 'flex布局',
                path: '/menu2/testFlex',
                isOpen: false
              }
            ]
          },
          {
            menuTitle: '测试JavaScript属性',
            isOpen: false,
            path: '/menu3',
            subMenus: [{
                menuTitle: 'js对象的属性',
                isOpen: false,
                path: '/menu3/testJsListAndMap'
              },
              {
                menuTitle: '数组操作',
                isOpen: false,
                path: '/menu3/listOperate'
              },
              {
                menuTitle: '函数',
                isOpen: false,
                path: '/menu3/func'
              },
              {
                menuTitle: '解构操作符',
                isOpen: false,
                path: '/menu3/objectAnal'
              },
              {
                menuTitle: '数值的特殊处理',
                isOpen: false,
                path: '/menu3/particle'
              },
              {
                menuTitle: '正则表达式',
                isOpen: false,
                path: '/menu3/regExp'
              }
            ]
          },
          {
            menuTitle: '工具的使用',
            isOpen: false,
            path: '/menu4',
            subMenus: [{
                menuTitle: '同步和异步的调用',
                isOpen: false,
                path: '/menu4/testSyncAndAsync'
              },
              {
                menuTitle: '测试async和await的方法',
                isOpen: false,
                path: '/menu4/asyncAndAwait'
              },
              {
                menuTitle: '日期的格式化',
                isOpen: false,
                path: '/menu4/dateFormat'
              },
              {
                menuTitle: '字符串的处理',
                isOpen: false,
                path: '/menu4/stringDealwith'
              },
              {
                menuTitle: 'Promise的使用',
                isOpen: false,
                path: '/menu4/promiseUse'
              },
              {
                menuTitle: '元素的处理',
                isOpen: false,
                path: '/menu4/htmlDeal'
              }
            ]
          },
          {
            menuTitle: '练手小项目',
            isOpen: false,
            path: '/menu5',
            subMenus: [{
                menuTitle: '画出扑克牌',
                isOpen: false,
                path: '/menu5/drawPuke'
              },
              {
                menuTitle: '画出扑克牌用Canvas',
                isOpen: false,
                path: '/menu5/drawPukeInCanvas'
              },
              {
                menuTitle: '金字塔扑克牌游戏',
                isOpen: false,
                path: '/pukegame1'
              },
              {
                menuTitle: '斗地主',
                isOpen: false,
                path: '/pukegame2'
              }
            ]
          },
          {
            menuTitle: '自定义控件',
            isOpen: false,
            path: '/menu6',
            subMenus: [{
                menuTitle: 'html+css',
                isOpen: false,
                path: '/menu6/indexView'
              },
              {
                menuTitle: 'canvas',
                isOpen: false,
                path: '/menu6/canvasView'
              }
            ]
          },
          {
            menuTitle: '数学算法',
            isOpen: false,
            path: '/menu7',
            subMenus: [{
              menuTitle: 'Algorithm',
              isOpen: false,
              path: '/menu7/Algorithm'
            }]
          }
        ],
        navWidth: '18%',
        menuPath: undefined,
      }
    },
    methods: {
      updateFlag() {
        this.menus.forEach((menu) => {
          if (this.menuPath.indexOf(menu.path) !== -1) {
            menu.isOpen = true
          } else {
            menu.isOpen = false
          }
          menu.subMenus.forEach((subMenu) => {
            if (this.menuPath === subMenu.path) {
              subMenu['isOpen'] = true
            } else {
              subMenu['isOpen'] = false
            }
          })
        })
      },
      collapse(isShow) {
        if (isShow) {
          this.navWidth = '18%'
        } else {
          this.navWidth = '12%'
        }
      },
      onNavClick(obj) {
        if (obj.path && obj.path !== '') {
          this.$router.push(obj.path)
        }
        this.menuPath = obj.path
        this.updateFlag()
      },
      show(menu) {
        this.menuPath = menu.path
        this.updateFlag()
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
      width: 18%;
      height: 100%;
      position: fixed;
      z-index: 100;
      transition: all 0.5s ease;
      background-color: #545C64;

      .nav {
        overflow-y: auto;
        overflow-x: hidden;
        height: 100%;

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

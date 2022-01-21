import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

import Layout from '@/views/layout/Layout.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue')
      }
    ]
  },
  {
    path: '/menu1',
    component: Layout,
    children: [
      {
        path: 'testChildModP',
        component: () => import('@/views/menus1/testChildModP.vue')
      },
      {
        path: 'vueTransition',
        component: () => import('@/views/menus1/vueTransition.vue')
      },
      {
        path: 'vueLifecycle',
        component: () => import('@/views/menus1/vueLifecycle.vue')
      },
      {
        path: 'selfVModelEle',
        component: () => import('@/views/menus1/selfVModelEle.vue')
      },
      {
        path: 'selfDirective',
        component: () => import('@/views/menus1/selfDirective.vue')
      },
      {
        path: 'bindArray',
        component: () => import('@/views/menus1/bindArray.vue')
      }
    ]
  },
  {
    path: '/menu2',
    component: Layout,
    children: [
      {
        path: 'testTransition',
        component: () => import('@/views/menus2/testTransition.vue')
      },
      {
        path: 'testAnimation',
        component: () => import('@/views/menus2/testAnimation.vue')
      },
      {
        path: 'testCssStyle',
        component: () => import('@/views/menus2/testCssStyle.vue')
      },
      {
        path: 'testFlex',
        component: () => import('@/views/menus2/testFlex.vue')
      },
      {
        path: 'scroll',
        component: () => import('@/views/menus2/scroll.vue')
      },
      {
        path: 'selector',
        component: () => import('@/views/menus2/selector.vue')
      }
    ]
  },
  {
    path: '/menu3',
    component: Layout,
    children: [
      {
        path: 'testJsListAndMap',
        component: () => import('@/views/menus3/testJsListAndMap.vue')
      },
      {
        path: 'listOperate',
        component: () => import('@/views/menus3/listOperate.vue')
      },
      {
        path: 'func',
        component: () => import('@/views/menus3/func.vue')
      },
      {
        path: 'objectAnal',
        component: () => import('@/views/menus3/objectAnal.vue')
      },
      {
        path: 'particle',
        component: () => import('@/views/menus3/particle.vue')
      },
      {
        path: 'regExp',
        component: () => import('@/views/menus3/regExp.vue')
      }
    ]
  },
  {
    path: '/menu4',
    component: Layout,
    children: [
      {
        path: 'testSyncAndAsync',
        component: () => import('@/views/menus4/testSyncAndAsync.vue')
      },
      {
        path: 'asyncAndAwait',
        component: () => import('@/views/menus4/asyncAndAwait.vue')
      },
      {
        path: 'dateFormat',
        component: () => import('@/views/menus4/dateFormat.vue')
      },
      {
        path: 'stringDealwith',
        component: () => import('@/views/menus4/stringDealwith.vue')
      },
      {
        path: 'promiseUse',
        component: () => import('@/views/menus4/promiseUse.vue')
      },
      {
        path: 'htmlDeal',
        component: () => import('@/views/menus4/htmlDeal.vue')
      }
    ]
  },
  {
    path: '/menu5',
    component: Layout,
    children: [
      {
        path: 'drawPuke',
        name: 'drawPuke',
        component: () => import('@/views/menus5/drawPuke.vue')
      },
      {
        path: 'drawPukeInCanvas',
        name: 'drawPukeInCanvas',
        component: () => import('@/views/menus5/drawPukeInCanvas.vue')
      }
    ]
  },
  {
    path: '/menu6',
    component: Layout,
    children: [
      {
        path: 'htmlView',
        name: 'HtmlView',
        component: () => import('@/views/menus6/htmlView.vue')
      },
      {
        path: 'canvasView',
        name: 'CanvasView',
        component: () => import('@/views/menus6/canvasView.vue')
      }
    ]
  },
  {
    path: '/menu7',
    component: Layout,
    children: [
      {
        name: 'Algorithm',
        path: 'Algorithm',
        component: () => import('@/views/menus7/Algorithm.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/login2',
    name: 'login2',
    component: () => import('@/views/LoginStepTwo.vue')
  },
  {
    path: '/pukegame1',
    component: () => import('@/views/menus5/pukegame1.vue')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

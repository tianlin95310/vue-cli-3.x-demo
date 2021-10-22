import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { getToken } from '@/cookies/Cookies.js'

import directives from './directives/index.js'

const whiteList = ['/login']

router.beforeEach(async(to, from, next) => {
  console.log(from.path, to.path, getToken())
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    console.log('11111111111111111111111')
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      console.log('2222222222222222222222')
      next({ path: '/login' })
    }
  }
})
router.afterEach(() => {
  // finish progress bar
})
createApp(App).use(store).use(router).use(directives).mount('#app')

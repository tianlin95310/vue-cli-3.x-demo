import Link from './Link/index.js'
import ALink from './Link/ALink.vue'
export default {
  install(Vue) {
    console.log('install Component', Link.__name, ALink.__name)
    Vue.component(Link.__name, Link)
    Vue.component(ALink.__name, ALink)
  }
}

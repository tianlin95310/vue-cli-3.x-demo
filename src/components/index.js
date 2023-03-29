import Link from './Link/index.js'
import ALink from './Link/ALink.vue'
export default {
  install(Vue) {
    Vue.component(Link.name, Link)
    Vue.component(ALink.name, ALink)
  }
}

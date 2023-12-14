import number from './number.js'
import decimal from './decimal.js'

export default {
  install(Vue) {
    Vue.directive('number', number)
    Vue.directive('decimal', decimal)
  }
}

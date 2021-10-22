import number from './number.js'

export default {
  install(Vue) {
    Vue.directive('number', number)
  }
}

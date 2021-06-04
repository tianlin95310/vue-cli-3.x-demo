import { createStore } from 'vuex'
import Cookies from 'js-cookie'

export default createStore({
  state: {
    username: Cookies.get('username') || '张三'
  },
  mutations: {
    SET_USERNAME: (state, username) => {
      state.username = username
      Cookies.set('username', username)
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    username: state => state.username
  }
})

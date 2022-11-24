<template>
  <div class="page-container">
    <h2>关于函数的一些操作，对象属性操作是"引用"传递的</h2>
    <div>
      <button class="button" @click="change">作为新参传递</button>
      <button class="button" @click="addList">addList</button>
      <button class="button" @click="delList">delList</button>
      <button class="button" @click="defArg">函数默认参数</button>
    </div>

    <div>
      <button class="button" @click="getInstance">JS单例模式 属性上直接添加闭包函数</button>
      <button class="button" @click="getInstanceStatic">JS单例模式 添加静态方法</button>
    </div>
    <div>
      <button class="button" @click="debounce">防抖函数的实现（手动）</button>
      <button class="button" @click="throttle">节流函数的实现（手动）</button>
    </div>
    <div>
      <button class="button" @click="debounceAPI">防抖函数的实现（API）</button>
      <button class="button" @click="throttleAPI">节流函数的实现（API）</button>
    </div>
  </div>
</template>

<script>
  /*eslint-disable*/
  import { throttle, debounce } from 'lodash'
  function People() {
    this.name = '张三'
  }

  var delay = 1000
  var prev = Date.now() - delay
  const throttleS = function(func, delay) {
    return function() {
      var context = this
      var args = arguments
      var now = Date.now()
      // console.log('prev == ', prev, 'now == ', now, now - prev)
      if (now - prev >= delay) {
        func.apply(context, args)
        prev = Date.now()
      }
    }
  }

  var timer = null
  const debounceS = function(callback, delay) {
    return function() {
      const _this = this
      const args = arguments
      console.log('timer', timer)
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      timer = setTimeout(function() {
        console.log('called timer', timer)
        callback.apply(_this, args)
      }, delay)
    }
  }

  People.getInstance = (function() {
    let instance
    return function() {
      if (!instance) {
        instance = new People()
      }
      return instance
    }
  })()

  class User {
    constructor(name) {
      this.name = name
    }

    static getInstance(name) {
      if (!User._instance) {
        User._instance = new User(name)
      }
      return User._instance
    }
  }

  export default {
    data() {
      return {
        person: {},
        people: [],
        debounceFun: null
      }
    },
    created() {
      // api需要用这种function的写法，得到一个函数体，调用的时候都是调用这个函数体对象，保证了是同一个对象
      // 就能进行debounce内部的逻辑判断
      this.debounceFun = debounce(() => {
        console.log('debounceAPI')
      }, 2000)
    },
    methods: {
      throttleAPI() {},
      debounceAPI() {
        this.debounceFun()
        // 这样写的话其实每一次都是调用一个新的函数,并不是调用的同一个函数,所以防抖失效
        // debounce(() => {
        //   console.log('debounceAPI')
        // }, 2000)()
      },
      callback() {
        console.log('callback')
      },
      throttle() {
        // throttle(this.callback, 0, {
        //   leading: 100
        // })(123)
        throttleS(this.callback, 1000)()
      },
      debounce: function() {
        // debounce(this.callback, 1000)(111)
        debounceS(this.callback, 1000)()
      },
      getInstanceStatic() {
        console.log(User.getInstance('tianlin'))
      },
      getInstance() {
        console.log(People.getInstance())
      },
      fun(arg = '123', arg2 = 'tianlin') {
        console.log(arg, arg2)
      },
      defArg() {
        this.fun()
        this.fun('QQ')
        this.fun('QQ', 'wechat')
      },
      delList() {
        const index = Math.ceil(Math.random() * this.people.length) - 1
        this.people.splice(index, 1)
        console.log(index)
        console.log(JSON.stringify(this.people))
      },
      addList() {
        this.add(this.people)
        console.log(JSON.stringify(this.people))
      },
      add(people) {
        people.push({
          name: Math.ceil(Math.random() * 9999)
        })
      },
      change() {
        this.changePerson(this.person)
        console.log(this.person)
      },
      changePerson(person) {
        person.name = 'haha' + Math.random()
      }
    }
  }
</script>

<style scoped>
div > div {
  margin-top: 10px;
}
</style>

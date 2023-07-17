<template>
  <div class="page-container">
    <h2>关于函数的一些操作，对象属性操作是"引用"传递的</h2>
    <div>
      <button class="button" @click="change">作为新参传递</button>
      <button class="button" @click="defArg">函数默认参数</button>
    </div>

    <div>
      <button class="button" @click="defineAClass">函数作为类的实现体</button>
    </div>

    <div>
      <button class="button" @click="ex5Extends">ES5继承（原型与原型链）</button>
      <button class="button" @click="ex6Extends">ES6继承</button>
      <button class="button" @click="objectProto">Object原型</button>
      <button class="button" @click="objectProtoConst">对象的原型与原型对象</button>
      <button class="button" @click="funProto">函数的原型</button>
      <button class="button" @click="FunctionUse">Function的含义</button>
    </div>

    <div>
      <button class="button" @click="getInstance">JS单例模式 属性上直接添加闭包函数</button>
      <button class="button" @click="getInstanceStatic">JS单例模式 class添加静态方法</button>
    </div>

    <div>
      <button class="button" @click="JSInterface">JS interface</button>
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
  import { debounceS, throttleS } from './utils'
  // import './utils/classSingleInstance.js'
  import { People, User } from './utils/classSingleInstance.js'
  import { ABC } from './utils/jsInterface.js'

  export default {
    data() {
      return {
        debounceFun: null
      }
    },
    created() {
      // api需要用这种function的写法，得到一个函数体，调用的时候都是调用这个函数体对象，保证了是同一个对象
      // 就能进行debounce内部的逻辑判断
      this.debounceFun = debounce(() => {
        console.log('debounceAPI')
      }, 1000)
    },
    methods: {
      FunctionUse() {
        console.log(Function)
      },
      funProto() {
        console.log(Date)
        // 函数对象求原型对象是一个函数
        console.log(Object.getPrototypeOf(Date))
        console.log(Date.__proto__)
        // 函数的原型对象包含constructor和原型对象的原型对象的引用
        console.log(Date.prototype)
        // 函数的原型对象的原型对象是Object的原型对象
        console.log(Date.prototype.__proto__)
        let Afun = () => {}
        // debugger
        console.log(new Afun())
        console.log(Afun.prototype)
      },
      objectProtoConst() {
        let date = new Date()
        console.log(date)
        // getPrototypeOf与__proto__等价，部分浏览器无__proto__
        console.log('Object.getPrototypeOf(date) === date.__proto__', Object.getPrototypeOf(date) === date.__proto__)
        console.log('date.__proto__ === Date.prototype', date.__proto__ === Date.prototype)
        // 对象的原型对象的原型对象等于父类构造函数的原型对象
        console.log('date.__proto__.__proto__ === Object.prototype', date.__proto__.__proto__ === Object.prototype)
        // 对象的构造函数是对象的原型对象的构造函数
        console.log('date.constructor === Date.prototype.constructor', date.constructor === Date.prototype.constructor)
        console.log('date.__proto__.constructor === date.constructor', date.__proto__.constructor === date.constructor)
        console.log('普通对象有__proto__原型对象', date.__proto__)
        console.log('普通对象无prototype，只有函数对象才有', date.prototype)
      },
      objectProto() {
        let obj = {}
        let o_proto = Object.getPrototypeOf(obj)
        let o_proto_proto = Object.getPrototypeOf(o_proto)
        console.log(obj, o_proto, o_proto_proto)
      },
      ex5Extends() {
        // 原型链继承
        function Humen(name) {
          this.name = name
        }

        function Men() {}
        Men.prototype = new Humen()
        Men.prototype.constructor = Men

        let aMen = new Men('张三')
        let aMen_proto = Object.getPrototypeOf(aMen)  // MEN
        let aMen_proto_proto = Object.getPrototypeOf(aMen_proto)  // HUMEN
        let aMen_proto_proto_proto = Object.getPrototypeOf(aMen_proto_proto) // OBJECT
        let aMen_proto_proto_proto_proto = Object.getPrototypeOf(aMen_proto_proto_proto)

        console.log(aMen_proto, aMen_proto_proto, aMen_proto_proto_proto, aMen_proto_proto_proto_proto)
        // aMen对象的构造函数就是Men
        console.log(aMen.constructor, aMen.constructor === Men, aMen.constructor === Humen)
        console.log(Men.prototype, aMen_proto === Men.prototype)
        console.log(aMen instanceof Men)
        console.log(aMen instanceof Humen)
      },
      ex6Extends() {
        class Humen {
          constructor(name) {
            this.name = name
          }
          say() {
            console.log(`my name is ${this.name}`)
          }
        }
        Humen.prototype.dress = function(cloth) {
          console.log(`i dress ${cloth}`)
        }

        class Men extends Humen {
        }
        let aMen = new Men('张三')
        // 构造继承
        aMen.say()
        // 原型继承
        aMen.dress('西装')
        console.log(aMen)
        console.log(aMen.prototype)
        console.log(Men.prototype)
        console.log(aMen instanceof Men)
        console.log(aMen instanceof Humen)
      },
      JSInterface() {
        console.log('sss', new ABC(123))
      },
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
        // 事件太短节流无效
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
      defineAClass() {
        function AClass(a, b) {
          this.a = a
          this.b = b
        }
        let aclass = new AClass('12', 'bb')
        console.log('aclass', aclass)
        console.log('aclass instanceof', aclass instanceof AClass)
        console.log('aclass prototype', aclass.prototype)
        console.log('aclass toString = ', aclass.toString())
        console.log('aclass getPrototypeOf = ', Object.getPrototypeOf(aclass))

        console.log('AClass prototype = ', AClass.prototype)
        console.log('AClass toString = ', AClass.toString())
        console.log('AClass getPrototypeOf = ', Object.getPrototypeOf(AClass))
        console.log('AClass constructor = ', AClass.constructor)
        console.log('AClass constructor = ', AClass.constructor()())

        console.log('User prototype = ', User.prototype)
        console.log('User toString = ', User.toString())
        console.log('User getPrototypeOf = ', Object.getPrototypeOf(User))
        console.log('User constructor = ', User.constructor)
        console.log('User constructor = ', User.constructor())
      },
      defArg() {
        this.fun()
        this.fun('QQ')
        this.fun('QQ', 'wechat')
      },
      change() {
        let person = {}
        this.changePerson(person)
        console.log(person)
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

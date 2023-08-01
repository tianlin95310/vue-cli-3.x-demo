<template>
  <div class="page-container">
    <h2>ES6...运算符的用法</h2>
    <div>
      <button class="button" @click="test1">解析数组，类似于可变数组</button>

      <button class="button" @click="test2">作为形参传递，数组类型参数</button>

      <button class="button" @click="testKeiban">数组传递到可变参数</button>
    </div>

    <div>
      <button class="button" @click="test3">取对象key对应的值 并直接初始化给变量</button>
      <button class="button" @click="test4">作为数组可变参数传递，解析字符串成数组</button>
    </div>

    <div>
      <button class="button" @click="test6">多层对象的克隆（复杂对象，无法克隆）</button>
      <button class="button" @click="test5">单层对象的克隆（简单对象）</button>
      <button class="button" @click="deepclone">深克隆的实现</button>
    </div>

    <div>
      <button class="button" @click="newKeyWord">新的运算符...， ?., ??</button>
    </div>
    <div>
       <button class="button" @click="var_let">var与let的区别</button>

       <button class="button" @click="var_let_value">数值延迟问题</button>
    </div>
  </div>
</template>
<script>
  /*eslint-disable*/
  function deepClone(obj) {
    let newObj
    if (typeof obj !== 'object') {
      return
    }
    if (obj instanceof Array) {
      // newObj = [...obj]
      newObj = []
    } else {
      newObj = {}
    }
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = typeof obj !== 'object' ? deepClone(obj[key]) : obj[key]
      }
    }
    return newObj
  }
  export default {
    data() {
      return {
        abc: 'asdasd'
      }
    },
    methods: {
      deepclone() {
        // let a = [1,2,3,4]
        // let b = deepClone(a)
        // a.push(5)
        // console.log(a, b)

        let a = {
          a: 1,
          b: {
            c: 1,
            d: 2
          }
        }
        let b = deepClone(a)
        a['e'] = '100'
        console.log(a, b)
      },
      var_let_value() {
        for (let i = 0; i <= 5; i++) {
          document.addEventListener('click', () => {
            console.log(i)
          })
        }
        // var会有变量提升，不是局部变量
        for (var i = 0; i <= 5; i++) {
          document.addEventListener('click', () => {
            console.log(i)
          })
        }
        for (var i = 0; i <= 5; i++) {
          document.addEventListener('click', () => {
            console.log(i)
          })
        }
        var a;
        var a;
        // var可重复定义，let相同作用区域内，不能重复定义
        let b;
        // let b;
        console.log('a', a)
      },
      var_let() {
        {
          var a = 10
          let b = 20
        }
        console.log(a)
        // console.log(b)
        function test() {
          var c = 100
          let d = 200
          console.log(c)
          console.log(d)
        }
        test()
        console.log(c)  // c is not defined
        console.log(d)
      },
      newKeyWord() {
        const a = undefined ?? 1
        console.log(a)

        const b = {
          key: 'value'
        }
        console.log(b?.key)
        const c = undefined
        console.log(c?.key)
      },
      test6() {
        const map1 = {
          v1: {
            a: 1,
            b: '2'
          },
          v2: [1, 2, 3],
          v3: 11
        }
        const map2 = { ...map1 }
        map2.v1.a = 10
        map2.v3 = 22
        console.log('map1---', map1)
        console.log('map2---', map2)
        console.log('===', map1 === map2)
      },
      test5() {
        const b = {
          key: 'key',
          value: 'value'
        }
        // 用在对象上实现对象的克隆
        console.log('---b---', b)
        const bb = {
          ...b
        }
        console.log('---bb---', bb)
        b.key = 'change'
        console.log('---b---', b)
        console.log('---bb---', bb)
        console.log('===', b === bb)
      },
      test4() {
        const a = [1, 2, 3]
        // 作为数组输出
        console.log(a)
        // 此种写法错误
        // const aa = ...a
        // 单个匹配输出
        console.log(...a)
        // 解析为数组
        const c = 'tianlin'
        const cc = [...c]
        console.log(cc)
      },
      test3() {
        const data = {
          name: 'asasdas',
          age: 23,
          list: [14, 56]
        }
        const {
          name,
          age,
          list: score
        } = data
        console.log(name, age, score)
      },
      // 可变长度参数
      fun2(array, ...args) {
        console.log(args.length, args)
      },
      fun1([a, b, c]) {
        console.log(a, b, c)
      },
      testKeiban() {
        const a = [1, 2, 3]
        this.fun2(a, 1, 'str', [])
      },
      test2() {
        const a = [1, 2, 3]
        this.fun1(a)
      },
      test1() {
        const [a, ...b] = [1, 2, 3, 4]
        console.log(a, b)
        // 后面的2,3,4会被解析成数组b
      }
    }
  }
</script>

<style lang="scss" scoped>
  div > div {
    margin-top: 10px;
  }
</style>

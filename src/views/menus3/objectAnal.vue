<template>
  <div>
    <h2>ES6...运算符的用法</h2>
    <div><button class="button" @click="test1">定义变量时使用</button></div>

    <div><button class="button" @click="test2">作为形参传递</button></div>

    <div><button class="button" @click="test3">取对象key对应的值 并直接赋值给变量</button></div>

    <div><button class="button" @click="test4">作为运算符</button></div>

    <div><button class="button" @click="test5">单层对象的克隆</button></div>

    <div><button class="button" @click="test6">多层对象的克隆(一级可实现，多级无法实现)</button></div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        abc: 'asdasd'
      }
    },
    methods: {
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
      test2() {
        const a = [1, 2, 3]
        // this.fun1([1, 2])
        this.fun1(a)
        this.fun2(a, 1, 'str', [])
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
  div>div {
    margin-top: 10px;
  }
</style>

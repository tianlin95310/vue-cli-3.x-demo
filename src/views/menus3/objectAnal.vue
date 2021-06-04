<template>
  <div>
    <h2>ES6...运算符的法</h2>
    <div><button class="button" @click="test1">定义变量时使用</button></div>

    <div><button class="button" @click="test2">作为形参传递</button></div>

    <div><button class="button" @click="test3">取对象的key</button></div>

    <div><button class="button" @click="test4">作为运算符</button></div>
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
      test4() {
        const a = [1, 2, 3]
        // 作为数组输出
        console.log(a)
        // 单个匹配输出
        console.log(...a)

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
        console.log('fun4', {
          ...b
        })
        // 解析为数组
        const c = 'tianlin'
        console.log([...c])
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
      fun2(...args) {
        console.log(args)
      },
      fun1([a, b, c]) {
        console.log(a, b, c)
      },
      test2() {
        const a = [1, 2, 3]
        this.fun1([1])
        this.fun1(a)
        this.fun2(a)
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

<template>
  <div class="async-and-await page-container">
    <div><button class="button" @click="funTest1">调用普通方法测试（不用await）</button></div>
    <div><button class="button" @click="funTest2">调用方法测试（全部用await）</button></div>
    <div><button class="button" @click="funTest3">调用方法测试（最后一步不用await）</button></div>
    <div><button class="button" @click="funTest4">调用方法测试（第一个不用await）</button></div>
  </div>
</template>

<script>
  export default {
    methods: {
      async fun1() {
        return new Promise(function(resolve, reject) {
          setTimeout(() => {
            resolve('fun1')
          }, 1000)
        })
      },
      async fun2() {
        return new Promise(function(resolve, reject) {
          setTimeout(() => {
            resolve('fun2')
          }, 2000)
        })
      },
      async fun3() {
        return new Promise(function(resolve, reject) {
          setTimeout(() => {
            resolve('fun3')
          }, 2000)
        })
      },
      async funTest4() {
        // 此时不在等待3执行完，2会立马进度队列，会和fun2先后执行
        const value3 = this.fun3()
        value3.then(res => {
          console.log(res)
        })
        const value2 = await this.fun2()
        console.log(value2)
        const value1 = await this.fun1()
        console.log(value1)
      },
      async funTest3() {
        const value3 = await this.fun3()
        console.log(value3)
        const value2 = await this.fun2()
        console.log(value2)
        // 这种还是得等待
        const value1 = this.fun1()
        value1.then(res => {
          console.log(res)
        })
      },
      async funTest2() {
        // await这样的就是一个一个执行的，前面的执行完了，才到后面的
        const value3 = await this.fun3()
        console.log(value3)
        const value2 = await this.fun2()
        console.log(value2)
        const value1 = await this.fun1()
        console.log(value1)
      },
      funTest1() {
        const value3 = this.fun3()
        value3.then(res => {
          console.log(res)
        })
        const value2 = this.fun2()
        value2.then(res => {
          console.log(res)
        })
        const value1 = this.fun1()
        value1.then(res => {
          console.log(res)
        })
      }
    },
    created: async function() {}
  }
</script>

<style lang="scss" scoped>
  .async-and-await {
    div {

      margin-top: 16px;
    }
  }
</style>

<template>
  <div class="promise-use page-container">

    <button class="button" @click="defaultPromise">默认的promise</button>

    <button class="button" @click="useWithAwait">Promise与async和await的结合使用</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      async useWithAwait() {
        const v1 = await this.step1()
        console.log(v1)

        const v2 = await this.step2()
        console.log(v2)
      },
      step1() {
        return new Promise(function(resolve, reject) {
          // 模拟延时
          setTimeout(() => {
            resolve('步骤1')
          }, 1000)
        })
      },
      step2() {
        return new Promise(function(resolve, reject) {
          resolve('步骤2')
        })
      },
      fun() {
        return new Promise(function(resolve, reject) {
          const random = Math.ceil(Math.random() * 3)
          console.log(random)
          if (random === 1) {
            resolve('111')
          } else if (random === 2) {
            reject(Error('222'))
          } else {
            reject(Error('000'))
            // 没有调用resolve，reject时，函数就结束了，后面的then和catch都不会执行
          }
        })
      },
      defaultPromise() {
        this.fun()
          .then(res => {
            console.log('---defaultPromise then---', JSON.stringify(res))
          })
          .catch(res => {
            console.log('---defaultPromise catch---', JSON.stringify(res))
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .promise-use {}
</style>

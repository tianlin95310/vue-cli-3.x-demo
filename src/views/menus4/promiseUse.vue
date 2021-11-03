<template>
  <div class="promise-use">

    <button class="button" @click="defaultPromise">默认的promise</button>

    <button class="button" @click="test">特殊的用法尝试</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      async test() {
        const va1 = await this.fun()
        console.log(va1)
        console.log('---fun call end---')
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

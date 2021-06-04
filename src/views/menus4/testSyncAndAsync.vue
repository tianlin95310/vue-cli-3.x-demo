<template>
  <div class="test-sync-and-async">
    <div>
      <button class="button" @click="funa">测试同步回调</button>
    </div>

    <div>
      <button class="button" @click="testTimeout">测试setTimeout</button>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    created() {
      // 同步的回调,单线程执行
      this.funa(this.callback)
    },
    methods: {
      testTimeout() {
        console.log('testTimeout')
        // 延时，并非异步，setTimeout会将时间运行放进队列，类似于消息机制，即使将延时时间设置为0
        // fun也不会立即执行，他始终会比testTimeout慢，但执行后会和testTimeout的其他代码抢cpu时间
        setTimeout(() => {
          console.log('setTimeout 0')
        }, 0)
        setTimeout(() => {
          console.log('setTimeout 200')
        }, 200)
      },
      funa(callback) {
        console.log('11111111111111')
        this.callback()
        console.log('333333333333333')
      },
      callback() {
        console.log('2222222222222')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .test-sync-and-async {
    padding: 0 16px;

    div {
      margin-top: 10px;
    }
  }
</style>

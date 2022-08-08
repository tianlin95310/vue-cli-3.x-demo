<template>
  <div class="page-container particle">
    <div style="flex: 1">
      <h2>js的特殊点,无整除运算</h2>
      <h3>在js中 1/2 = {{ 1 / 2 }}</h3>
      <h3>在js中 2/4 = {{ 2 / 4 }}</h3>
      <h3>在js中 3/4 = {{ 3 / 4 }}</h3>
      <h3>在js中 4/4 = {{ 4 / 4 }}</h3>
      <h3>undefined + 1 = {{ undefined + 1 }}</h3>
      <h3>1 + undefined = {{ 1 + undefined }}</h3>
      <h3>null + 1 = {{ null + 1 }}</h3>
      <h3>1 / 0 = {{ 1 / 0 }}</h3>
      <h3>'123' + 123 = {{ '123' + 123 }}</h3>
      <h3>||运算 undefined || 1 - undefined || 2 = {{ undefined || 1 - undefined || 2 }}</h3>
      <h3>||运算 (undefined || 1) - (undefined || 2) = {{ (undefined || 1) - (undefined || 2) }}</h3>
      <h3>浮点数与0 0.00 == 0 = {{ 0.00 == 0 }}</h3>
      <h3>浮点数与0 0.000 === 0 = {{ 0.000 === 0 }}</h3>
      <h3>取余数1 % 3 = {{ 1 % 3 }}</h3>
      <h3>取余数2 % 3 = {{ 2 % 3 }}</h3>
      <h3>取余数3 % 3 = {{ 3 % 3 }}</h3>
      <h3>取余数4 % 3 = {{ 4 % 3 }}</h3>
      <h3>取余数5 % 3 = {{ 5 % 3 }}</h3>
    </div>
    <div style="flex: 1">
      <div>
        <button class="button" @click="random">产生随机数</button>
        <span class="tag" style="margin-left: 16px;">{{ number }}</span>
      </div>
      <button class="button" @click="var_let">var与let的区别</button>
      <button class="button" @click="newKeyWord">新的运算符...， ?., ??</button>
      <button class="button" @click="JsonFormat">测试Json字符串格式化</button>

      <button class="button" @click="testeq">测试==</button>
    </div>
  </div>
</template>
<script>
/*eslint-disable*/
export default {
  data() {
    return {
      number: 0
    }
  },
  computed: {
    value() {
      return 1 / 2
    }
  },
  methods: {
    testeq() {
      var a = {
        value: 1,
        [Symbol.toString]() {
          return a.value++
        }
      }
      console.log((a == 1 && a == 2 && a == 3))
    },
    JsonFormat() {
      const value = {
        v1: undefined,
        v2: null,
        v3: '',
        v4: 123,
        v5: 'tianlin'
      }

      function rep(key, value) {
        console.log(key, value)
        if (value === null) {
          return undefined
        } else if (value === '') {
          return undefined
        } else {
          return value
        }
      }

      console.log(JSON.stringify(value, rep))
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
    random() {
      this.number = Math.ceil(Math.random() * 8888 + 1000)
    }
  },
  created() {
  }
}
</script>

<style lang="scss" scoped>
div {
  margin-top: 10px;

}

.particle {
  display: flex;
  flex-direction: row;

  > div {
    display: inline-block;
    width: 50%;
    flex: 1;
  }
}

h3 {
  margin: 10px 0;
}
</style>

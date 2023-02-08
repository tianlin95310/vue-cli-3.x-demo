<template>
  <div class="page-container particle">
      <h2>js的特殊点,无整除运算</h2>
      <div>
        <h3>在js中 1/2 = {{ 1 / 2 }}</h3>
        <h3>在js中 2/4 = {{ 2 / 4 }}</h3>
        <h3>在js中 3/4 = {{ 3 / 4 }}</h3>
        <h3>在js中 4/4 = {{ 4 / 4 }}</h3>
      </div>
     <div>
       <h3>undefined + 1 = {{ undefined + 1 }}</h3>
       <h3>1 + undefined = {{ 1 + undefined }}</h3>
     </div>
      <div>
        <h3>null + 1 = {{ null + 1 }}</h3>
        <h3>1 / 0 = {{ 1 / 0 }}</h3>
        <h3>'123' + 123 = {{ '123' + 123 }}</h3>
      </div>
      <div>
        <h3>||运算 undefined || 1 - undefined || 2 = {{ undefined || 1 - undefined || 2 }}</h3>
        <h3>||运算 (undefined || 1) - (undefined || 2) = {{ (undefined || 1) - (undefined || 2) }}</h3>
      </div>
     <div>
       <h3>浮点数与0 0.00 == 0 = {{ 0.00 == 0 }}</h3>
       <h3>浮点数与0 0.000 === 0 = {{ 0.000 === 0 }}</h3>
     </div>
      <div>
        <h3>取余数1 % 3 = {{ 1 % 3 }}</h3>
        <h3>取余数2 % 3 = {{ 2 % 3 }}</h3>
        <h3>取余数3 % 3 = {{ 3 % 3 }}</h3>
        <h3>取余数4 % 3 = {{ 4 % 3 }}</h3>
        <h3>取余数5 % 3 = {{ 5 % 3 }}</h3>
      </div>
      <div>
        <span class="tag" style="margin-left: 16px;" @click="random">{{ number }}</span>
      </div>
      <button class="button" @click="JsonFormat">测试Json字符串格式化</button>
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
    random() {
      this.number = Math.ceil(Math.random() * 8888 + 1000)
    }
  },
  created() {
    this.random()
  }
}
</script>

<style lang="scss" scoped>
div {
  margin-top: 10px;
}

.particle {
  div > h3 {
    display: inline-block;
    margin-right: 16px;
  }
}

h3 {
  margin-top: 10px;
}
</style>

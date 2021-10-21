<template>
  <div class="html-deal">

<h2>输入框的处理</h2>
    <div>
      <input v-model="number1" />
      {{number1}}
    </div>

    <div>
      <input v-model="number2" type="text" oninput="value = value.replace(/^\D*(\d*(?:\.\d{0,2})?).*$/g, '$1')">
      {{number2}}
    </div>

    <div>
      <input v-model="number3" type="text" oninput="value=value.replace(/[^\d.]/g,'')">
      {{number3}}
    </div>
    <div>
      <input v-model="number4" type="text" @input="onInput">
      {{number4}}
    </div>
    <button @click="show" class="button">显示记录的实际值</button>
  </div>
</template>

<script>
  /* eslint-disable*/
  function filter(value) { // 价格的限制规则，只能输入小数点后两位
      value = value.replace(/[^\d.]/g,"");//清除"数字"和"."以外的字符
      value = value.replace(/^\./g,"");//验证第一个字符是数字而不是字符
      value = value.replace(/\.{2,}/g,".");//只保留第一个.清除多余的
      value = value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
      value = value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3');//只能输入两个小数
      return value
  }
  export default {
    data() {
      return {
        number1: '',
        number2: '',
        number3: '',
        number4: ''
      }
    },
    created() {
      // 同步的回调,单线程执行
    },
    methods: {

      onInput(e) {
        console.log(e.data)
        e.target.value = filter(e.target.value)
      },
      show() {
        alert(this.number4)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .html-deal {
    padding: 0 16px;

    div {
      margin-top: 10px;
    }
  }
</style>

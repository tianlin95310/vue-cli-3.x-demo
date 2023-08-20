<template>
  <div class="page-container particle">
    <h2>js的特殊点,无整除运算</h2>
    <pre>
      在js中 1/2 = {{ 1 / 2 }}
      在js中 2/4 = {{ 2 / 4 }}
      在js中 3/4 = {{ 3 / 4 }}
      在js中 4/4 = {{ 4 / 4 }}
    </pre>
    <pre>
      undefined + 1 = {{ undefined + 1 }}
      1 + undefined = {{ 1 + undefined }}
      null + 1 = {{ null + 1 }}
      1 / 0 = {{ 1 / 0 }}
      '123' + 123 = {{ "123" + 123 }}
      0.1 + 0.2 = {{ 0.1 + 0.2 }}
      0.1 + 0.7 = {{ 0.1 + 0.7 }}
      +0 == -0 = {{ +0 == -0 }}
      +0 === -0 = {{ +0 === -0 }}

      '1' == 1 = {{ '1' == 1 }}
      ' ' == '' = {{ ' ' == '' }}
      ' ' == 0 = {{ ' ' == 0 }}
      'x' == 0 = {{ 'x' == 0 }}
      true == 0 = {{ true == 0 }}
      false == 0 = {{ false == 0 }}
     </pre>
    <pre>
      <span>||运算 undefined || 1 - undefined || 2 = {{ undefined || 1 - undefined || 2 }}</span>
      <span>||运算 (undefined || 1) - (undefined || 2) = {{ (undefined || 1) - (undefined || 2) }}</span>
      </pre>
    <pre>
      浮点数与0 0.00 == 0 = {{ 0.0 == 0 }}
      浮点数与0 0.000 === 0 = {{ 0.0 === 0 }}
      <span class="highlight">undefined == null =  {{ undefined == null }}</span>
      undefined === null = {{ undefined === null }}
      <span>null == NaN = {{ null == NaN }}</span>
      null === NaN = {{ null === NaN }}
      undefined == NaN = {{ undefined == NaN }}
      undefined === NaN = {{ undefined === NaN }}
      <span class="highlight">NaN == NaN = {{ NaN == NaN }}</span>
      <span class="highlight">NaN === NaN = {{ NaN === NaN }}</span>
     
      Infinity == Infinity = {{ Infinity == Infinity }}
      Infinity === Infinity = {{ Infinity === Infinity }}
     </pre>
    <pre>
      取余数1 % 3 = {{ 1 % 3 }}
      取余数2 % 3 = {{ 2 % 3 }}
      取余数3 % 3 = {{ 3 % 3 }}
      取余数4 % 3 = {{ 4 % 3 }}
      取余数5 % 3 = {{ 5 % 3 }}
    </pre>
    <div>
      <span class="tag" style="margin-left: 16px;" @click="random">{{number}}</span>
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
    };
  },
  computed: {
    value() {
      return 1 / 2;
    }
  },
  methods: {
    JsonFormat() {
      const value = {
        v1: undefined,
        v2: null,
        v3: "",
        v4: 123,
        v5: "tianlin"
      };

      function rep(key, value) {
        console.log(key, value);
        if (value === null) {
          return undefined;
        } else if (value === "") {
          return undefined;
        } else {
          return value;
        }
      }
      console.log(JSON.stringify(value, rep));
    },
    random() {
      this.number = Math.ceil(Math.random() * 8888 + 1000);
    }
  },
  created() {
    this.random();
  }
};
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

  pre {
    margin: 0;
  }
}

h3 {
  margin-top: 10px;
}
</style>

<template>
  <div>
    <h2>js的特殊点</h2>
    <h3>在js中 1/2 = {{ 1 / 2 }}</h3>

    <h3>undefined + 1 = {{undefined + 1}}</h3>

    <h3>1 + undefined = {{1 + undefined}}</h3>

    <h3>null + 1 = {{null + 1}}</h3>

    <h3>1 / 0 = {{1 / 0}}</h3>

    <h3>'123' + 123 = {{'123' + 123}}</h3>

    <h3>undefined || 1 - undefined || 2 = {{undefined || 1 - undefined || 2}}</h3>

    <h3>(undefined || 1) - (undefined || 2) = {{(undefined || 1) - (undefined || 2)}}</h3>

<h3>0.00 == 0 = {{0.00 == 0}}</h3>
<h3>0.000 === 0 = {{0.000 === 0}}</h3>
    <div><button class="button" @click="random">产生随机数</button>
    <span class="tag" style="margin-left: 16px;">{{ number }}</span></div>

    <button class="button" @click="var_let">var与let的区别</button>
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
    created() {}
  }
</script>

<style lang="scss" scoped>
  div {
    margin-top: 10px;

  }

  h3 {
    margin: 10px 0;
  }
</style>

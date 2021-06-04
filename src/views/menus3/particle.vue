<template>
  <div>
    <h2>js的特殊点</h2>
    <div>
      <h3 style="display: inline-block;color: red">在js中 1/2 = </h3> {{ value }}
    </div>

    <div><button class="button" @click="random">随机数</button><span class="tag" style="margin-left: 16px;">{{ number }}</span></div>
  </div>
</template>
<script>
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
</style>

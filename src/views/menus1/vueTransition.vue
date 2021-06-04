<template>
  <div class="vue-transition">

    <h2>测试vue的transition标签动画</h2>
    <button class="button" v-on:click="show = !show;value = show ? value1 : value2">
      Toggle
    </button>

    <transition name="fade" mode="out-in">
      <h3 v-if="show == true">{{ value }}</h3>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: true,
        value: '田林',
        value1: '田林',
        value2: 'tianlin'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .vue-transition {

    button {
      margin-top: 10px;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter-from {
    opacity: 0;
  }

  .fade-leave-to {
    opacity: 0;
  }
</style>

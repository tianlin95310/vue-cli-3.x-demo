<template>
  <div class="index-view">
    <tl-rating score="3" size="1.8em" />

    <tl-mini-step-view :steps="steps" :currentStatus="currentStatus" />

    <tl-index-view style="position: absolute;right: 0;top: 40px;"></tl-index-view>
  </div>
</template>
<script>
  import TlIndexView from './comp/TLIndexView.vue'
  import TlRating from './comp/TlRating.vue'
  import TlMiniStepView from './comp/TlMiniStepView.vue'
  export default {
    components: {
      TlIndexView,
      TlRating,
      TlMiniStepView
    },
    data() {
      return {
        currentStatus: 1,
        steps: [
          '买家付款', '已服务', '交易完成', '案说法'
        ],
        items: [
          'A', 'B', 'C', 'D', 'E', 'F', 'G',
          'H', 'I', 'J', 'K', 'L', 'M', 'N',
          'O', 'P', 'Q', 'R', 'W', 'T',
          'U', 'V', 'W', 'X', 'Y', 'Z'
        ]
      }
    },
    methods: {
      onIndexClick(item) {
        console.log('---onIndexClick---', item)
        this.$refs[item][0].scrollIntoView({
          behavior: 'smooth'
        })
      }
    }
  }
</script>

<style lang="scss">
  .index-view {
    width: 100%;
    height: 100%;
    background-color: #E5E5E5;

    .div-item {
      height: 300px;
      font-size: 4rem;
      text-align: center;
    }

    .index {
      position: fixed;
      right: 17px;
      top: 40px;
      height: calc(100% - 40px);
    }
  }
</style>

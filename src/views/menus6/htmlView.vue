<template>
  <div class="page-container index-view">
    <tl-rating score="4" size="1.8em" />
    <tl-index-view :items="items" style="position: absolute;right: 0;top: 40px;"></tl-index-view>
    <!-- <tl-ministep-view :steps="steps" :current-status="2" /> -->
  </div>
</template>
<script>
  /*eslint-disable*/
  import TlIndexView from './comp/TLIndexView.vue'
  import TlRating from './comp/TlRating.vue'
  import TlMinistepView from './comp/TlMiniStepView.vue'
  export default {
    name: 'HtmlView',
    components: {
      TlIndexView,
      TlRating,
      TlMinistepView
    },
    setup() {
      return {
        steps: ['买家付款', '已服务', '交易完成', '已退款'],
        items: [
          'A', 'B', 'C', 'D', 'E', 'F', 'G',
          'H', 'I', 'J', 'K', 'L', 'M', 'N',
          'O', 'P', 'Q', 'R', 'W', 'T',
          'U', 'V', 'W', 'X', 'Y', 'Z'
        ]
      }
    },
    created() {
      console.log('htmlView---', 'created')
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

<template>
  <div class="page-container html-view">
    <tl-rating score="4" size="1.8em" />
    <tl-index-view :items="items" class="index" />
  </div>
</template>
<script>
  /*eslint-disable*/
  import TlIndexView from './comp/TLIndexView.vue'
  import TlRating from './comp/TlRating.vue'
  export default {
    name: 'HtmlView',
    components: {
      TlIndexView,
      TlRating,
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
  .html-view {
    width: 100%;
    .index {
      position: fixed;
      right: 17px;
      top: 40px;
      height: calc(100% - 40px);
    }
  }
</style>

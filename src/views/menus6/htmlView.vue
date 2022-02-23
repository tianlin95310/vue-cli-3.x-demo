<template>
  <div class="page-container html-view">
    <tl-rating :score="score" size="1.8em" @update="update" />
    <tl-index-view :items="items" class="index" />
  </div>
</template>
<script>
  /*eslint-disable*/
  import TlIndexView from './comp/TLIndexView.vue'
  import TlRating from './comp/TlRating.vue'
  import { ref } from 'vue'
  export default {
    name: 'HtmlView',
    components: {
      TlIndexView,
      TlRating,
    },
    setup() {
      return {
        score: ref(3),
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
      update(v) {
        this.score = v
      },
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

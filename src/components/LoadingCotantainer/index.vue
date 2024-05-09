<template>
  <div v-loadmore="loadMore" load-more-immediate="true" class="loadmore-cotantainer scroll-bar" style="height: 300px;">
    <slot ref="body" name="content"></slot>
    <div v-if="loading" class="loading">加载中...</div>
  </div>
</template>

<script>
import loadMore from './loadmore'
export default {
  directives: {
    loadmore: loadMore
  },
  methods: {
    loadMore() {
      this.loading = true
      this.$emit('loadMore')
    }
  },
  computed: {
    loadingText() {
      if (this.loading) {
        return '加载中...'
      } else if (this.error) {
        return '点击重试...'
      } else if (this.isDone) {
        return '每日更多了...'
      } else {
        return '加载中...'
      }
    }
  },
  data() {
    return {
      loading: false,
      error: false,
      isDone: false
    }
  }
}
</script>

<style>
.loadmore-cotantainer {
  border: 1px solid goldenrod;
  overflow: auto;
}

.loading {
  height: 50px;
  line-height: 50px;
  text-align: center;
}
</style>

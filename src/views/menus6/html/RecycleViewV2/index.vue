<template>
  <div class="recycler-view">
    <div
      class="recycler-item"
      v-for="(item, index) in visibleItems"
      :key="index"
      :style="{ top: getItemTop(index) + 'px' }"
    >
      {{ item }}
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      items: Array.from({ length: 1000 }, (_, i) => `Item ${i}`), // 假设有1000个条目
      height: 0, // RecyclerView的高度
      itemHeight: 50, // 每个条目的高度
      visibleItems: [] // 当前可视区域的条目
    }
  },
  mounted() {
    this.height = this.$el.clientHeight
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    getItemTop(index) {
      const viewTop = this.$el.scrollTop
      const startIndex = Math.floor(viewTop / this.itemHeight)
      return (index - startIndex) * this.itemHeight
    },
    handleScroll() {
      const startIndex = Math.floor(this.$el.scrollTop / this.itemHeight)
      const endIndex = startIndex + Math.ceil(this.height / this.itemHeight)
      console.log('startIndex, endIndex', startIndex, endIndex)
      this.visibleItems = this.items.slice(startIndex, endIndex)
    }
  }
}
</script>
 
<style scoped>
.recycler-view {
  width: 300px;
  height: 500px; /* 设置一个固定的高度 */
  overflow-y: auto;
  position: relative;
}
 
.recycler-item {
  position: absolute;
  width: 100%;
  height: 50px; /* 条目的高度 */
  left: 0;
}
</style>

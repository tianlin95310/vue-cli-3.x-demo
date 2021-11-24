<template>
  <div class="tl-index-view" :style="{width: vWidth}">
    <div v-for="(item, index) in items" :key="index" @click="onIndexClick(item)" :style="{
           color: vColor,
           height: (100 / items.length) + '%',
           lineHeight: '200%'
         }" class="index-item">
      {{item}}
    </div>
  </div>
</template>
<script>
  export default {
    name: 'TlIndexView',
    props: {
      vColor: {
        type: String,
        default: 'grey'
      },
      vWidth: {
        type: String,
        default: '40px'
      }
    },
    data() {
      return {
        items: [
          '*',
          'A', 'B', 'C', 'D', 'E', 'F', 'G',
          'H', 'I', 'J', 'K', 'L', 'M', 'N',
          'O', 'P', 'Q', 'R', 'W', 'T',
          'U', 'V', 'W', 'X', 'Y', 'Z',
          '#'
        ]
      }
    },
    methods: {
      onIndexClick(item) {
        this.$emit('onIndexClick', item)
      }
    },
    created() {
      console.log('---tl-index-view created---', this.vWidth)
    }
  }
</script>

<style lang="scss" scoped>
  .tl-index-view {
    height: 100%;
    background-color: rgba(0, 0, 0, 0.13);

    .index-item {
      user-select: none;
      text-align: center;
      text-decoration: solid;
      cursor: pointer;
    }

    .index-item:hover {
      background: var(--primiryColor) !important;
      color: white !important;
    }
  }
</style>

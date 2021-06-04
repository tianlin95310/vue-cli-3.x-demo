<template>
  <div class="tl-mini-rating" :style="{fontSize: size}">
    <span v-for="value in total" :key="value">
      <span v-if="value <= score" :style="{color: primaryColor}">★</span>
      <span v-else-if="value > score" :style="{color: bgColor}">☆</span>
    </span>
  </div>
</template>
<script>
  export default {
    props: {
      size: {
        default: '1.2em'
      },
      total: {
        default: 5
      },
      score: {
        default: 0
      },
      primaryColor: {
        default: '#F44336'
      },
      bgColor: {
        default: '#F2F2F2'
      }
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .tl-mini-rating {
    width: 100%;
  }
</style>

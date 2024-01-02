<template>
  <div>{{ bindName }}</div>
</template>
<script>
  export default {
    props: {
      bindName: {
        type: [String, Number],
        default: 'aaa'
      }
    },
    methods: {
      showName() {
        console.log('this.bindName', this.bindName)
      }
    }
  }
</script>

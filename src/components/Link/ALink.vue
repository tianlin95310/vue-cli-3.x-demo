<template>
  <a class="this-a" target="_blank" :href="href">{{ title }}</a>
</template>

<script>
  export default {
    name: 'ALink',
    props: {
      href: {
        type: String,
        default: 'https://www.baidu.com'
      },
      title: {
        type: String,
        default: '跳转'
      }
    }
  }
</script>

<style>
  .this-a {
    display: inline-block;
    margin-right: 8px;
  }
</style>

<template>
  <router-link class="highlight link-inline" :to="to">{{ title }}</router-link>
</template>

<script>
  export default {
    name: 'Link',
    props: {
      to: {
        type: String,
        default: '/'
      },
      title: {
        type: String,
        default: '首页'
      }
    }
  }
</script>

<style>
.link-inline {
  display: inline-block;
  font-size: 14px;
}
</style>

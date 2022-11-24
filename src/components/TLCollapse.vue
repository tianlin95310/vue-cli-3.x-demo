<template>
 <div class="tl-collapse">
   <div class="title" @click="hide = !hide">
     <span>{{ title }}</span>
     <i :class="{'i-close': hide}">{{ hide ? '▶' : '▷'}}</i>
   </div>
   <div :class="['content', hide ? 'content-hide': '']">
     <slot name="content"></slot>
   </div>
 </div>
</template>

<script>
  import { reactive, toRefs } from 'vue'
  export default {
    name: 'TLCollapse',
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    setup() {
      const state = reactive({
        hide: true
      })
      return {
        ...toRefs(state)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tl-collapse {
    .content {
      height: auto;
      transition: all 0.5s ease;
      overflow: hidden;
    }
    .content-hide {
      height: 0;
      color: #000;
    }
    .title {
      font-size: 18px;
      margin: 12px 0;
      cursor: pointer;
      font-weight: bold;
      i {
        float: right;
        transition: transform 0.3s ease;
        transform: rotate(90deg);
      }
      .i-close {
        transform: rotate(0deg);
      }
    }
  }
</style>

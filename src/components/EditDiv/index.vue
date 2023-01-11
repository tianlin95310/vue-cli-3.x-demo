<template>
  <div class="edit-div" :contenteditable="canEdit" v-html="innerHTML" placeholder="请输入内容..." @input="changeText"/>
</template>
<script>
  export default {
    name: 'EditDiv',
    props: {
      modelValue: String,
      canEdit: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        innerHTML: this.modelValue
      }
    },
    methods: {
      changeText(value) {
        this.$emit('update:modelValue', value.target.innerHTML)
        this.$emit('change', value.target.innerHTML)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .edit-div {
    width: 100%;
    height: 100%;
    overflow: auto;
    word-break: break-all;
    white-space: pre-wrap;
    outline: none;
    user-select: text;
    text-align: left;
    font-size: 1.5rem;

    /*内容可读写，但粘贴内容中的富文本格式（如文本的颜色、大小，图片等）会丢失*/
    /*attr(placeholder)可以去属性内容，通常用于content*/
    &[contenteditable=true] {
      user-modify: read-write-plaintext-only;

      &:empty:before {
        content: attr(placeholder);
        font-size: 0.9em;
        display: block;
        color: #ccc;
      }
    }
  }
</style>

<template>
  <div class="self-model-ele">
    <h2>自定义一个能使用v-model指令的可编辑div,能带格式复制内容</h2>
    <edit-div v-model="text" :canEdit="canEdit" @change="change"></edit-div>
    <div>输入框的内容：{{ text }}</div>
  </div>
</template>
<script>
  import EditDiv from './comp/editDiv.vue'
  export default {
    components: {
      EditDiv
    },
    data() {
      return {
        text: '111',
        canEdit: true
      }
    },
    methods: {
      change(value) {
        console.log(this.text)
        if (value.length > 100) {
          console.log('------------------')
          this.canEdit = false
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .self-model-ele {
    width: 100%;
    button {
      margin-top: 16px;
    }
  }
</style>

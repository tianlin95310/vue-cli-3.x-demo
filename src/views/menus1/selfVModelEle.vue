<template>
  <div class="self-model-ele page-container">
    <h2>自定义一个能使用v-model指令的可编辑div,能带格式复制内容,max 100</h2>
    <div style="height: 100px">
      <edit-div v-model="text" :canEdit="canEdit" @change="change" />
    </div>

    <div style="height: 100px">
      <edit-div v-model="text2" :canEdit="false" @change="change" />
    </div>
    <div style="white-space: normal;word-break: break-word;width: 100%;">输入框的内容：{{ text }}</div>
  </div>
</template>
<script>
  import EditDiv from '@/components/EditDiv'
  export default {
    components: {
      EditDiv
    },
    data() {
      return {
        text: '',
        text2: 'you can\'t edit me',
        canEdit: true
      }
    },
    methods: {
      change(value) {
        console.log(this.text)
        if (value.length > 200) {
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

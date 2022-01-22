<template>
  <div class="test-child-mod page-container">

    <h2>测试子组件更改父组件的data数据，测试更改父组件数据的方式</h2>
    <div>
      <span class="tag">value1 = {{ value1.value }}</span>
    </div>
    <div>
      <span class="tag">value2 = {{ value2.value }}</span>
    </div>
    <v-model-child v-bind:value="value1"/>
    <not-v-model-child v-bind:value="value2" @change="change"/>

  </div>
</template>

<script>
  import notVModelChild from './comp/notVModelChild.vue'
  import vModelChild from './comp/vModelChild.vue'

  export default {
    components: {
      notVModelChild,
      vModelChild
    },
    methods: {
      show() {
        alert(this.value1.value + ',' + this.value2.value)
      },
      change() {
        this.value2.value = this.value2.value + '111'
      }
    },
    data() {
      return {
        value1: {
          value: 'value1'
        },
        value2: {
          value: 'value2'
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .test-child-mod {
    width: 100%;

    .bt {
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }

    div {
      margin-top: 16px;
    }
  }
</style>

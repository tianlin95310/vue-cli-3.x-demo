<template>
  <div class="third-api">
    <div>
      <img :src="image">
    </div>
    <div>
      <input v-model="input">
      <input type="radio" name="1" label="0" :value="0" @click="onValue(0)">chartEB
      <input type="radio" name="1" label="1" :value="1" @click="onValue(1)">chartEBT
      <input type="radio" name="1" label="2" :value="2" @click="onValue(2)">chartB7B

      <pre style="white-space: pre-wrap;">{{ result }}</pre>
    </div>
    <button class="button" style="height: 40px;" @click="ask">ask</button>
  </div>
</template>
<!-- as-htz6xae5cz -->
<script>
  import request from './request.js'
  import { getImg, chartEB, chartEBT, chartB7B } from './api.js'
  export default {
    data() {
      return {
        image: '',
        result: '',
        input: '',
        methods: [
          chartEB,
          chartEBT,
          chartB7B
        ],
        apiIndex: 0
      }
    },
    created() {
      this.getImg()
    },
    methods: {
      onValue(value) {
        console.log('onValue', value)
        this.apiIndex = value
      },
      ask() {
        this.callApi(this.input)
      },
      callApi(input) {
        this.methods[this.apiIndex]({
          messages: [{
            role: 'user', content: input
          }]
        }).then(({ data }) => {
          this.result = data.result
        })
      },
      getImg() {
        const token = '24.348c4ac9b6ece16a7e92d45a083c6ccc.2592000.1690953577.282335-35317198'
        getImg({
          taskId: '16604822'
        }).then(({ data }) => {
          data = data.data
          this.image = data.img
        }).catch(e => {

        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .third-api {
    display: flex;
    flex-direction: row;
    img {
      width: 200px;
    }
  }
</style>

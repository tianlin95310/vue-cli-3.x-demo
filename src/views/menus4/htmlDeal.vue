<template>
  <div class="html-deal">

    <h2>输入框的处理</h2>
    <div>
      原值<input v-model="number1" />
      {{number1}}
    </div>
    <div>
      oninput替换value<input v-model="number2" type="text" oninput="value = value.replace(/^\D*(\d*(?:\.\d{0,2})?).*$/g, '$1')">
      {{number2}}
    </div>
    <div>
      oninput替换value<input v-model="number3" type="text" oninput="value=value.replace(/[^\d.]/g, '')">
      {{number3}}
    </div>
    <div>
     oninput替换v-model <input v-model="number5" type="text" @input="number5 = number5.replace(/^\D*(\d*(?:\.\d{0,2})?).*$/g, '$1')">{{number5}}
    </div>
  <div>
      自定义指令<input v-model="number4" type="text" v-pnumber>{{number4}}
    </div>
    <div>
      自定义指令<input v-model="number6" type="text" v-number>{{number6}}
    </div>

    <button @click="show" class="button">显示记录的实际值</button>
  </div>
</template>

<script>
  /* eslint-disable*/
  export default {
    data() {
      return {
        number1: '',
        number2: '',
        number3: '',
        number4: '',
        number5: '',
        number6: '1234'
      }
    },
    directives: {
      pnumber: {
        mounted(el, binding) {
          binding.extraEvent = function(v){
            const reg = /^[0-9]+\.?[0-9]{0,2}$/
            if (v.target.value && !reg.test(v.target.value)) {
              v.target.value = v.target.value.replace(/^\D*(\d*(?:\.\d{0,2})?).*$/g, '$1')
              el.dispatchEvent(new Event("input"))
            }
          }
          el.addEventListener('input', binding.extraEvent)
          // console.log('mounted', el, binding.extraEvent)
        },
        unmounted(el, binding) {
          // console.log('unmounted', el, binding.extraEvent)
          el.removeEventListener('input', binding.extraEvent)
        }
      }
    },
    created() {
      // 同步的回调,单线程执行
    },
    methods: {
      onInput(e) {
        console.log(e)
      },
      show() {
        alert(`${this.number1}\n${this.number2}\n${this.number3}\n${this.number5}\n${this.number4}\n${this.number6}\n
        `)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .html-deal {
    padding: 0 16px;

    div {
      margin-top: 10px;
    }
  }
</style>

<template>
  <div>
    <div>
      <button class="button" @click="testStrOp">测试字符串split操作</button>
    </div>
    <div>
      <button class="button" @click="strIndex">js字符串截取</button>
    </div>
    <div>
      <button class="button" @click="jsEmptyToJson">js空串转json</button>
    </div>
    <div>
      <button class="button" @click="strReplace">字符串替换</button>
    </div>

    <div>
      <button class="button" @click="testStart">判断是以某段开头</button>
    </div>

    <div>
      <button class="button" @click="testTeshu">判断是否包含图书字符</button>
    </div>

  </div>
</template>
<script>
  export default {
    methods: {
      testTeshu() {
        const str = '123456'
        alert(str.indexOf('&') !== -1)
      },
      testStart() {
        const str = 'http://asdasdasdasd'
        console.log(str.startsWith('http'))
      },
      strReplace() {
        const str = ' 1 2 3 4 '
        console.log('str---' + str.replace(/\s/g, ''))

        const str1 = ' 1:2:3 4 '
        console.log('str---' + str1.replace(/:/g, '-'))

        const str3 = ' 1/2/3/4 '
        console.log('str---' + str3.replace(/\//g, '*'))
      },
      jsEmptyToJson() {
        const str = ''
        console.log('--- ' + JSON.stringify(str))
      },
      strIndex() {
        const str = '123.jpg'
        const index = str.lastIndexOf('.')
        const newstr = str.substring(index, str.length)
        console.log('---newstr---' + newstr)
      },
      testReg() {
        const s = '00012'
        console.log(s.replace(/\b(0+)/gi, ''))
      },
      testStrOp() {
        const str = '1__'
        console.log('---拆分---' + str.split('_'))
        console.log('---拆分后的长度---' + str.split('_').length)
      }
    }
  }
</script>
<style scoped="scope">
  div>div {
    margin-top: 10px;
  }
</style>

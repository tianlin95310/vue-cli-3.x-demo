<template>
  <div class="page-container">
    <h2>测试js中的数据和Map(控制台查看)</h2>

    <div>
      <button class="button" @click="array_fun">数组的用法</button>
      <br />
      <button class="button" @click="map_fun">Map的用法</button>
      <br />
      <button class="button" @click="obj_fun">Object的用法</button>
      <br />
      <button class="button" @click="testNull">测试空的判断</button>
      <br />
      <button class="button" @click="fun5">或运算</button>
      <br />
      <button class="button" @click="fun6">类型判断</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    created() {},
    methods: {
      /**
       * instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
       * 可以用于判断数据类型
       */
      fun6() {
        const a = ''
        console.log(a instanceof String)
        console.log(typeof a === 'string')
        console.log('------------------------')
        const b = String('1232')
        console.log(b instanceof String)
        console.log(typeof b === 'string')
        console.log('------------------------')
        const c = {}
        console.log(c instanceof Object)
        console.log(typeof c === 'object')
        console.log(typeof c)
        console.log('------------------------')
        const d = new Date()
        console.log(d instanceof Object)
        console.log(typeof d === 'object')
        console.log(typeof d)
        console.log('------------------------')
        const e = new Date()
        console.log(e instanceof Date)
        console.log(typeof e === 'object')
        console.log(typeof e)
        console.log('------------------------')
      },
      fun5() {
        console.log(undefined || 1 - undefined || 2)
        console.log((undefined || 1) - (undefined || 2))
      },
      testNull() {
        let test1
        if (test1) {
          console.log('111111111')
        } else {
          console.log('222222222')
        }
        //        test = undefined
        //        test = null
        const test2 = ''
        console.log(test2)
        if (test2) {
          console.log('33333333333333')
        } else {
          console.log('44444444444444444')
        }
        const test3 = '""'
        console.log('-----' + test3)
        if (test3) {
          console.log('5555555555555')
        } else {
          console.log('6666666666666666')
        }

        const val4 = NaN
        if (val4) {
          console.log('val4---')
        } else {
          console.log('val4 is false')
        }
      },
      array_fun() {
        // 不推荐使用new Array的用法
        var array = []
        // 赋值方式1
        //      for (let i = 0; i < 10; i++) {
        //        array[i] = i
        //      }
        // 赋值方式2
        for (let i = 0; i < 10; i++) {
          array.push(i)
        }
        // 数组的长度
        console.log(array.length)
        // 数组的遍历
        array.forEach((item) => {
          console.log(item)
        })
      },
      map_fun() {
        console.clear()
        var obj = {
          key: '我是key'
        }
        const map = new Map()
        map.set(1, '我是第一个value')
        map.set('2', {
          value: '我是第二个value'
        })
        map.set(obj, '我是第三个value')
        console.log(map.size)
        console.log(map.has(obj))
        map.forEach((k, v) => {
          console.log(k + ' = ' + v)
        })
        console.log('operate map')
        map.delete(obj)
        console.log(map.has(obj))
        map.forEach((k, v) => {
          console.log(k + ' = ' + v)
        })
      },
      obj_fun() {
        // 对于数组
        var obj = {}
        // 自定义的属性，可以用.直接访问
        obj.id = 1
        // 以字符串为key的形式只能用[str名]访问
        // obj['name'] = 'tianlin'
        // Nan为key既可以用.来访问，也可以用[]访问
        obj[NaN] = 'nan'
        // 以object为key只能用[]访问
        obj[obj] = 'obj为key'
        // 输出所有的key
        console.log(obj.id + ', ' + ', ' + obj[NaN] + ', ' + obj[obj])
      }
    }
  }
</script>

<style scoped>
</style>

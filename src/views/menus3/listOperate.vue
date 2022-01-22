<template>
  <div class="page-container">
    <h2>集合的常见操作</h2>
    <div>
      <button class="button" @click="sort">测试数组排序</button>
    </div>
    <div>
      <button class="button" @click="splice">splice(1, 1)</button>
    </div>
    <div>
      <button class="button" @click="spliceNo">splice(0，0)</button>
    </div>
    <div>
      <button class="button" @click="SetArray">不重复的集合Set</button>
    </div>
  </div>
</template>

<script>
  /*eslint-disable*/
  function customCompareASC(propertyName) {
    return function(object1, object2) {
      var value1 = object1[propertyName]
      var value2 = object2[propertyName]
      if (value1 > value2) {
        return 1
      } else if (value1 < value2) {
        return -1
      } else {
        return 0
      }
    }
  }
  export default {
    data() {
      return {}
    },
    methods: {
      SetArray() {
        let set = new Set()
        set.add(12)
        set.add(78)
        set.add(12)
        set.add(34)
        set.add(12)
        console.log(set)

        let set2 = new Set()
        set2.add({
          a: 1
        })
        set2.add({
          a: 2
        })
        set2.add({
          a: 1
        })
        console.log(set2)
      },
      spliceNo() {
        const array = [1, 2]
        array.splice(0, 0)
        console.log(array)
      },
      splice() {
        const array = [1, 2, 3]
        array.splice(1, 1)
        console.log(array)
      },
      sort() {
        const list = [
          {
            name: '12'
          },
          {
            name: 'AB'
          },
          {
            name: 'Cd'
          },
          {
            name: '34'
          },
          {
            name: ''
          }
        ]
        console.log(list.sort(customCompareASC('name')).map((item) => item.name))
      }
    }
  }
</script>

<style scoped>
  div>div {
    margin-top: 10px;
  }
</style>

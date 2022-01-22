<template>
  <div class="algorithm page-container">

    <div>
      <h2>列表得到笛卡尔积（组合）</h2>
      {{ comb() }}
    </div>

    <div>
      <h2>列表数据得到树形数据</h2>
      {{ treeData() }}
    </div>
  </div>

</template>
<script>
  /*eslint-disable*/
  import {
    Cartesian
  } from './util/Algorithm'
  import {
    treeDataTranslate
  } from './util/TreeData'
  export default {
    name: 'Algorithm',
    data() {
      return {
        abc: 'asdasd'
      }
    },
    methods: {
      treeData() {
        let array = [{
            id: 1,
            parentId: '0'
          },
          {
            id: 2,
            parentId: '0'
          },
          {
            id: 3,
            parentId: '0'
          },
          {
            id: 4,
            parentId: '2'
          },
          {
            id: 5,
            parentId: '2'
          },
          {
            id: 6,
            parentId: '3'
          }
        ]
        return treeDataTranslate(array)
      },
      comb() {
        let array = [
          ['a', 'b'],
          [1, 2, 3],
          ['x', 'y']
        ]
        return Cartesian(array)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .algorithm {
    > div {
      vertical-align: top;
      display: inline-block;
      width: 25%;
      white-space: pre;
      word-break: break-all;
    }
  }
</style>

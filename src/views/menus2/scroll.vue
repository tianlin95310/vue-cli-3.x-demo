<template>
  <div class="scroll-info page-container">
    <div ref="table" id="table" class="table">
      <div class="content" @click="show = true">
        我是可以滑动的行内容
      </div>
    </div>

    <div id="custom-scroll" class="custom-scroll">
      <div :style="{left: left + 'px'}" class="my-scroll"></div>
    </div>

    <t-l-dialog v-model="show">
      <template v-slot:content>
        <div style="width: 100px;height: 100px;background-color: #cccccc">我是谁</div>
      </template>
    </t-l-dialog>
  </div>

</template>

<script>

// let s1 = this.$refs.scrollTop.wrap
// let s2 = this.$refs.multipleTable.bodyWrapper
// let c1 = this.$refs.scrollContent
// let c2 = document.getElementsByClassName('el-table__header')[0]
// this.$nextTick(() => {
//   c1.style.width = c2.style.width
// })
// s1.addEventListener('scroll', function (e) {
//   s2.scrollLeft = s1.scrollLeft
// })
// s2.addEventListener('scroll', function (e) {
//   s1.scrollLeft = s2.scrollLeft
// })
  import TLDialog from 'comp/TLDialog'

  export default {
    name: 'Scroll',
    data() {
      return {
        left: 0,
        show: false
      }
    },
    components: {
      TLDialog
    },
    created() {
      console.log('scroll created')
    },
    mounted() {
      const table1 = this.$refs.table
      const table2 = document.getElementById('table')
      const custom = document.getElementById('custom-scroll')
      console.log('scroll mounted', table1, table2, custom)
      const width = custom.clientWidth
      const scrollW = table1.clientWidth / (table1.scrollWidth / table1.clientWidth)
      table1.onscroll = (event) => {
        this.left = event.target.scrollLeft / (width - width / 2) * (event.target.scrollWidth - scrollW)
        console.log(scrollW, width, event.target.scrollLeft, this.left)
      }
      custom.onmousemove = (event) => {
        console.log(event.clientX)
        this.left = event.offsetX
        table1.scrollLeft = this.left * (width - width / 2) / (event.target.scrollWidth - scrollW)
      }
    }
  }

</script>

<style lang="scss" scoped>
.scroll-info {
  width: 100%;
  .custom-scroll {
    margin: 16px 0;
    width: 100%;
    background: #6f7a84;
    position: relative;
    height: 20px;
    .my-scroll {
      position: absolute;
      height: 20px;
      background: #42b983;
      width: 50%;
    }
  }
  .table {
    width: 100%;
    overflow: auto;

    .content {
      width: 2000px;
      height: 2000px;
      background: url("../../assets/logo.png") repeat;
    }
  }

}
</style>

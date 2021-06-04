<template>
  <div>
    <div>
      必须要有分隔符，才能识别字符串时间：{{date1}}
    </div>
    <br />
    <div>
      数字类的时间戳： {{date2}}
    </div>

    <br />
    <div>
      字符串类的时间戳： {{date3}}
    </div>

    <br />
    <div>
      数字类的时间戳： {{date4}}
    </div>
    <br />
    <div>
      指定日期加1天： {{date5}}
    </div>
    <br />
    <div>
      明天是： {{date6}}
    </div>
    <br />
    <div>
      日期差： {{date7}}
    </div>

  </div>
</template>

<script>
  // 3种方式导入js代码
  import dateFormat from '../../utils/DateFormat'
  // require('../../utils/DateExtend')
  import '../../utils/DateExtend'
  export default {
    computed: {
      date7() {
        // 结束时间
        const date3 = 1 * 24 * 3600000
        // 时间差的毫秒数
        // 计算出相差天数
        const days = Math.floor(date3 / (24 * 3600 * 1000))
        // 计算出小时数
        const leave1 = date3 % (24 * 3600 * 1000)
        // 计算天数后剩余的毫秒数
        const hours = Math.floor(leave1 / (3600 * 1000))
        // 计算相差分钟数
        const leave2 = leave1 % (3600 * 1000)
        // 计算小时数后剩余的毫秒数
        const minutes = Math.floor(leave2 / (60 * 1000))
        // 计算相差秒数
        const leave3 = leave2 % (60 * 1000)
        // 计算分钟数后剩余的毫秒数
        const seconds = Math.round(leave3 / 1000)
        return ' 相差 ' + days + '天 ' + (hours + 24 * days) + '小时 ' + minutes + ' 分钟' + seconds + ' 秒'
      },
      date6() {
        const today = new Date()
        today.setDate(today.getDate() + 1)
        return today.format('yyyy-MM-dd') + today.nowFewWeeks()
      },
      date5() {
        const date = new Date('2019-2-28')
        date.setDate(date.getDate() + 1)
        return date.format('yyyy-MM-dd') + date.nowFewWeeks()
      },
      date4() {
        const date = new Date(parseInt('1534262400000'))
        return dateFormat.format(date, 'yyyy-MM-dd HH:mm:ss')
      },
      date3() {
        const date = new Date('1534262400000')
        return dateFormat.format(date, 'yyyy-MM-dd HH:mm:ss')
      },
      date2() {
        const date = new Date(1553875200000)
        return dateFormat.format(date, 'yyyy-MM-dd HH:mm:ss')
      },
      date1() {
        // 必须要有分隔符，才能识别字符串时间
        const date = new Date('2017-10-20')
        return date.format('yyyy-MM-dd')
      }
    }
  }
</script>

<style>

</style>

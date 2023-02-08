<template>
  <t-l-collapse title="3,JS问题">
    <template v-slot:content>
      <pre>
        1，encodeURIComponent和encodeURI的区别
          使用encodeURI()编码后的结果是除了空格之外的其他字符都原封不动，只有空格被替换成了%20。而encodeURIComponent()方法则会使
          用对应的编码替换所有非字母数字字符。这也正是可以对整个URI使用encodeURI()，而只能对附加在现有URI后面的字符串使用
          encodeURIComponent()的原因所在。一般来说,我们使用encodeURIComponent()方法的时候要比使用encodeURI()更多,因为在实践
          中更常见的是对查询字符串参数而不是对基础URL进行编码。

        2，call，apply，bind的区别和用法
          都能改变this的，函数里的this是哪个对象由调用时传的参数决定，不传的话就是调用者自身

        3，?.和??的功能
          支持链式访问判断，如果?.左边的值为空，取对象的话不会报错，表达式直接返回undefined，后面的停止执行，而??左边为空的话
          表达式的值等于右边的值

        11，Map与Object的区别
          Object的key必须是简单类型，而Map的key可以为对象，所以Map不支持json而Object可以
          Map的key，Value添加时有顺序的，而Object则没有这个说法，
          属性删除较密集的时候使用Map，delete Object属性的效率低
          属性多Map的性能更好，特别是key未知的情况下，Map又方便的遍历迭代器API

        12，Object的静态方法
          Object.freeze(obj)可以冻结对象的，防止对象的值被修改如果是大数据量的数据，对于纯展示的大量数据，可以提高效率
          Object.entries() 产生迭代器，方便遍历
          Object.keys() 产生迭代器，方便遍历

        6，普通函数和箭头函数的区别
          普通函数的this指向对象本省，可以作为构造函数，箭头函数都是匿名函数，不能作为构造函数

        7，Promise的静态方法
          见标签<router-link class="highlight link-inline" to="/menu4/promiseUse">[4] 工具的使用-Promise的使用</router-link>

        9，宏任务和微任务以及Promise
          setTimeout,setInter属于宏任务，Promise的构造阶段属于主线程同步快，then的处理属于微任务
          主线程同步代码 > 微任务 > 宏任务

        14，Symbol类的使用
          Symbol用作来解决Object字符串作为可能出现重复而覆盖的问题，Symbol可以作为Object的key

        15，js单例模式的实现
          1，使用闭包直接添加方法属性
          2，使用class添加静态方法
          详见函数界面

        16，TS里的一些东西
     </pre>
    </template>
  </t-l-collapse>
</template>

<script>
  import TLCollapse from '@/components/TLCollapse.vue'
  export default {
    name: 'a3JS',
    components: {
      TLCollapse
    }
  }
</script>

<style>
</style>

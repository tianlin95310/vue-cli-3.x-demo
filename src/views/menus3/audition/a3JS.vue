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

        4，Map与Object的区别
          Object的key必须是简单类型，而Map的key可以为对象，所以Map不支持json而Object可以
          Map的key，Value添加时有顺序的，而Object则没有这个说法，
          属性删除较密集的时候使用Map，delete Object属性的效率低
          属性多Map的性能更好，特别是key未知的情况下，Map又方便的遍历迭代器API

        5，Object的静态方法
          Object.freeze(obj)可以冻结对象的，防止对象的值被修改如果是大数据量的数据，对于纯展示的大量数据，可以提高效率
          Object.entries() 产生迭代器，方便遍历
          Object.keys() 产生迭代器，方便遍历

        6，普通函数和箭头函数的区别
          普通函数的this指向对象本省，可以作为构造函数，箭头函数都是匿名函数，不能作为构造函数

        7，Promise的静态方法
          见标签<router-link class="highlight link-inline" to="/menu4/promiseUse">[4] 工具的使用-Promise的使用</router-link>

        8，js 闭包的理解
          就是函数内部定义函数，会使得外部函数的变量的作用域提升，会占用堆栈内存

        9，宏任务和微任务以及Promise,以及process.nextTick()
          setTimeout,setInter属于宏任务，Promise的构造阶段属于主线程同步快，then的处理属于微任务
          主线程同步代码 > process.nextTick() > 微任务 > 宏任务

        10，js的继承
          1，原型链继承：无法实现多继承
          2，构造继承：只继承父类的属性和方法，没有继承原型的属性和方法
          3，组合继承：生成了两次父类构造函数，生成了两次实例
          4，寄生组合继承：通过寄生方式，砍掉父类的实例属性，相当于减少了一次实例化
          <ALink href="https://blog.csdn.net/ABCFF12333/article/details/118066338" title="继承" />

        11，原型和原型链
          原型相当于一个类的定义，Object.getPrototypeOf 可以获取某个对象类的原型，即创建该对象的类的定义（代码块），他的值
          等于该类名（构造函数名）.prototype，而该值本身也是一个对象，也可以通过Object.getPrototypeOf获取当前这个prototype对象的原型，此时的值
          应等于父类名.prototype，知道找到Object一级，而Object.getPrototypeOf(Object.prototype) === null
          原型中有一个constructor是构造器函数，而原型也有属于自己的

        12，js的事件机制
          事件捕获阶段
          事件命中阶段
          事件冒泡阶段

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

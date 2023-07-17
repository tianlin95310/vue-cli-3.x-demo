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
          1、改变 this 的指向
          2、借用别的对象的方法，
          3、调用函数，因为 apply，call 方法会使函数立即执行

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
          getPrototypeOf() 获取一个对象的原型对象
          var A = Object.create(A.prototype);

        6，普通函数和箭头函数的区别
          普通函数的this指向对象本省，可以作为构造函数，箭头函数都是匿名函数，不能作为构造函数

        7，Promise的静态方法
          见标签<Link to="/menu4/promiseUse" title="Promise的使用" />

        8，js 闭包的理解
          就是函数内部定义函数，会使得外部函数的变量的作用域提升，会占用堆栈内存

        9，宏任务和微任务以及Promise,以及process.nextTick()
          setTimeout,setInter属于宏任务，Promise的构造阶段属于主线程同步快，then的处理属于微任务
          主线程同步代码 > 微任务 > process.nextTick() > 宏任务

        10，js的继承
          1，原型链继承：无法实现多继承
          2，构造继承：只继承父类的属性和方法，没有继承原型的属性和方法
          3，组合继承：生成了两次父类构造函数，生成了两次实例
          4，寄生组合继承：通过寄生方式，砍掉父类的实例属性，相当于减少了一次实例化

          <Link to="/menu3/func" title="继承实例" /><ALink href="https://blog.csdn.net/ABCFF12333/article/details/118066338" title="继承参考文档" />

        11，对象的原型对象和原型链
          getPrototypeOf(obj) === __proto__ = true
          js里面函数对象和普通对象是有区别的，普通对象没有prototype属性，函数对象有，函数的原型对象包含函数自身(constructor)以及
          函数的原型对象的原型对象，原型对象是用来产生普通对象的，js的继承本质上是一种委托

          原型对象相当于一个类的定义（创建对象，为对象赋值提供方法等操作），Object.getPrototypeOf可以获取某个对象的原型对象，值等于该类名（即构造函数，函数名也是一个对象）.prototype，
          对象的原型他也是一个对象，也可以通过Object.getPrototypeOf获取当前这个原型对象的原型，此时的值
          应等于父类名.prototype，直到找到Object一级，而Object.getPrototypeOf(Object.prototype) === null
          对象自身有一个constructor属性，他是构造函数（其他语言中函数本身也是一个对象），
          原型对象中也有一个constructor是构造器函数，也有属于自己的prototype

        12，js的事件机制
          事件捕获阶段
          事件命中阶段
          事件冒泡阶段

        13，获取js的属性
          for（let I in obj）该方法依次访问一个对象及其原型链中所有可枚举的类型
          object.keys:返回一个数组，包括所有可枚举的属性名称
          object.getOwnPropertyNames:返回一个数组包含不可枚举的属性

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

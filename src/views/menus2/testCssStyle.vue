<template>
  <div class="test-css-style page-container">
    <h2>测试css的属性</h2>
    <div class="parent">
      <p class="test">我在父块的右下角</p>
    </div>

    <div class="test-before">
      我的div
    </div>

    <div style="background: white;display: inline-block;width: 300px;height: 200px;vertical-align: middle;text-align: center">
      <div style="background: #D42D00;width: 50%;text-align: center;margin: 0 auto;">div水平居中</div>
    </div>

    <div style="background: white;display: inline-block;width: 300px;height: 200px;vertical-align: middle;text-align: center;margin-left: 1px">
      <div style="background: #D42D00;height: 50%;width: 50%;text-align: center;margin: 50px auto;">已知父高度和自身高度实现竖直居中</div>
    </div>
    <div>
      <div style="width: 39%;background: red;display: inline-block">我占39%</div>
      <div style="width: 70%;background: blue;display: inline-block">我占70%</div>
    </div>

    <!--width: 50% 各种50%却换行的问题，是因为两个字div出现了空白间隙-->
    <!--原理：多出来的其实是换行符，所以将字体设置为0，那么换行符就是0px不会显示了。但是如果将HTML标签写成一行的话，就没有换行符了。-->
    <div style="width: 100%;">
      <div style="width: 50%;background: red;display: inline-block;font-size: 12px">我占50%</div>
      <div style="width: 50%;background: blue;display: inline-block;font-size: 12px">我占50%</div>
    </div>
    <div class="test-float">
      <span class="left">111</span>
      <span class="left">222</span>
      <span>111</span>
      <span>测试元素的浮动属性</span>
      <div>333</div>
      <div class="clearfix">666</div>
      <span class="right-not-line-l">555</span>
      <div class="clearfix-before">666</div>
      <span class="right">777</span>
    </div>

  </div>
</template>

<script>
  export default {

  }
</script>
<style lang="scss">
  .test-css-style {
    background-color: var(--primiryColor);
    color: white;

    .test-float {
      height: 80px;
      background: #D42D00;
      .left {
        float: left;
        color: black;
      }
      .right-not-line-l {
        float: right;
        color: black;
      }
      .right {
        line-height: 40px;
        float: right;
        color: black;
      }
    }
    .test-before {
      display: inline-block;
      height: 120px;
      width: 120px;
      position: relative;
      line-height: 120px;
      background: lightgrey;
      vertical-align: middle;
    }
    /*::after不在dom上，不能响应事件*/
    .test-before::after {
      content: '\2715';
      position: absolute;
      cursor: pointer;
      right: -6px;
      line-height: 0px;
    }
  }

  .parent {
    position: relative;
    width: 200px;
    height: 100px;
    display: inline-block;
    background: yellow;
    font-size: 0.7rem;
    vertical-align: middle;

    .test {
      color: #0f131c;
      position: absolute;
      right: 0;
      bottom: 0;
      display: block;
    }

  }
</style>

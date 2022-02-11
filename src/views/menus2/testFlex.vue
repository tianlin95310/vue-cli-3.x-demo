<template>
  <div class="test-flex page-container">
    <div class="left1">
      <h2>测试flex布局，特别是在竖直方向上</h2>
      <div class="top">
        我是top内容，我占剩下的空间
      </div>
      <div class="bottom">
        我是底部内容，我占100px
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>

<style lang="scss" scoped>
  .test-flex {
    color: white;
    background-color: var(--colorAccent);

    /*想让flex竖直方向占满需要使用height: 100vh;*/
    .left1 {
      position: relative;
      width: 50%;
      display: flex;
      height: 100%;
      flex-direction: column;
      .top {
        flex: 1;
        background-color: var(--primiryColorDark);
      }
      .bottom {
        background-color: var(--primiryColor);
        height: 100px;
      }
    }

  }
</style>

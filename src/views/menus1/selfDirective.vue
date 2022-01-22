<template>
  <div class="self-directive page-container">
    <h2>测试使用自定义指令，前面加v-</h2>

    <div class="move-able" :style="{left: left + 'px', top: top + 'px'}" @mousedown="mousedown" @mousemove="mousemove"
      @mouseup="mouseup">
      <span>视频自动播放</span>
      <video v-autoplay muted>
        <source src="@/assets/video/demo.mp4" type="video/mp4" />
      </video>
    </div>

    <div>
      输入框自动获取焦点：
      <input v-focus />
    </div>
    <div v-randomcolor>随机颜色</div>
  </div>
</template>
<script>
  export default {
    directives: {
      randomcolor: {
        mounted: function(el) {
          console.log('---randomcolor inserted---', el)
          const random = Math.ceil(Math.random() * 0xffffff)
          el.style.color = '#' + random.toString(16)
        }
      },
      autoplay: {
        mounted: function(el) {
          console.log('---autoplay inserted---', el)
          if (el) {
            el.play()
          }
        }
      },
      focus: {
        // 指令的定义
        created: function(el, binding) {
          // console.log('---focus created', el)
        },
        beforeMount: function(el) {
          // console.log('---focus beforeMount', el)
        },
        mounted: function(el) {
          console.log('---focus mounted', el)
          el.focus()
        },
        beforeUpdate: function(el) {
          // console.log('---focus beforeUpdate', el)
        }
      }
    },
    methods: {
      mouseup(ev) {
        console.log('mouseup')
        this.isDown = false
      },
      mousemove(ev) {
        if (!this.isDown) {
          return
        }
        const dx = ev.clientX - this.mouseX
        const dy = ev.clientY - this.mouseY
        console.log('mousemove', ev.clientX, this.mouseX)
        console.log('mousemove', dx, dy)
        this.left += dx
        this.top += dy
        this.mouseX = ev.clientX
        this.mouseY = ev.clientY
      },
      mousedown(ev) {
        console.log('mousedown')
        this.mouseX = ev.clientX
        this.mouseY = ev.clientY
        this.isDown = true
      }
    },
    data() {
      return {
        left: 800,
        top: 0,
        mouseX: 0,
        mouseY: 0,
        isDown: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .self-directive {
    position: relative;
    .move-able {
      position: absolute;
      background-color: aqua;
      text-align: center;
      line-height: 200px;
      cursor: pointer;
      user-select: none;
      opacity: 0.8;
      video {
        position: absolute;
        width: 200px;
        height: 200px;
        border-radius: 100%;
      }
      span {
        z-index: 100;
        font-size: 1rem;
        color: white;
        width: 200px;
        display: inline-block;
        position: absolute;
      }
    }
  }
</style>

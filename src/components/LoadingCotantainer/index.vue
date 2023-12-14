<template>
  <div
    v-loadmore="loadMore"
    class="loadmore-cotantainer scroll-bar"
    style="height: 300px;"
  >
    <slot ref="body" name="content"></slot>
    <div v-if="loading" class="loading">加载中...</div>
  </div>
</template>

<script>
/*eslint-disable */
export default {
  directives: {
    loadmore: {
      mounted(el, binding) {
        const wrapper = el;
        const body = wrapper.children[0];
        console.log('loadmore mounted', wrapper, body)

        const immediate = binding.modifiers.immediate || false;
        let lastScrollTop = 0
        wrapper.scrollFun = function() {
          const sign = 20
          if (this.scrollTop === 0) {
            binding.value && binding.value('up', this)
            return false
          }
          if (lastScrollTop !== this.scrollTop) {
            lastScrollTop = this.scrollTop
            const distanceToBottom = this.scrollHeight - this.scrollTop - this.clientHeight
            if (distanceToBottom <= sign) {
              binding.value && binding.value('down', this)
            }
          }
        }
        const resizeObserver = new MutationObserver(() => {
          const containerHeight = wrapper.getBoundingClientRect().height;
          const bodyHeight = body.getBoundingClientRect().height;
          console.log('containerHeight', containerHeight, 'bodyHeight', bodyHeight)
          if (bodyHeight.clientHeight !== 0 && bodyHeight <= containerHeight) {
            binding.value && binding.value('initial')
          }
        })
        wrapper.resizeObserver = resizeObserver
        if (immediate) {
          binding.value && binding.value('immediate')
        }
        if (wrapper) {
          if (body) {
            resizeObserver.observe(body, {
              attributes: true,
              childList: true,
              subtree: true
            })
          }
          wrapper.addEventListener('scroll', wrapper.scrollFun)
        }
      },
      unmounted(el) {
        const wrapper = el
        if (el.resizeObserver) {
          el.resizeObserver.disconnect()
        }
        if (wrapper) {
          wrapper.removeEventListener('scroll', el.scrollFun)
        }
      }
    }
  },
  methods: {
    loadMore(param, who) {
      this.loading = true
      this.$emit('loadMore', param, who)
    }
  },
  data() {
    return {
      loading: false
    }
  },
};
</script>

<style>
.loadmore-cotantainer {
  border: 1px solid goldenrod;
  overflow: auto;
}
.loading {
  height: 50px;
  line-height: 50px;
  text-align: center;
}
  
</style>

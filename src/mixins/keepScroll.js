/**
 * you must provide getEL to get the element
 */

export default {
  data() {
    return {
      scrollTop: 0
    }
  },
  mounted() {
    this.getEL().addEventListener('scroll', this.onScrollElScroll)
  },
  beforeDestroy() {
    this.getEL().addEventListener('scroll', this.onScrollElScroll)
  },
  methods: {
    onScrollElScroll(e) {
      this.scrollTop = e.target.scrollTop
    },
    getEL() {
      return document.getElementsByTagName('body')[0]
    }
  }
}

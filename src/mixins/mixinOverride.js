export default {
  data() {
    return {
      str: 'mixin value'
    }
  },
  created() {
    console.log('mixin created', 'str =', this.str)
  },
  methods: {
    funA() {
      console.log('fun A called: mixin funA', 'str =', this.str)
    }
  }
}

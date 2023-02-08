<template>
  <div ref="htmlSafety" class="page-container">
    <component v-for="(comp, index) in comps" v-bind:is="comp" :key="index"></component>
  </div>

</template>

<script>
  import TLCollapse from '@/components/TLCollapse.vue'
  import comps from './audition'
  import keepScroll from '@/mixins/keepScroll.js'
  export default {
    name: 'HtmlSafety',
    data() {
      return {
        comps: [
          'a1Safe', 'a2Css', 'a3JS', 'a4Vue', 'a5Compatible',
          'a6Plugin', 'a7SoftEng', 'a8ConfigEx'
        ]
      }
    },
    mixins: [keepScroll],
    components: {
      TLCollapse,
      ...comps
    },
    activated() {
      console.log('activated')
      this.getEL().scrollTop = this.scrollTop
    },
    deactivated() {
      console.log('deactivated')
    },
    methods: {
      getEL() {
        return this.$refs.htmlSafety
      }
    }
  }
</script>

<style scoped>

</style>

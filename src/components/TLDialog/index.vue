<template>
  <div v-show="modelValue" class="tl-dialog-mask" @click.self="onMaskClick">
    <div v-if="modelValue" class="tl-dialog-body">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TLDialog',
    props: {
      modelValue: {
        type: Boolean,
        default() {
          return false
        }
      }
    },
    methods: {
      onMaskClick() {
        console.log('onMaskClick')
        this.$emit('update:modelValue', false)
      }
    }
  }
</script>

<style scoped>
.tl-dialog-mask {
  z-index: 3000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(116, 113, 113, 0.71);
}

.tl-dialog-body {
  position: relative;
  background: white;
  width: 50%;
  height: auto;
  margin: 0 auto;
  margin-top: 15vh;
}
</style>

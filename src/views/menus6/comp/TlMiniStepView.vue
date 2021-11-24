<template>
  <div class="tl-mini-step-view">
    <div class="step">
      <div v-for="(step, index) in steps" :key="index" :style="{width: (100 / steps.length - 1.4) + '%'}"
        class="step-info">
        <div>
          <div :style="{flex: 0.4,
               display: 'inline-block',
               'text-align': index === steps.length - 1 ? 'right' : 'center',
               color: index <= currentStatus ? '#0FBD0C' : 'grey'}">
            <di>{{ step }}</di>
            <div>●</div>
          </div>
          <div v-if="index !== steps.length - 1"
            :style="{'border-bottom': index <= currentStatus ? '1px solid #0FBD0C' : '1px solid gainsboro', flex: 1}"
            class="line" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'TlMinistepView',
    props: {
      currentStatus: {
        type: Number,
        default() {
          return 0
        }
      },
      steps: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tl-mini-step-view {
    .step {
      padding: 12px 16px;

      .step-info {
        display: inline-block;

        >div {
          display: flex;
          flex-direction: row;

          div {
            &:first-child {
              display: inline-block;
            }
          }

          .line {
            display: inline-block;
            vertical-align: text-bottom;
          }
        }
      }
    }
  }
</style>

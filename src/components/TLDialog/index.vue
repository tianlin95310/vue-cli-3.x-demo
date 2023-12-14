<template>
  <div
    v-show="modelValue"
    class="tl-dialog-mask"
    @click="onMaskClick"
  ></div>

  <div v-show="modelValue" class="tl-dialog-wrapper" v-draggable>
    <div class="tl-dialog-title">
      <span>{{ tableTitle }}</span>
    </div>
    <slot name="content" />
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "TLDialog",
  directives: {
    draggable: {
      mounted(el, binding) {
        console.log("draggable mounted", el, binding);
        const dialogWrapper = el.querySelector(".tl-dialog-wrapper") || el;
        const dialogHeader = el.querySelector(".tl-dialog-title");
        console.log(dialogWrapper.style, dialogHeader.style);
        dialogHeader.style.cursor = "move";
        const wrapperStyle =
          dialogWrapper.__style || window.getComputedStyle(dialogWrapper, null);

        const moveDown = e => {
          let startX = e.clientX;
          let startY = e.clientY;
          const clientWidth = document.body.clientWidth;
          const clientHeight = document.body.clientHeight;

          let currentX, currentY;
          if (wrapperStyle.left.includes("%")) {
            currentX =
              (clientWidth * +wrapperStyle.left.replace(/\\%/g, "")) / 100;
            currentY =
              (clientHeight * +wrapperStyle.top.replace(/\\%/g, "")) / 100;
          } else {
            currentX = +wrapperStyle.left.replace(/\px/g, "");
            currentY = +wrapperStyle.top.replace(/\px/g, "");
          }
          console.log("currentX", currentX, "currentY", currentY);

          document.onmousemove = function(e) {
            let dx = e.clientX - startX;
            let dy = e.clientY - startY;
            let newX = currentX + dx;
            let newY = currentY + dy;
            if (newX < 0) {
              newX = 0;
            }
            if (newX > clientWidth - dialogWrapper.clientWidth) {
              newX = clientWidth - dialogWrapper.clientWidth;
            }
            if (newY < 0) {
              newY = 0;
            }
            if (newY > clientHeight - dialogWrapper.clientHeight) {
              newY = clientHeight - dialogWrapper.clientHeight;
            }
            console.log("dx", dx, "dy", dy, "newX", newX, "newY", newY);
            dialogWrapper.style.left = `${newX}px`;
            dialogWrapper.style.top = `${newY}px`;
          };
          const onCancel = function() {
            document.onmousemove = null;
            document.onmouseup = null;
            document.onmouseout = null;
          };
          document.onmouseup = onCancel;
          // document.onmouseout = onCancel
        };
        dialogHeader.onmousedown = moveDown;
      },
      unmounted() {}
    }
  },
  props: {
    modelValue: {
      type: Boolean,
      default() {
        return false;
      }
    },
    tableTitle: {
      type: String,
      default: "标题"
    },
    appendToBody: {
      type: Boolean,
      default: false
    }
  },
  created() {},
  mounted() {
    if (this.appendToBody) {
      this.$nextTick(() => {
        this.appendToBodyM();
      });
    }
  },
  methods: {
    appendToBodyM() {
      let domDialogMask = document.querySelector(".tl-dialog-mask");
      let domDialogBody = document.querySelector(".tl-dialog-wrapper");
      console.log("domDialogMask", domDialogMask, domDialogBody);
      if (domDialogMask && domDialogBody) {
        domDialogMask.parentElement.removeChild(domDialogMask);
        domDialogBody.parentElement.removeChild(domDialogBody);
        document.body.append(domDialogMask);
        document.body.append(domDialogBody);
      }
    },
    onMaskClick() {
      console.log("onMaskClick");
      this.$emit("update:modelValue", false);
    }
  }
};
</script>

<style scoped>
.tl-dialog-title {
  height: 50px;
  width: 100%;
  text-align: left;
  line-height: 50px;
}
.tl-dialog-mask {
  z-index: 3000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(116, 113, 113, 0.71);
}

.tl-dialog-wrapper {
  z-index: 3001;
  position: fixed;
  background: white;
  width: 50%;
  height: auto;
  top: 15vh;
  left: 25%;
  text-align: center;
}
</style>

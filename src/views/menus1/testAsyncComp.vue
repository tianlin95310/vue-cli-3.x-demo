<template>
  <!-- 写在这里会顶替RouterView的内容,让页面结构失去RouterView -->
  <div class="async-comp page-container">
    <!-- <Suspense>
     <Content></Content>

     <template #fallback>
       <div style="height: 300px;line-height: 300px;">Loading...</div>
     </template>
   </Suspense> -->
    <!-- <AsyncComp></AsyncComp> -->
    <!-- <SyncComp></SyncComp> -->
    <!-- <Content></Content> -->
    123123
  </div>
</template>
<script>
/*eslint-disable*/
// import { defineAsyncComponent } from "vue";
// import loading from "./asyncComp/loading.vue";
// import error from "./asyncComp/error.vue";
// import Content from "./asyncComp/content.vue";
// const AsyncComp = defineAsyncComponent({
//   loader: Content,
//   loadingComponent: loading,
//   errorComponent: error,
//   delay: 200,
//   timeout: 2000,
//   suspensible: false,
//   onError: err => {
//     console.log("defineAsyncComponent err", err);
//   }
// });
export default {
  name: 'AsyncComp',
  components: {
    // AsyncComp: AsyncComp,
    // 'SyncComp': loading,
    // Content
  },
  created() {
    console.log('AsyncComp', 'AsyncComp created')
  },
};
</script>

<style>
.async-comp {
  background-color: aquamarine;
}
</style>

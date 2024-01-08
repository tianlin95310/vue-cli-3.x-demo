<template>
  <div class="async-comp page-container">
    <!-- 写在这里会顶替RouterView的内容,让页面结构失去RouterView -->
    <Suspense>
      <AsyncComp></AsyncComp>
      <template #fallback>
        <Loading />
      </template>
    </Suspense>

    <Suspense>
      <AsyncCompWithSuspense></AsyncCompWithSuspense>
      <template #fallback>
        <Loading />
      </template>
    </Suspense>

    <AsyncCompSyncontent />
    
  </div>
</template>
<script>
/*eslint-disable*/
import { defineAsyncComponent } from "vue";
import Loading from "./asyncComponent/loading.vue";
import Error from "./asyncComponent/error.vue";
import AsyncCompWithSuspense from "./asyncComponent/content-async.vue";
const AsyncComp = defineAsyncComponent({
  loader: () =>
    import("./asyncComponent/content-async-comp.vue").finally(() => {
      console.log("defineAsyncComponent finally");
    }),
  loadingComponent: Loading,
  errorComponent: Error,
  delay: 200,
  timeout: 2000,
  suspensible: false,
  onError: err => {
    console.log("defineAsyncComponent err", err);
  }
});
const AsyncCompSyncontent = defineAsyncComponent({
  loader: () =>
    import("./asyncComponent/content-sync.vue").finally(() => {
      console.log("defineAsyncComponent finally");
    }),
  loadingComponent: Loading,
  errorComponent: Error,
  delay: 2002,
  timeout: 2000,
  suspensible: false,
  onError: err => {
    console.log("defineAsyncComponent err", err);
  }
});
export default {
  name: "TestAsyncComp",
  components: {
    AsyncComp,
    AsyncCompWithSuspense,
    AsyncCompSyncontent,
    Loading
  },
  created() {
    console.log("AsyncComp", "AsyncComp created");
  }
};
</script>

<style>
.async-comp {
  background-color: aquamarine;
  position: relative;
}
</style>

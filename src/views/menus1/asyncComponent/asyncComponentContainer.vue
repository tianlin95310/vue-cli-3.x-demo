<template>
  <Suspense>
    <slot name="child"></slot>
    <template #fallback>
      <Loading />
    </template>
  </Suspense>
</template>
<script setup>
/* eslint-disable */
import Loading from "./loading.vue";
</script>

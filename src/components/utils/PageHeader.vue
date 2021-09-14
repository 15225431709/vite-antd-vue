<template>
  <div class="header">
    <a-page-header
      title="工作台"
      :breadcrumb="{ routes }"
    />
    <slot name="content"></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
const routes: Array<any> = [
  {
    path: "index",
    breadcrumbName: "First-level Menu",
  },
  {
    path: "first",
    breadcrumbName: "Second-level Menu",
  },
  {
    path: "second",
    breadcrumbName: "Third-level Menu",
  },
];
export default defineComponent({
  setup() {
    return {
      routes,
    };
  },
});
</script>
<style scoped>
    .header {
        width: 100%;
        padding: 10px 2%;
        background: #fff;
    }
</style>

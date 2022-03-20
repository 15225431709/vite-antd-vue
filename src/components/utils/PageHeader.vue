<template>
  <div class="header">
    <a-page-header style="padding: 10px 0" title="工作台" :breadcrumb="{ routes }" />
    <slot name="content"></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
const routes: Array<any> = [
  {
    path: "/",
    breadcrumbName: "Dashboard",
  },
  {
    path: "/Dashboard/Workplace",
    breadcrumbName: "Workplace",
  }
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
  margin-bottom: .2rem;
}
</style>

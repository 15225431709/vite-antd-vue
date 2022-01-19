<template>
  <div class="page">
    <page-header></page-header>
    <div class="content">
        content
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>
<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
  margin: 0;
}
.content {
  width: 95%;
  margin: 10px 2.5%;
}
</style>

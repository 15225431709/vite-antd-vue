<template>
  <div class="content">
    <page-header></page-header>
    <div class="form">
      <a-card class="card" title="仓库管理" :bordered="false">
        <!-- <a-row>
          
        </a-row> -->
        <a-form>
            
        </a-form>
      </a-card>
      <a-card class="card" title="任务管理" :bordered="false"> </a-card>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>
<style scoped lang="scss">
.content {
  width: 100%;
  height: 100%;
  margin: 0;
}
.form {
  width: 95%;
  margin: 10px 2.5%;
  .card {
    width: 100%;
    margin: 10px 0;
  }
}
</style>

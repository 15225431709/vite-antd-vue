<template>
  <div></div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  setup() {
    const data = reactive({
      current: 0,
    });
    return {
        ...toRefs(data)
    };
  },
});
</script>
<style lang="scss" scoped>

</style>

<template>
  <a-layout class="content">
    <Sider :collapsed="collapsed"></Sider>
    <a-layout>
      <Header></Header>
      <router-view class="page"/>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import Sider from "./utils/Menu.vue";
import Header from "./utils/Header.vue";
import { ref, watch } from "vue";
export default {
  name: "HOME",
  components: {
    Sider,
    Header,
  },
  setup() {
    const collapsed = ref<boolean>(false);
    return {
      collapsed,
    };
  },
};
</script>
<style lang="scss" scope>
.content {
  // height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
}
.bread {
    padding: .5rem;
    font-weight: bolder;
    font-size: .88rem;
}
.page{
    background: #fafafa;
    width: 100%;
    height: 100%;
    padding: 0;
}
</style>
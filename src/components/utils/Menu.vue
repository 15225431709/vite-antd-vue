<template>
  <div style="background: rgb(0, 21, 41)">
    <a-layout-sider     
      :trigger="null"
      breakpoint="lg"
      collapsible
      class="menu"
      mode="inline"
    >
      <div class="logo">
        <ICON name="#icon-chart" :customStyle="iconstyle"></ICON>
        <div class="logo-title">ANTD DESIGN VUE</div>
      </div>
      <a-menu
        mode="inline"
        :openKeys="openKeys"
        :style="{ borderRight: 0 }"
        theme="dark"
        @openChange="onOpenChange"
        :inline-collapsed="collapsed"
      >
        <a-sub-menu v-for="item in menus" :key="item.key">
          <template #icon>
            <ICON :name="item.icon"></ICON>
          </template>
          <template #title>{{ item.title }}</template>
          <a-menu-item
            v-for="menu in item.subMenus"
            :key="menu.name"
            @click="selectMenu(menu.name, item.key)"
            >{{ menu.title }}</a-menu-item
          >
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
  </div>
</template>
<script lang="ts">
import { reactive, toRefs } from "vue";
import { menu } from "../../utils/menus";
import { useRouter } from "vue-router";

export default {
  name: "Menu",
  props: {
    collapsed: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const router = useRouter();
    console.log(props);
    //初始化数据
    const state = reactive({
      menus: menu,
      openKeys: ["Dashboard"],
      iconstyle: {
        color: "#d81e06",
        fontSize: "0.25rem",
      },
      collpased: true
    });
    //监听菜单选择
    const onOpenChange = (keys: string[]) => {
      if (keys.length > 0) {
        let obj = [];
        obj.push(keys[keys.length - 1]);
        state.openKeys = obj;
      } else {
        state.openKeys = [];
      }
    };
    //子菜单，路由跳转
    const selectMenu = (keys: string) => {
      router.push({
        name: keys,
      });
    };
    return {
      ...toRefs(state),
      onOpenChange,
      selectMenu,
    };
  },
};
</script>
<style scoped lang="scss">
.menu {
  min-height: 100vh;
}
.logo {
  height: 64px;
  line-height: 64px;
  padding: 0 12px;
  display: flex;
  justify-content: left;
  .logo-title {
    font-size: 0.2rem;
    font-weight: bolder;
    color: #fff;
    margin-left: 10px;
    max-width: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>

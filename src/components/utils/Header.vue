<template>
  <div>
    <a-layout-header class="header">
      <a-row type="flex" justify="center" align="top">
        <a-col :span="1" class="align">
          <ICON
            :name="'#icon-hide'"
            :customStyle="{ color: '#001529', 'font-size': '1rem' }"
          ></ICON>
        </a-col>
        <a-col :span="1" class="align">
          <ICON
            :name="'#icon-reload'"
            :customStyle="{ color: '#001529', 'font-size': '1rem' }"
          ></ICON>
        </a-col>
        <a-col :span="18"></a-col>
        <a-col :span="3">
          <div>
            <img class="avatar" src="../../../static/image/avatar.jpg"/>
            <span>Serati Ma</span>
          </div>
        </a-col>
        <a-col :span="1">
          end
        </a-col>
      </a-row>
    </a-layout-header>
  </div>
</template>
<script lang="ts">
export default {
  name: "Header",
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style scoped lang="scss">
.header {
  background: #fff;
  padding: 0;
}
.align {
  text-align: center;
}
.avatar {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin: 0 5px;
}
</style>
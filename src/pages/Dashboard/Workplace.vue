<template>
  <div class="content">
    <page-header>
      <template #content>
        <div class="slot-content">
          <div class="account">
            <img class="avatar" src="../../../static/image/antd.png" />
            <div class="account-desc">
              <div class="title">晚上好，天野远子，要不要打一把 DOTA</div>
              <div class="desc">前端工程师</div>
            </div>
          </div>
          <div class="datas">
            <div class="item">
              <a-statistic title="项目数" value="56" />
            </div>
            <div class="item">
              <a-statistic title="团队排名" value="8 / 24" />
            </div>
            <div class="item">
              <a-statistic title="项目访问" value="2,245" />
            </div>
          </div>
        </div>
      </template>
    </page-header>
    typescript
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import PageHeader from "../../components/utils/PageHeader.vue";

export default defineComponent({
  components: { PageHeader },
  setup() {},
});
</script>
<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 5px;
  // background: #fff;
}
.slot-content {
  display: flex;
  justify-content: flex-start;
  padding: 5px 0;
  .account {
    width: 60%;
    display: flex;
    justify-content: flex-start;
    .avatar {
      width: 4.5rem;
      height: 4.5rem;
      border-radius: 50%;
    }
    .account-desc {
      margin-left: 1rem;
      .title {
        font-size: 1.25rem;
        line-height: 2.5rem;
        height: 2.5rem;
      }
      .desc {
        height: 2rem;
        line-height: 2rem;
        color: #000;
        opacity: 0.45;
      }
    }
  }
  .datas {
    width: 40%;
    display: flex;
    justify-content: flex-end;
    padding-right: 1.25rem;
    .item {
      margin: 0 1.25rem;
      padding-top: 0.25rem;
      .label {
        height: 1.75rem;
        line-height: 1.75rem;
        opacity: 0.45;
      }
      .value {
        height: 2.75rem;
        line-height: 2.75rem;
        font-size: 1.25rem;
      }
    }
  }
}
</style>

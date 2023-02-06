<template>
  <div class="page">
    <page-header text="标准列表"></page-header>
    <div class="content">
      <a-card class="card">
        <a-card-grid class="item" :hoverable="false">
          <div class="item-title">我的待办</div>
          <span class="item-desc">8个任务</span>
        </a-card-grid>
        <a-card-grid class="item" :hoverable="false">
          <div class="item-title">本周任务平均处理时间</div>
          <span class="item-desc">32分钟</span>
        </a-card-grid>
        <a-card-grid class="item" :hoverable="false">
          <div class="item-title">本周完成任务数</div>
          <span class="item-desc">24个</span>
        </a-card-grid>
      </a-card>
      <a-card class="card">
        <template #title>
          <div class="custom-title">
            <div class="render-title">简单列表</div>
            <div class="render-search">
              <a-radio-group v-model:value="tab" class="tabs">
                <a-radio-button value="all">全部</a-radio-button>
                <a-radio-button value="doing">进行中</a-radio-button>
                <a-radio-button value="loading">等待中</a-radio-button>
              </a-radio-group>
              <a-input-search
                v-model:value="search"
                placeholder="查询"
                @search="onSearch"
                class="custom-search"
              />
            </div>
          </div>
        </template>
        <div class="custom-content">
          <a-button class="block" type="dashed" block><strong>+ </strong>添加</a-button>
          <list></list>
        </div>
      </a-card>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import list from "./basic/list.vue"
export default defineComponent({
  components: {
    list
  },
  setup() {
    const state = reactive({
      tab: "all",
      search: "",
    });
    return {
      ...toRefs(state),
    };
  },
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
.card {
  margin: 20px 0;
  .custom-title {
    display: flex;
    .render-title {
      width: 50%;
    }
    .render-search {
      width: 50%;
      text-align: right;
    }
    .tabs {
      margin: 0 25px;
    }
    .custom-search {
      margin: 0 15px;
      width: 240px;
    }
  }
}
.item {
  width: 33.3%;
  text-align: center;
  .item-title {
    font-size: 14px;
    line-height: 28px;
  }
  .item-desc {
    font-size: 24px;
    line-height: 32px;
  }
}
.clock {
  width: 100%;
  margin: 10px 0;
}
.custom-list {
  width: 100%;
  margin: 20px 0;
  .list-item {
    display: flex;
    padding: 1rem 0;
    border-bottom: 1px solid #e8e8e8;
    align-items: center;
    .avatar {
      width: 48px;
      height: 48px;
      margin-right: 0.75rem;
    }
    .desc-area {
      width: 780px;
      margin-right: 20px;
      height: 48px;
      .desc-title {
        margin-bottom: 4px;
        color: #000000d9;
        font-size: 14px;
      }
      .desc-text {
        color: #666;
        font-size: 14px;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .status-area {
      width: 80px;
      margin-right: 20px;
      font-size: 14px;
      height: 56px;
    }
    .time-area {
      width: 160px;
      margin-right: 20px;
      font-size: 14px;
      height: 56px;
    }
    .progress-area {
      width: 200px;
      margin-right: 30px;
    }
    .operation-area {
      height: 56px;
      // width: 120px;
      // line-height: 56px;
      display: flex;
      align-items: center;
    }
    .status-title {
      margin-bottom: 4px;
      color: #000000d9;
    }
    .status-text {
      color: #666;
    }
  }
}
</style>

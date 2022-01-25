<template>
  <div class="custom-list">
    <div class="list-item" v-for="(item, index) in list" :key="index">
      <img class="avatar" src="../../../../static/image/alipay.png" />
      <div class="desc-area">
        <div class="desc-title">Alipay</div>
        <p class="desc-text">那是一种内在的东西， 他们到达不了，也无法触及的</p>
      </div>
      <div class="status-area">
        <div class="status-title">Owner</div>
        <div class="status-text">曲丽丽</div>
      </div>
      <div class="time-area">
        <div class="status-title">开始时间</div>
        <div class="status-text">2022-01-01 00:00:00</div>
      </div>
      <div class="progress-area">
        <a-progress :percent="70" />
      </div>
      <div class="operation-area" style="display: flex"> 
        <a-button size="small" type="text" @click="visible = true">编辑</a-button>
        <a-divider type="vertical" />
        <a-button size="small" type="text">删除</a-button>
      </div>
    </div>
    <a-modal v-model:visible="visible" centered>

    </a-modal>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from "vue"; 
import { dataList } from "../data/list";
export default defineComponent({
  setup() {
    const list = dataList;
    const state = reactive({
        visible: false
    })
    return {
      ...toRefs(state),  
      list,
    }
  },
});
</script>
<style scoped lang="scss">
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

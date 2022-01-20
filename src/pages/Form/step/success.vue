<template>
  <div class="top">
    <a-result status="success" title="操作成功" sub-title="预计两小时内到账"> </a-result>
    <div class="result-content">
      <div class="result-item">付款账户：{{ formState.payAccount }}</div>
      <div class="result-item">收款账户：{{ formState.acceptAccount }}</div>
      <div class="result-item">收款人姓名: {{ formState.accountName }}</div>
      <div class="result-item">转账金额: {{ formState.amount }}</div>
    </div>
    <div class="end">
      <a-button type="danger" @click="refer">再转一笔</a-button>
      <a-button type="default" style="margin-left: 20px">查看账单</a-button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    formState: {
      type: Object,
      default: {
        payAccount: "",
        acceptAccount: "",
        accountType: "",
        acceptName: "",
        amount: 0,
      },
    },
  },
  setup(props, context) {
      let refer = () => {
          context.emit("refer")
      }
      return {
          refer
      }
  },
});
</script>
<style lang="scss" scoped>
.top {
  width: 70%;
  margin: 0 15%;
}
.result-content {
  width: 60%;
  background: #fafafa;
  margin-left: 20%;
  padding: 20px 20px;
  .result-item {
    height: 3rem;
    line-height: 3rem;
  }
}
.end {
  width: 80%;
  margin: 20px 10%;
  display: flex;
  justify-content: center;
}
</style>

<template>
  <div class="top">
    <a-alert
      type="error"
      message="确认转账后，资金将直接打入对方账户，无法退回。"
      closable
      style="width: 84%; margin-left: 8%"
    />
    <div class="description">
      <div class="item">付款账户：{{ formState.payAccount }}</div>
      <div class="item">收款账户：{{ formState.acceptAccount }}</div>
      <div class="item">收款人姓名: {{ formState.accountName }}</div>
      <div class="item">转账金额: {{ formState.amount }}</div>
    </div>
    <a-divider />
    <div class="payword">
      <div>支付密码：</div>
      <a-input
        style="width: 240px"
        type="password"
        maxLength="6"
        placeholder="输入支付密码"
      />
    </div>
    <div class="next">
      <a-button type="default" @click="next">提交</a-button>
      <a-button type="primary" @click="back" style="margin-left: 1rem">上一步</a-button>
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
    let back = () => {
      context.emit("back");
    };
    let next = () => {
      context.emit("confrim");
    };
    return {
      back,
      next,
    };
  },
});
</script>
<style lang="scss" scoped>
.line {
  line-height: .3rem;
}
.top {
  width: 70%;
  margin: 0 15%;
}
.payword {
  display: flex;
  align-items: center;
  width: 80%;
  margin-left: 10%;
}
.next {
  width: 80%;
  margin: 20px 10%;
}
.description {
  width: 80%;
  margin: 15px 10% 0 10%;
  .item {
    height: .6rem;
    line-height: .6rem;
  }
}
</style>

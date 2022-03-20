<template>
  <div class="form-content">
    <a-form
      :model="formState"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      class="top"
    >
      <a-form-item label="支付账号">
        <a-input v-model:value="formState.payAccount" />
      </a-form-item>
      <a-form-item label="收款账号">
        <a-row gutter="5">
          <a-col span="8">
            <a-select v-model:value="formState.accountType">
              <a-select-option value="alipay">支付宝</a-select-option>
              <a-select-option value="wechat">微信</a-select-option>
            </a-select>
          </a-col>
          <a-col span="16">
            <a-input v-model:value="formState.acceptAccount" />
          </a-col>
        </a-row>
      </a-form-item>
      <a-form-item label="收款人姓名">
        <a-input v-model:value="formState.accountName" />
      </a-form-item>
      <a-form-item label="转账金额">
        <a-input v-model:value="formState.amount" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 5 }">
        <a-button type="primary" @click="next">下一步</a-button>
      </a-form-item>
    </a-form>
    <a-divider />
    <div class="line">
      说明<br />
      转账到支付宝账户<br />
      如果需要，这里可以放一些关于产品的常见问题说明。<br />
      转账到银行卡<br />
      如果需要，这里可以放一些关于产品的常见问题说明。<br />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, UnwrapRef } from "vue";
interface FormState {
  payAccount: string;
  acceptAccount: string;
  accountType: string;
  acceptName: string;
  amount: number | string;
}
export default defineComponent({
  setup(props, context) {
    const formState: UnwrapRef<FormState> = reactive({
      payAccount: "",
      acceptAccount: "",
      accountType: "",
      acceptName: "",
      amount: 0,
    });
    let next = () => {
      context.emit("next", formState);
    };
    return {
      formState,
      next,
      props,
      labelCol: { style: { width: "150px" } },
    };
  },
});
</script>
<style lang="scss" scoped>
.line {
  line-height: .3rem;
  font-size: .2rem;
}
.top {
  width: 70%;
  margin: 0 15%;
}
.form-content {
  width: 90%;
  margin: 0px 5%;
  padding: 50px 0px;
}
</style>

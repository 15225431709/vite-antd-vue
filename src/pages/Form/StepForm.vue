<template>
  <div class="content">
    <page-header></page-header>
    <div class="form">
      <div class="step">
        <a-steps :current="current">
          <a-step title="填写转账信息" />
          <a-step title="确认转账信息" />
          <a-step title="完成" />
        </a-steps>
      </div>
      <div class="form-content" v-show="current == 0">
        <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
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
            <a-input v-model:value="formState.payAccount" />
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" @click="next">下一步</a-button>
            <a-button style="margin-left: 10px">取消</a-button>
          </a-form-item>
        </a-form>
      </div>
      <div class="form-content" v-show="current == 1">
        <a-descriptions title="User Info">
          <a-descriptions-item label="UserName"> {{formState.payAccount}} </a-descriptions-item>
          <a-descriptions-item label="Telephone"> 1810000000 </a-descriptions-item>
          <a-descriptions-item label="Live"> Hangzhou, Zhejiang </a-descriptions-item>
          <a-descriptions-item label="Remark"> empty </a-descriptions-item>
          <a-descriptions-item label="Address">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </a-descriptions-item>
        </a-descriptions>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, toRaw, UnwrapRef } from "vue";
interface FormState {
  payAccount: string;
  acceptAccount: string;
  accountType: string;
  acceptName: string;
  amount: number | string;
}
export default defineComponent({
  setup() {
    const state = reactive({
      current: 0,
    });
    const formState: UnwrapRef<FormState> = reactive({
      payAccount: "",
      acceptAccount: "",
      accountType: "",
      acceptName: "",
      amount: 0,
    });
    let next = () => {
      state.current++;
    };
    return {
      labelCol: { style: { width: "150px" } },
      wrapperCol: { span: 14 },
      formState,
      ...toRefs(state),
      next,
    };
  },
});
</script>
<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 5px;
  //   background: #fff;
}
.form {
  width: 96%;
  margin: 20px 2%;
  background: #fff;
  padding: 20px;
  .step {
    width: 60%;
    margin: 0 20%;
  }
  .form-content {
    width: 40%;
    margin: 0 30%;
    padding: 50px 0;
  }
}
</style>

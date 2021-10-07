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
        <div class="desc">
          说明<br />
          转账到支付宝账户<br />
          如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。<br />
          转账到银行卡<br />
          如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。<br />
        </div>
      </div>
      <div class="form-content" v-show="current == 1">
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
            <a-button type="primary" @click="back" style="margin-left: 1rem"
              >上一步</a-button
            >
          </div>
        </div>
      </div>
      <div class="form-content" v-show="current == 2">
        <div class="top">
          <a-result status="success" title="操作成功" sub-title="预计两小时内到账">
          </a-result>
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
    let back = () => {
      state.current--;
    };
    let refer = () => {
      state.current = 0
    }
    return {
      labelCol: { style: { width: "150px" } },
      wrapperCol: { span: 14 },
      formState,
      ...toRefs(state),
      next,
      back,
      refer
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
    width: 90%;
    margin: 0 5%;
    padding: 50px 0;
  }
  .top {
    width: 70%;
    margin: 0 15%;
  }
  .desc {
    line-height: 1.5rem;
  }
  .description {
    width: 80%;
    margin: 15px 10% 0 10%;
    .item {
      height: 3rem;
      line-height: 3rem;
    }
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
  .result-content {
    width: 60%;
    background: #fafafa;
    margin-left: 20%;
    padding: 20px 40px;
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
}
</style>

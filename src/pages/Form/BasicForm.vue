<template>
  <div class="content">
    <page-header :margin="false"></page-header>
    <div class="form">
      <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-item label="标题" required>
          <a-input v-model:value="formState.title" />
        </a-form-item>
        <a-form-item label="起止日期" required>
          <a-range-picker v-model:value="formState.datetime" style="width: 100%" />
        </a-form-item>
        <a-form-item label="目标描述" required>
          <a-textarea v-model:value="formState.target" placeholder="目标描述" />
        </a-form-item>
        <a-form-item label="衡量标准" required>
          <a-textarea v-model:value="formState.standard" placeholder="衡量标准" />
        </a-form-item>
        <a-form-item label="客户" required>
          <a-input
            v-model:value="formState.custom"
            placeholder="请描述你服务的客户，内部客户直接 @姓名／工号"
          />
        </a-form-item>
        <a-form-item label="邀评人">
          <a-input
            v-model:value="formState.inviter"
            placeholder="请直接 @姓名／工号，最多可邀请 5 人"
          />
        </a-form-item>

        <a-form-item label="权重">
          <a-input-number v-model:value="formState.weight" :min="1" :max="100" /> %
        </a-form-item>

        <a-form-item label="目标公开">
          <a-radio-group v-model:value="formState.check">
            <a-radio value="1">全部公开</a-radio>
            <a-radio value="2">部分公开</a-radio>
            <a-radio value="3">不公开</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" @click="onSubmit">提交</a-button>
          <a-button style="margin-left: 10px">取消</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script lang="ts">
import { Moment } from "moment";
import { defineComponent, reactive, toRaw, UnwrapRef } from "vue";
interface FormState {
  title: string;
  target: string;
  datetime: Moment | undefined;
  custom: string;
  standard: string;
  inviter: string;
  weight: number;
  check: string;
}
export default defineComponent({
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      title: "",
      target: "",
      datetime: undefined,
      custom: "",
      standard: "",
      inviter: "",
      weight: 0,
      check: ""
    });
    const onSubmit = () => {
      console.log("submit!", toRaw(formState));
    };
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      formState,
      onSubmit,
    };
  },
});
</script>
<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 4px 0;
}
.form {
	background: #fff;
	padding: .25rem 0;
}
</style>

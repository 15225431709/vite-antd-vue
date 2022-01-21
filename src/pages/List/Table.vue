<template>
  <div class="page">
    <page-header></page-header>
    <div class="content">
      <a-form :modal="form">
        <div class="form">
          <a-form-item label="规则编号" class="form-item">
            <a-input v-model:value="form.number"></a-input>
          </a-form-item>
          <a-form-item label="使用状态" class="form-item">
            <a-input v-model:value="form.status"></a-input>
          </a-form-item>
          <a-form-item label="调用次数" class="form-item">
            <a-input v-model:value="form.times"></a-input>
          </a-form-item>
          <a-form-item label="更新日期" class="form-item">
            <a-date-picker
              v-model:value="form.updateDate"
              placeholder="输入更新日期"
              style="width: 100%"
            />
          </a-form-item>
        </div>
      </a-form>
      <div class="search-submit">
        <a-button type="primary" class="button">查询</a-button>
        <a-button type="default" class="button">重置</a-button>
      </div>
      <div class="table">
        <div class="table-add">
          <a-button type="primary"> + 新建 </a-button>
        </div>
        <div class="table-alert">
            <a-alert message="已选择: 0 服务调用次数总计 0 次" type="info" show-icon/>
        </div>
        <a-table :columns="columns" style="margin: 5px 0"></a-table>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Moment } from "moment";
import { defineComponent, UnwrapRef, reactive } from "vue";
interface FormState {
  number: string;
  status: string;
  times: string;
  updateDate: Moment | undefined;
}
const columns = [
    {
        title: "规则编号",
        dataIndex: "number"
    },
    {
        title: "描述",
        dataIndex: "description"
    },
    {
        title: "服务调用次数",
        dataIndex: "times"
    },
    {
        title: "状态",
        dataIndex: "status"
    },
    {
        title: "更新时间",
        dataIndex: "date"
    },
    {
        title: "操作",
    },
]
export default defineComponent({
  setup() {
    const form: UnwrapRef<FormState> = reactive({
      number: "",
      status: "",
      times: "",
      updateDate: undefined,
    });
    return {
      form,
      columns
    };
  },
});
</script>
<style scoped lang="scss">
.page {
  width: 100%;
  height: 100%;
  margin: 0;
}
.content {
  width: 95%;
  margin: 10px 2.5%;
  background: #fff;
  padding: 20px 25px;
}
.form {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  .form-item {
    width: 30%;
    margin-right: 3.3%;
  }
}
.search-submit {
  display: flex;
  justify-content: flex-end;
  padding-right: 2.5%;
  margin-bottom: 10px;
  .button {
    margin: 0 10px;
  }
}
.table {
    .table-add{
        margin-bottom: 10px;
    }
    .table-alert {
        margin-bottom: 10px;
    }
}
</style>

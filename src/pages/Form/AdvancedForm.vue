<template>
  <div class="content">
    <page-header></page-header>
    <div class="form">
      <a-card class="card" title="仓库管理" :bordered="false">
        <a-form :modal="formState" layout="vertical">
          <div class="form-layout">
            <a-form-item label="仓库名" class="form-item">
              <a-input v-model:value="formState.storeName" style="width: 80%" />
            </a-form-item>
            <a-form-item label="仓库域名" class="form-item">
              <a-input v-model:value="formState.storeHost" style="width: 80%" />
            </a-form-item>
            <a-form-item label="管理员" class="form-item">
              <a-input v-model:value="formState.storeAdmin" style="width: 80%" />
            </a-form-item>
            <a-form-item label="审批人" class="form-item">
              <a-input v-model:value="formState.storeAudit" style="width: 80%" />
            </a-form-item>
            <a-form-item label="生效日期" class="form-item">
              <a-range-picker v-model:value="formState.storeDate" style="width: 80%" />
            </a-form-item>
            <a-form-item label="仓库类型" class="form-item">
              <a-input v-model:value="formState.storeType" style="width: 80%" />
            </a-form-item>
          </div>
        </a-form>
      </a-card>
      <a-card class="card" title="任务管理" :bordered="false">
        <a-form :modal="formState" layout="vertical">
          <div class="form-layout">
            <a-form-item label="任务名" class="form-item">
              <a-input v-model:value="formState.taskName" style="width: 80%" />
            </a-form-item>
            <a-form-item label="任务描述" class="form-item">
              <a-input v-model:value="formState.taskDesc" style="width: 80%" />
            </a-form-item>
            <a-form-item label="执行人" class="form-item">
              <a-input v-model:value="formState.taskExecutor" style="width: 80%" />
            </a-form-item>
            <a-form-item label="责任人" class="form-item">
              <a-input v-model:value="formState.taskDuty" style="width: 80%" />
            </a-form-item>
            <a-form-item label="提醒时间" class="form-item">
              <a-time-picker
                v-model:value="formState.taskTime"
                valueFormat="HH:mm:ss"
                style="width: 80%"
                placeholder="选择时间"
              />
            </a-form-item>
            <a-form-item label="任务类型" class="form-item">
              <a-input v-model:value="formState.taskType" style="width: 80%" />
            </a-form-item>
          </div>
        </a-form>
      </a-card>
      <div style="background: #fff; padding: 20px 0">
        <a-table :columns="columns"  style="width: 98%; margin: 0 1%" ></a-table>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Moment } from "moment";
import { defineComponent, reactive, UnwrapRef } from "vue";
interface StoreState {
  storeName: string;
  storeHost: string;
  storeAdmin: string;
  storeAudit: string;
  storeDate: Moment | undefined;
  storeType: string;
}
interface TaskState {
  taskName: string;
  taskDesc: string;
  taskExecutor: string;
  taskDuty: string;
  taskTime: Moment | undefined;
  taskType: string;
}
const columns = [
  {
    title: "成员姓名",
    dataIndex: "name",
    width: "25%",
    slots: { customRender: "name" },
  },
  {
    title: "工号",
    dataIndex: "age",
    width: "15%",
    slots: { customRender: "age" },
  },
  {
    title: "所属部门",
    dataIndex: "address",
    width: "40%",
    slots: { customRender: "address" },
  },
  {
    title: "操作",
    dataIndex: "operation",
    slots: { customRender: "operation" },
  },
];
export default defineComponent({
  setup() {
    const formState: UnwrapRef<StoreState> = reactive({
      storeName: "",
      storeHost: "",
      storeAdmin: "",
      storeAudit: "",
      storeDate: undefined,
      storeType: "",
    });
    const formTask: UnwrapRef<TaskState> = reactive({
      taskName: "",
      taskDesc: "",
      taskExecutor: "",
      taskDuty: "",
      taskTime: undefined,
      taskType: "",
    });

    return {
      formState,
      formTask,
      columns,
    };
  },
});
</script>
<style scoped lang="scss">
.content {
  width: 100%;
  height: 100%;
  margin: 0;
}
.form {
  width: 95%;
  margin: 10px 2.5%;
  .card {
    width: 100%;
    margin: 10px 0;
  }
  .form-layout {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }
  .form-item {
    width: 33.3%;
  }
}
</style>

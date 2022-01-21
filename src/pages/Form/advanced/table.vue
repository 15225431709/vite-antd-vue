<template>
  <div class="table-area">
    <a-table
      bordered
      :data-source="datasource"
      class="table-content"
      :scroll="{ x: 1500, y: 300 }"
      :pagination="false"
    >
      <a-table-column title="成员姓名" data-index="name"></a-table-column>
      <a-table-column title="工号" data-index="age"></a-table-column>
      <a-table-column title="所属部门" data-index="address"></a-table-column>
      <a-table-column title="操作" data-index="operation">
        <template #default="{ record }">
          <a-button>删除</a-button>
        </template>
      </a-table-column>
      <template #footer>
        <a-pagination
          v-model:current="current"
          v-model:pageSize="pageSize"
          :total="total"
          show-size-changer
        ></a-pagination>
      </template>
    </a-table>

    <div class="submit-area">
      <a-button type="primary">提交</a-button>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from "vue";
import { datasource } from "./datasource.ts";
const columns = [
  {
    title: "成员姓名",
    dataIndex: "name",
    width: "25%",
  },
  {
    title: "工号",
    dataIndex: "age",
    width: "20%",
  },
  {
    title: "所属部门",
    dataIndex: "address",
    width: "30%",
  },
  {
    title: "操作",
    dataIndex: "operation",
    key: "operation",
  },
];
export default defineComponent({
  setup() {
    const state = reactive({
      current: 1,
      pageSize: 10,
      total: 100,
    });
    return {
      columns,
      datasource,
      ...toRefs(state),
    };
  },
});
</script>

<style scoped>
.table-area {
  background: #fff;
  padding: 20px 0;
}
.table-area .table-content {
  width: 98%;
  margin: 10px 1%;
}
.submit-area {
  width: 98%;
  margin: 20px 1%;
  text-align: right;
}
</style>

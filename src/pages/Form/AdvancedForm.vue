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
							<a-time-picker v-model:value="formState.taskTime" valueFormat="HH:mm:ss" style="width: 80%"
								placeholder="选择时间" />
						</a-form-item>
						<a-form-item label="任务类型" class="form-item">
							<a-input v-model:value="formState.taskType" style="width: 80%" />
						</a-form-item>
					</div>
				</a-form>
			</a-card>
			<custom-table></custom-table>
		</div>
	</div>
</template>
<script lang="ts">
	import {
		Moment
	} from "moment";
	import {
		defineComponent,
		reactive,
		UnwrapRef
	} from "vue";
	import customTable from "./advanced/table.vue"
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

	export default defineComponent({
		components: {
			customTable
		},
		setup() {
			const formState: UnwrapRef < StoreState > = reactive({
				storeName: "",
				storeHost: "",
				storeAdmin: "",
				storeAudit: "",
				storeDate: undefined,
				storeType: "",
			});
			const formTask: UnwrapRef < TaskState > = reactive({
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
			};
		},
	});
</script>
<style scoped lang="scss">
	.content {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 4px 0;
	}

	.form {
		width: 97.4%;
		margin: 10px 1.3%;

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

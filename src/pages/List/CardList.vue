<template>
	<div class="content">
		<page-header text="卡片列表" :margin="false">
			<template #content>
				<div class="slot">
					<p class="text">
						今日测试今日测试今日测试今日测试今日测试今日测试今日测试今日测试今日测试今日测试今日测试今日测试今日测试今日测试今日测试今日测试今日测试今日测试今日测试今日测试今日测试今日测试今日测试今日测试今日测试今日测试今日测试今日测试
					</p>
					<img class="img" src="../../../static/image/pre.png" />
				</div>
			</template>
		</page-header>
		<div class="tabs">
			<a-tabs v-model:activeKey="activeKey">
				<a-tab-pane key="1" tab="Tab 1"></a-tab-pane>
				<a-tab-pane key="2" tab="Tab 2"></a-tab-pane>
				<a-tab-pane key="3" tab="Tab 3"></a-tab-pane>
			</a-tabs>
		</div>
	</div>
</template>
<script type="ts">
	import { defineComponent, ref } from "vue";
	export default defineComponent({
		setup() {
			return {
				activeKey: ref('1')
			}
		}
	})
</script>
<style lang="scss" scoped>
	.content {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 4px 0;
	}

	.slot {
		display: flex;
		justify-content: space-between;
		padding: .125rem 0;

		.text {
			max-width: 10rem;
			padding: 0 .125rem;
			font-size: .175rem;
		}

		.img {
			width: 2rem;
			margin: 0 .25rem;
		}
	}

	.tabs {
		background: #fff;
		width: 100%;
		padding: 0 1.3%;
	}
</style>

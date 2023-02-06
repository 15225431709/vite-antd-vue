<template>
	<div class="content">
		<div class="top-content">
			<a-card size="small" :bordered="false" class="card">
				<div class="card-content">
					<div class="card-title">总销售额</div>
					<div class="card-number">￥126,560</div>
					<div class="card-chart">
						<span style="margin: 0 0.1rem">周同比：12% <img class="icon"
								src="../../../static/icon/up.png" /></span>
						<span style="margin: 0 0.1rem">日同比：11% <img class="icon"
								src="../../../static/icon/down.png" /></span>
					</div>
				</div>
				<div class="card-footer">日均销售额 <span>￥123</span></div>
			</a-card>
			<a-card size="small" :bordered="false" class="card">
				<div class="card-content">
					<div class="card-title">访问量</div>
					<div class="card-number">8848</div>
					<area-chart height="60" size="small" container="area" class="card-chart" ref="area"></area-chart>
				</div>
				<div class="card-footer">日访问量 <span>1,234</span></div>
			</a-card>
			<a-card size="small" :bordered="false" class="card">
				<div class="card-content">
					<div class="card-title">支付笔数</div>
					<div class="card-number">6560</div>
					<column-chart height="60" container="line" size="small" class="card-chart" ref="column">
					</column-chart>
				</div>
				<div class="card-footer">转化率 <span>60%</span></div>
			</a-card>
			<a-card size="small" :bordered="false" class="card">
				<div class="card-content">
					<div class="card-title">运营活动效果</div>
					<div class="card-number">75%</div>
					<div class="card-chart">
						<div style="width: 3rem">
							<a-progress :percent="75" status="active" :show-info="false" />
						</div>
					</div>
				</div>
				<div class="card-footer">
					<span style="margin: 0 0.1rem">周同比：12% <img class="icon" src="../../../static/icon/up.png" /></span>
					<span style="margin: 0 0.1rem">日同比：11% <img class="icon"
							src="../../../static/icon/down.png" /></span>
				</div>
			</a-card>
		</div>

		<div class="tabs">
			<a-tabs :activeKey="activeKey" @change="callback" :tabBarStyle="{ color: red }">
				<a-tab-pane key="1" tab="销售额">
					<div class="tabs-content">
						<div class="left">
							<div class="title">销售趋势</div>
							<column-chart class="chart" height="250" container="sales"></column-chart>
						</div>
						<div class="right">
							<div class="title">门店销售额排名</div>
							<div class="list">
								<div class="item" v-for="(item, index) in sales" :key="index">
									<a-tag :color="index < 3 ? '#108ee9' : ''">{{ index + 1 }}</a-tag>
									{{ item.name }}
									<span style="float: right; padding-right: 20px">{{ item.sale }}</span>
								</div>
							</div>
						</div>
					</div>
				</a-tab-pane>
				<a-tab-pane key="2" tab="访问量" force-render>
					<div class="tabs-content">
						<div class="left">
							<div class="title">访问量趋势</div>
							<area-chart class="chart" height="250" container="numbers"></area-chart>
						</div>
						<div class="right">
							<div class="title">门店销售额排名</div>
							<div class="list">
								<div class="item" v-for="(item, index) in sales" :key="index">
									<a-tag :color="index < 3 ? '#108ee9' : ''">{{ index + 1 }}</a-tag>
									{{ item.name }}
									<span style="float: right; padding-right: 20px">{{ item.sale }}</span>
								</div>
							</div>
						</div>
					</div>
				</a-tab-pane>
			</a-tabs>
		</div>
		<div class="charts">
			<div class="charts-dom">
				<div class="charts-card">
					<div class="card-title">线上热门搜索</div>
					<div class="card-top">
						<div style="width: 50%">
							<div class="top-title">搜索用户数</div>
							<div class="top-nums">
								<span style="font-size: .25rem">12321</span>
								<span style="margin-left: 20px">17.1 <img class="icon"
										src="../../../static/icon/up.png" /></span>
							</div>
							<area-chart size="small" height="40" container="left-chart"
								style="width: 80%; margin: 10px 0"></area-chart>
						</div>
						<div style="width: 50%">
							<div class="top-title">人均搜索次数</div>
							<div class="top-nums">
								<span style="font-size: .25rem">2.7</span>
								<span style="margin-left: 20px">26.2 <img class="icon"
										src="../../../static/icon/down.png" /></span>
							</div>
							<area-chart size="small" height="40" container="right-chart"
								style="width: 80%; margin: 10px 0"></area-chart>
						</div>
					</div>
					<div class="table">
						<a-table :columns="columns" :dataSource="data" size="small">
						</a-table>
					</div>
				</div>
			</div>
			<div class="charts-dom">
				<div class="charts-card">
					<div class="card-title">销售额类别占比</div>
				</div>
				<div>
					<div class="top-title" style="padding-left: .25rem">销售额</div>
					<circle-chart height="360" style="width: 90%" container="circle"></circle-chart>
				</div>				
			</div>
		</div>
	</div>
</template>
<script lang="ts">
	import {
		ref,
		reactive,
		toRefs,
		onMounted,
		nextTick
	} from "vue";
	import AreaChart from "../../components/utils/AreaChart.vue";
	import ColumnChart from "../../components/utils/ColumnChart.vue";
	import CircleChart from "../../components/utils/CircleChart.vue"
	export default {
		components: {
			AreaChart,
			ColumnChart,
			CircleChart
		},
		setup() {
			const state = reactive({
				title: "看板",
				cardWidth: 0,
				activeKey: "1",
				formState: {
					startTime: "",
					endTime: "",
				},
				active: 0,
				sales: [{
						name: "白鹭岛 1 号店",
						sale: "1234.56"
					},
					{
						name: "白鹭岛 2 号店",
						sale: "1234.56"
					},
					{
						name: "白鹭岛 3 号店",
						sale: "1234.56"
					},
					{
						name: "白鹭岛 4 号店",
						sale: "1234.56"
					},
					{
						name: "白鹭岛 5 号店",
						sale: "1234.56"
					},
					{
						name: "白鹭岛 6 号店",
						sale: "1234.56"
					},
					{
						name: "白鹭岛 6 号店",
						sale: "1234.56"
					},
				],
				columns: [{
						title: "排名",
						dataIndex: "key",
						key: "key",
					},
					{
						title: "搜索关键词",
						dataIndex: "word",
						key: "word",
					},
					{
						title: "用户数",
						dataIndex: "people",
						key: "people",
					},
					{
						title: "周涨幅 (%)",
						dataIndex: "range",
						key: "range",
						sorter: (a: any, b: any) => {
							return a.range - b.range;
						},
					},
				],
				data: [{
						key: "1",
						word: "John Brown",
						people: 32,
						range: -31,
					},
					{
						key: "2",
						word: "Jim Green",
						people: 42,
						range: -53,
					},
					{
						key: "3",
						word: "Joe Black",
						people: 32,
						range: 36,
					},
					{
						key: "4",
						word: "Joe Black",
						people: 32,
						range: 22,
					},
					{
						key: "5",
						word: "Joe Black",
						people: 32,
						range: 13,
					}
				],
				selectList: ["今日", "本周", "本月", "全年"],
			});
			const area = ref < null | HTMLElement > (null);
			const renderArea = () => {
				// area.value.render();
			};
			let callback = (val: any) => {
				state.activeKey = val;
			};
			let select = (val: Number | String) => {
				state.active = Number(val);
			};
			onMounted(() => {
				nextTick(() => {
					renderArea();
				});
			});

			return {
				...toRefs(state),
				area,
				renderArea,
				callback,
				select,
			};
		},
	};
</script>
<style lang="scss" scoped>
	@import "../css/analysis.scss";
</style>

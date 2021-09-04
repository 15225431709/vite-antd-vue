<template>
  <div class="content">
    <div class="top-content">
      <a-card size="small" :bordered="false" class="card">
        <div class="card-content">
          <div class="card-title">总销售额</div>
          <div class="card-number">￥126,560</div>
          <div class="card-chart">
            <span style="margin: 0 0.5rem"
              >周同比：12% <img class="icon" src="../../../static/icon/up.png"
            /></span>
            <span style="margin: 0 0.5rem"
              >日同比：11% <img class="icon" src="../../../static/icon/down.png"
            /></span>
          </div>
        </div>
        <div class="card-footer">日均销售额 <span>￥123</span></div>
      </a-card>
      <a-card size="small" :bordered="false" class="card">
        <div class="card-content">
          <div class="card-title">访问量</div>
          <div class="card-number">8848</div>
          <div class="card-chart" id="chart"></div>
        </div>
        <div class="card-footer">日访问量 <span>1,234</span></div>
      </a-card>
      <a-card size="small" :bordered="false" class="card">
        <div class="card-content">
          <div class="card-title">支付笔数</div>
          <div class="card-number">6560</div>
          <div class="card-chart" id="line"></div>
        </div>
        <div class="card-footer">转化率 <span>60%</span></div>
      </a-card>
      <a-card size="small" :bordered="false" class="card">
        <div class="card-content">
          <div class="card-title">运营活动效果</div>
          <div class="card-number">78%</div>
          <div class="card-chart">
            <!-- <div class="progress">
              <div class="active" :style="activeWidth"></div>              
            </div> -->
            <div style="width: 15rem">
              <a-progress :percent="78" :show-info="false" />
            </div>
          </div>
        </div>
        <div class="card-footer">
          <span style="margin: 0 0.5rem"
            >周同比：12% <img class="icon" src="../../../static/icon/up.png"
          /></span>
          <span style="margin: 0 0.5rem"
            >日同比：11% <img class="icon" src="../../../static/icon/down.png"
          /></span>
        </div>
      </a-card>
    </div>
  </div>
</template>
<script lang="ts">
import { Chart } from "@antv/g2";
import { reactive, toRefs, onMounted, computed } from "vue";
import { chartArea, chartColumn } from "../../utils/chart.ts";
export default {
  setup() {
    const state = reactive({
      basicColumnChartProp: {
        data: chartColumn,
        container: "chart",
        width: 300,
        height: 60,
      },
      lineChart: {
        data: chartArea,
        container: "line",
        width: 300,
        height: 60,
      },
      title: "看板",
      active: 0.78,
    });
    let activeWidth = computed(() => {
      return { width: 15 * state.active + "rem" };
    });
    onMounted(() => {
      console.log(chartColumn);
      const data = state.basicColumnChartProp.data;
      // Step 1: 创建 Chart 对象
      const chart = new Chart({
        container: state.basicColumnChartProp.container, // 指定图表容器 ID
        width: state.basicColumnChartProp.width, // 指定图表宽度
        height: state.basicColumnChartProp.height, // 指定图表高度
        renderer: "svg",
        padding: 0,
      });
      chart.legend(false);
      // chart.tooltip(false)
      // Step 2: 载入数据源
      chart.source(data);
      // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
      chart.interval().position("year*sales").color("year");
      // Step 4: 渲染图表
      chart.render();
      const line = new Chart({
        container: state.lineChart.container, // 指定图表容器 ID
        width: state.lineChart.width, // 指定图表宽度
        height: state.lineChart.height, // 指定图表高度
        renderer: "svg",
        padding: 0,
      });
      line.legend(false);
      line.source(state.lineChart.data);
      line.line().position("year*value");
      line.area().position("year*value");
      line.render();
    });

    return {
      ...toRefs(state),
      activeWidth,
    };
  },
};
</script>
<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 1rem 0;
}
.top-content {
  display: flex;
  justify-content: center;
  .card {
    width: 22.5%;
    margin: 0 1%;
    padding: 0;
    .card-title {
      font-size: 14px;
      line-height: 22px;
      color: rgba(0, 0, 0, 0.45);
    }
    .card-number {
      font-size: 30px;
      line-height: 38px;
    }
    .card-chart {
      height: 60px;
      //   line-height: 50px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .icon {
        width: 1.25rem;
        height: 1.25rem;
      }
      .progress {
        width: 15rem;
        height: 0.5rem;
        background: #f5f5f5;
      }
      .active {
        background: rgb(19, 194, 194);
        height: 0.5rem;
      }
    }
    .card-footer {
      height: 40px;
      padding-top: 4px;
      line-height: 36px;
      border-top: 1px solid #e8e8e8;
    }
  }
}

.ant-card-actions {
  height: 30px;
  line-height: 30px;
}
</style>

<template>
  <div id="chart"></div>
</template>
<script>
import { Chart } from "@antv/g2";
import { reactive, onMounted, toRefs, nextTick } from "vue";
import { chartArea } from "../../utils/chart";
export default {
  props: {
    cardWidth: {
      type: Number,
      default: 275,
    },
  },
  setup(props) {
    const state = reactive({
      lineChart: {
        data: chartArea,
        container: "chart",
        width: props.cardWidth,
        height: 60,
      },
    });
    onMounted(() => {
      const chart = new Chart({
        container: state.lineChart.container, // 指定图表容器 ID
        width: state.lineChart.width, // 指定图表宽度
        height: state.lineChart.height, // 指定图表高度
        renderer: "svg",
        padding: 0,
      });
      chart.legend(false);
      chart.data(state.lineChart.data);
      chart.line().position("year*value");
      chart.area().position("year*value");
      chart.render();
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>
<style lang="scss" scoped>
.card-chart {
  height: 60px;
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
</style>
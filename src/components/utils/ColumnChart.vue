<template>
  <div id="line"></div>
</template>
<script>
import { Chart } from "@antv/g2";
import { reactive, onMounted, toRefs } from "vue";
import { chartColumn } from "../../utils/chart";
export default {
  props: {
    cardWidth: {
      type: Number,
      default: 275,
    },
  },
  setup(props) {
    const state = reactive({
      basicColumnChartProp: {
        data: chartColumn,
        container: "line",
        width: props.cardWidth,
        height: 60,
      },
    });
    onMounted(() => {
      const chart = new Chart({
        container: state.basicColumnChartProp.container, // 指定图表容器 ID
        width: state.basicColumnChartProp.width, // 指定图表宽度
        height: state.basicColumnChartProp.height, // 指定图表高度
        renderer: "svg",
        padding: 0,
      });
      chart.legend(false);
      chart.data(state.basicColumnChartProp.data);
      chart.interval().position("year*sales").color("year");
      chart.render();
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>
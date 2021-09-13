<template>
  <div :id="id"></div>
</template>
<script>
import { Chart } from "@antv/g2";
import { reactive, onMounted, toRefs, watch } from "vue";
import { chartColumn } from "../../utils/chart";
export default {
  props: {
    height: {
      type: String,
      default: 60,
    },
    container: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "normal",
    },
  },
  setup(props) {
    const state = reactive({
      chartData: chartColumn,
      id: props.container,
    });
    // watch(() => props.cardWidth, (val) => {
    //     state.basicColumnChartProp.width = val;
    //     render();
    //   }
    // );
    onMounted(() => {
      render();
    });
    const render = () => {
      let padding;
      if (props.size == "small") {
        padding = [0, 20, 0, 0];
      } else {
        padding = [25, 25, 50, 50];
      }
      const chart = new Chart({
        container: props.container, // 指定图表容器 ID
        autoFit: true,
        height: Number(props.height), // 指定图表高度
        renderer: "svg",
        padding: padding,
      });
      chart.legend(false);
      chart.data(state.chartData);
      chart.interval().position("year*sales").color("year");
      chart.render();
    };
    return {
      ...toRefs(state),
      render,
    };
  },
};
</script>

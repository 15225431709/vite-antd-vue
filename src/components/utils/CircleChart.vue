<template>
  <div :id="id"></div>
</template>
<script lang="ts">
import { Chart } from "@antv/g2";
import { reactive, onMounted, toRefs } from "vue";
import { chartCircle } from "../../utils/chart";
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
  setup(props: any) {
    const state = reactive({
      chartData: chartCircle,
      id: props.container,
    });
    let render = () => {
      let padding;
      if (props.size == "small") {
        padding = [0, 20, 0, 0];
      } else {
        padding = [20, 20, 50, 20];
      }

      const chart = new Chart({
        container: props.container, // 指定图表容器 ID
        autoFit: true,
        height: Number(props.height), // 指定图表高度
        renderer: "svg",
        padding: padding,
      });
      chart.legend(true);
      chart.data(state.chartData);
      chart.scale("value", {
        formatter: (val) => {
          val = val + "%";
          return val;
        },
      });
      chart.coordinate("theta", {
        radius: 0.75,
        innerRadius: 0.6,
      });
      chart.tooltip({
        showTitle: false,
        showMarkers: false,
        itemTpl:
          '<li class="g2-tooltip-list-item"><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>',
      });
      chart
        .interval()
        .adjust("stack")
        .position("value")
        .color("type")
        .shape("slice-shape");
      chart.render();
    };

    onMounted(() => {
      render();
    });
    return {
      ...toRefs(state),
      render,
    };
  },
};
</script>

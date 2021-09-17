<template>
  <div :id="id"></div>
</template>
<script>
import { Chart } from "@antv/g2";
import DataSet from "@antv/data-set";
import { reactive, onMounted, toRefs } from "vue";
// import { chartArea } from "../../utils/chart";
const data = [
  { item: "引用", a: 70, b: 30, c: 60 },
  { item: "产量", a: 60, b: 70, c: 35 },
  { item: "口碑", a: 50, b: 60, c: 70 },
  { item: "贡献", a: 40, b: 50, c: 56 },
  { item: "热度", a: 60, b: 70, c: 77 },
];
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
    const { DataView } = DataSet;
    const dv = new DataView().source(data);
    dv.transform({
      type: "fold",
      fields: ["a", "b", "c"], // 展开字段集
      key: "user", // key字段
      value: "score" // value字段
    });
    console.log(dv)
    const state = reactive({
      id: props.container,
      data: data,
    });

    onMounted(() => {
      render();
    });
    const render = () => {
      let padding;
      if (props.size == "small") {
        padding = 0;
      } else {
        padding = [20, 0, 50, 0];
      }
      const chart = new Chart({
        container: props.container, // 指定图表容器 ID
        autoFit: true, //图表自适应宽度
        height: Number(props.height), // 指定图表高度
        renderer: "svg",
        padding: padding,
      });
      console.log(dv.rows)
      chart.data(dv.rows);
      chart.coordinate("polar", {
        radius: 0.8,
      });
      chart.scale({
        score: {
          min: 0,
          max: 100,
          alias: "金额"
        },
        user: {
          alias: "用户"
        }
      });
      chart.tooltip({
        shared: true,
        showCrosshairs: true,
        crosshairs: {
          line: {
            style: {
              lineDash: [4, 4],
              stroke: "#333",
            },
          },
        },
      });
      chart.axis("item", {
        line: null,
        tickLine: null,
        grid: {
          line: {
            style: {
              lineDash: null,
            },
          },
        },
      });
      chart.axis("score", {
        line: null,
        tickLine: null,
        grid: {
          line: {
            type: "line",
            style: {
              lineDash: null,
            },
          },
        },
      });
      chart.line().position("item*score").color("user").size(2);
      chart.point().position("item*score").color("user").shape("circle").size(4).style({
        stroke: "#fff",
        lineWidth: 1,
        fillOpacity: 1,
      });
      //线模式和区域模式
      // chart.area().position("item*score").color("user"); 
      chart.render();
    };
    return {
      ...toRefs(state),
      render,
    };
  },
};
</script>

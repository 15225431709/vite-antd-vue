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
          <area-chart :cardWidth="cardWidth" class="card-chart" ref="area"></area-chart>
        </div>
        <div class="card-footer">日访问量 <span>1,234</span></div>
      </a-card>
      <a-card size="small" :bordered="false" class="card">
        <div class="card-content">
          <div class="card-title">支付笔数</div>
          <div class="card-number">6560</div>
          <column-chart
            :cardWidth="cardWidth"
            class="card-chart"
            ref="column"
          ></column-chart>
        </div>
        <div class="card-footer">转化率 <span>60%</span></div>
      </a-card>
      <a-card size="small" :bordered="false" class="card">
        <div class="card-content">
          <div class="card-title">运营活动效果</div>
          <div class="card-number">78%</div>
          <div class="card-chart">
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
    <div
      style="width: 96%; margin: 0.75rem 2%; background: #fff; padding: 0.5rem 0.75rem"
    >
      <a-tabs :activeKey="activeKey" @change="callback">
        <a-tab-pane key="1" tab="Tab 1"> Content of Tab Pane 1 </a-tab-pane>
        <a-tab-pane key="2" tab="Tab 2" force-render> Content of Tab Pane 2 </a-tab-pane>
        <a-tab-pane key="3" tab="Tab 3"> Content of Tab Pane 3 </a-tab-pane>
        <template #tabBarExtraContent>
          <!-- <a-button> Extra Action </a-button> -->
          <div style="display: flex; justify-content: flex-start">
            <div class="time-select">今日</div>
            <div class="time-select">今日</div>
            <div class="time-select">今日</div>
            <div class="time-select">今日</div>
            <div class="time-picker">
              <a-date-picker
                :value="formState.startTime"
                show-time
                type="date"
                placeholder="Pick a date"
              />
              <span> - </span>
              <a-date-picker
                :value="formState.endTime"
                show-time
                type="date"
                placeholder="Pick a date"
              />
            </div>           
          </div>
        </template>
      </a-tabs>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, reactive, toRefs, onMounted, computed, nextTick } from "vue";
import AreaChart from "../../components/utils/AreaChart.vue";
import ColumnChart from "../../components/utils/ColumnChart.vue";
export default {
  components: {
    AreaChart,
    ColumnChart,
  },
  setup() {
    const state = reactive({
      title: "看板",
      active: 0.78,
      cardWidth: 0,
      activeKey: "1",
      formState: {
        startTime: "",
        endTime: ""
      }
    });
    const area = ref<null | HTMLElement>(null);
    const renderArea = () => {
      // area.value.render();
    };
    let callback = (val: any) => {
      // console.log(val)
      state.activeKey = val;
    };
    onMounted(() => {
      nextTick(() => {
        const window: any = document.getElementsByClassName("card");
        let width = Number(window[1].offsetWidth);
        state.cardWidth = Number(width) * 0.9;
        console.log(state.cardWidth);
        renderArea();
      });
    });

    return {
      ...toRefs(state),
      area,
      renderArea,
      callback,
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
      height: 30px;
      // padding-top: 4px;
      line-height: 30px;
      border-top: 1px solid #e8e8e8;
    }
  }
}
.time-select {
  margin: 0 0.5rem;
  color: red;
}
.time-picker {
  margin: 0 .5rem
}
.ant-card-actions {
  height: 30px;
  line-height: 30px;
}
</style>

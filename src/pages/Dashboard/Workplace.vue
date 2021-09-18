<template>
  <div class="content">
    <page-header>
      <template #content>
        <div class="slot-content">
          <div class="account">
            <img class="avatar" src="../../../static/image/antd.png" />
            <div class="account-desc">
              <div class="title">晚上好，天野远子，要不要打一把 DOTA</div>
              <div class="desc">前端工程师</div>
            </div>
          </div>
          <div class="datas">
            <div class="item">
              <a-statistic title="项目数" value="56" />
            </div>
            <div class="item">
              <a-statistic title="团队排名" value="8 / 24" />
            </div>
            <div class="item">
              <a-statistic title="项目访问" value="2,245" />
            </div>
          </div>
        </div>
      </template>
    </page-header>
    <div class="table">
      <a-row :gutter="24">
        <a-col :xl="16" :lg="24" :md="24" :sm="24" :xs="24">
          <a-card title="进行中的项目">
            <template #extra> <a>全部项目</a></template>
            <a-card-grid class="grid" v-for="(item, index) in grids" :key="index">
              <div class="grid-title">
                <img class="grid-image" :src="item.src" />
                {{ item.title }}
              </div>
              <div class="grid-desc">{{ item.desc }}</div>
              <div class="grid-footer">
                {{ item.user }}
                <span style="float: right; margin-right: 20px">{{ item.time }}</span>
              </div>
            </a-card-grid>
          </a-card>
          <a-card title="动态" class="list">
            <a-list>
              <a-list-item :key="index" v-for="(item, index) in activities">
                <a-list-item-meta>
                  <template #avatar>
                    <img :src="item.src" class="avatar" />
                  </template>
                  <template #title>
                    <a class="red">{{ item.name }}</a> 在
                    <a class="red">{{ item.group }}</a> {{ item.action }}
                    <a class="red">{{ item.action_name }}</a>
                  </template>
                  <template #description>
                    {{ item.createtime }}
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </a-card>
        </a-col>
        <a-col :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
          <a-card title="快速开始 / 快捷导航" :body-style="{ padding: 0 }">
            <div class="item-group">
              <a>操作一</a>
              <a>操作二</a>
              <a>操作三</a>
              <a>操作四</a>
              <a>操作五</a>
              <a>操作六</a>
              <a-button size="small" type="primary">添加</a-button>
            </div>
          </a-card>
          <a-card title="XX指数" :body-style="{ padding: 0 }" style="margin-top: 20px">
            <div style="width: 95%">
              <radar-chart container="rader" height="360"></radar-chart>
            </div>
          </a-card>
          <a-card title="团队" style="margin-top: 20px">
            <div class="members">
              <a-row>
                <a-col :span="12" v-for="(item, index) in teams" :key="index">
                  <a>
                    <a-avatar size="small" :src="item.avatar" />
                    <span class="member">{{ item.name }}</span>
                  </a>
                </a-col>
              </a-row>
            </div>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import PageHeader from "../../components/utils/PageHeader.vue";
import { gridList, activities, teams } from "./data";
import RadarChart from "../../components/utils/RadarChart.vue";
export default defineComponent({
  components: { PageHeader, RadarChart },
  setup() {
    const state = reactive({
      grids: gridList,
      activities: activities,
      teams: teams,
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>
<style lang="scss" scoped>
@import "./workplace.scss";
</style>

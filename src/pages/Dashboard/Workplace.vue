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
          <a-card title="XX指数" :body-style="{ padding: 0 }" style="margin-top: 20px"></a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import PageHeader from "../../components/utils/PageHeader.vue";
import { gridList, activities } from "./data";
export default defineComponent({
  components: { PageHeader },
  setup() {
    const state = reactive({
      grids: gridList,
      activities: activities,
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>
<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 5px;
  // background: #fff;
}
.table {
  width: 100%;
  padding: 0 2%;
}
.slot-content {
  display: flex;
  justify-content: flex-start;
  padding: 5px 0;
  .account {
    width: 60%;
    display: flex;
    justify-content: flex-start;
    .avatar {
      width: 4.5rem;
      height: 4.5rem;
      border-radius: 50%;
    }
    .account-desc {
      margin-left: 1rem;
      .title {
        font-size: 1.25rem;
        line-height: 2.5rem;
        height: 2.5rem;
      }
      .desc {
        height: 2rem;
        line-height: 2rem;
        color: #000;
        opacity: 0.45;
      }
    }
  }
  .datas {
    width: 40%;
    display: flex;
    justify-content: flex-end;
    padding-right: 1.25rem;
    .item {
      margin: 0 1.25rem;
      padding-top: 0.25rem;
      .label {
        height: 1.75rem;
        line-height: 1.75rem;
        opacity: 0.45;
      }
      .value {
        height: 2.75rem;
        line-height: 2.75rem;
        font-size: 1.25rem;
      }
    }
  }
}
.grid {
  width: 33.3%;
  height: 8rem;
  padding: 16px 24px;
  .grid-title {
    display: flex;
    align-items: center;
  }
  .grid-image {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    margin-right: 0.5rem;
  }
  .grid-desc {
    line-height: 22px;
    color: #000;
    opacity: 0.45;
    height: 44px;
    overflow: hidden;
    margin: 5px 0;
  }
  .grid-footer {
    line-height: 22px;
    color: #000;
    opacity: 0.45;
    font-size: 13px;
  }
}

.list {
  margin: 20px 0;
  .avatar {
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
  }
}
.item-group {
  padding: 20px 0 8px 24px;
  font-size: 0;

  a {
    color: rgba(0, 0, 0, 0.65);
    display: inline-block;
    font-size: 14px;
    margin-bottom: 13px;
    width: 25%;
  }
}
</style>

<template>
  <div class="content">
    <page-header></page-header>
    <div class="form">
      <div class="step">
        <a-steps :current="current">
          <a-step title="填写转账信息" />
          <a-step title="确认转账信息" />
          <a-step title="完成" />
        </a-steps>
      </div>
      <div class="form-content" v-show="current == 0">
        <form-info @next="next"></form-info>
      </div>
      <div class="form-content" v-show="current == 1">
        <form-confrim @confrim="confrim" @back="back" :formState="formState"></form-confrim>
      </div>
      <div class="form-content" v-show="current == 2">
        <form-success @refer="refer" :formState="formState"></form-success>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, toRaw, UnwrapRef } from "vue";
import formInfo from "./step/info.vue";
import formConfrim from "./step/confrim.vue";
import formSuccess from "./step/success.vue"
export default defineComponent({
  components: {
    formInfo,
    formConfrim,
    formSuccess
  },
  setup() {
    const state = reactive({
      current: 0,
      formState: {
        payAccount: "",
        acceptAccount: "",
        accountType: "",
        acceptName: "",
        amount: 0,
      },
    });
    let next = (event: any) => {
      console.log(event);
      state.formState = event;
      state.current++;
    };
    let back = () => {
      state.current--;
    };
    let refer = () => {
      state.current = 0;
    };
    let confrim = () => {
      state.current += 1;
    };
    return {
      labelCol: { style: { width: "150px" } },
      wrapperCol: { span: 14 },
      ...toRefs(state),
      next,
      back,
      refer,
      confrim,
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
}
.form {
  width: 96%;
  margin: 20px 2%;
  background: #fff;
  padding: 20px;
  .step {
    width: 60%;
    margin: 0 20%;
  }
  .form-content {
    width: 90%;
    margin: 0 5%;
    padding: 50px 0;
  }
  .top {
    width: 70%;
    margin: 0 15%;
  }
  .desc {
    line-height: .3rem;
  }
  .description {
    width: 80%;
    margin: 15px 10% 0 10%;
    .item {
      height: .6rem;
      line-height: .6rem;
    }
  }
  .payword {
    display: flex;
    align-items: center;
    width: 80%;
    margin-left: 10%;
  }
  .next {
    width: 80%;
    margin: 20px 10%;
  }
   
}
</style>

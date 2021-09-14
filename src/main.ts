import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index"
import store from "./store/index"
import Antd from "ant-design-vue"
import 'ant-design-vue/dist/antd.css';
import ICON from "./utils/Icon.vue";
import PageHeader from './components/utils/PageHeader.vue'
import * as G2 from '@antv/g2'
const app = createApp(App)
app.use(router)
app.use(store)
app.use(Antd)
app.component('ICON', ICON)
app.component('page-header', PageHeader)
app.config.globalProperties.$G2 = G2
// G2.Global.renderer = 'svg';
app.mount("#app")

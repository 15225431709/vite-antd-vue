import { createRouter, createWebHashHistory } from "vue-router";
//使用createRouter创建路由
export default createRouter({
    //指定路由模式 默认为hash
    history: createWebHashHistory(),
    //路由地址
    routes: [
        {
            path: '/',
            component: () => import("../components/Home.vue"),
            redirect: '/Dashboard/Analysis',
            children: [
                //图表看板
                {
                    path: '/Dashboard/Analysis',
                    name: 'Analysis',
                    component: () => import("../pages/Dashboard/Analysis.vue")
                },
                //工作台
                {
                    path: '/Dashboard/Workplace',
                    name: 'Workplace',
                    component: () => import("../pages/Dashboard/Workplace.vue")
                },
                //基础表单
                {
                    path: "/Form/BasicForm",
                    name: "Basic",
                    component: () => import("../pages/Form/BasicForm.vue")
                },
                //分布表单
                {
                    path: "/Form/stepForm",
                    name: "Step",
                    component: () => import("../pages/Form/StepForm.vue")
                }
            ]
        }
    ]

})
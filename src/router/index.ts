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
        redirect: '/Analysis',
        children: [
            {
                path: '/Analysis',
                name: 'Analysis',
                component: () => import("../pages/Dashboard/Analysis.vue")
            },
            {
                path: '/Workplace',
                name: 'Workplace',
                component: () => import("../pages/Dashboard/Workplace.vue")
            },
        ]
        }
        ]

})
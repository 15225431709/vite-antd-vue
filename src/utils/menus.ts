export const menu: Array<any> = [
    {
        title: '仪表盘', icon: "#icon-dashboard", key: "Dashboard", subMenus: [
            { title: "分析页", name: "Analysis" },
            { title: "工作台", name: "Workplace" }
        ]
    },
    {
        title: '表单页', icon: "#icon-edit", key: "Form", subMenus: [
            { title: "基础表单", name: "Basic" },
            { title: "分布表单", name: "Step" },
            { title: "高级表单", name: "Advanced" }
        ]
    },
    {
        title: '列表页', icon: "#icon-table", key: "List", subMenus: [
            { title: "查询表格", name: "Table" },
            { title: "标准列表", name: "BasicList" },
            { title: "卡片列表", name: "Card" },
            { title: "搜索列表", name: "SearchList" }
        ]
    },
    {
        title: '详情页', icon: "#icon-profile", key: "Profile", subMenus: [
            { title: "基础详情页", name: "BasicProfile" },
            { title: "高级详情页", name: "AdvancedProfile" }
        ]
    },
    {
        title: '结果页', icon: "#icon-result", key: "Result", subMenus: [
            { title: "成功页", name: "Success" },
            { title: "失败页", name: "Error" }
        ]
    },
    {
        title: '异常页', icon: "#icon-dangerous", key: "Error", subMenus: [
            { title: "403", name: "403" },
            { title: "404", name: "404" },
            { title: "500", name: "500" }
        ]
    },
    {
        title: '个人页', icon: "#icon-account", key: "Account", subMenus: [
            { title: "个人中心", name: "UserCenter" },
            { title: "个人设置", name: "Setting" }
        ]
    },
]

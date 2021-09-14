//面积图
const chartArea: Array<any> = [{
    year: '1991',
    value: 15468
}, {
    year: '1992',
    value: 16100
}, {
    year: '1993',
    value: 15900
}, {
    year: '1994',
    value: 17409
}, {
    year: '1995',
    value: 17000
}, {
    year: '1996',
    value: 31056
}, {
    year: '1997',
    value: 31982
}, {
    year: '1998',
    value: 32040
}, {
    year: '1999',
    value: 33233
}];
//柱状图
const chartColumn: Array<any> = [{
    year: '1月',
    sales: 38
}, {
    year: '2月',
    sales: 52
}, {
    year: '3月',
    sales: 61
}, {
    year: '4月',
    sales: 145
}, {
    year: '5月',
    sales: 48
}, {
    year: '6月',
    sales: 38
}, {
    year: '7月',
    sales: 38
}, {
    year: '8月',
    sales: 38
}, {
    year: '9月',
    sales: 33
}, {
    year: '10月',
    sales: 19
}, {
    year: '11月',
    sales: 27
}, {
    year: '12月',
    sales: 22
}];
//饼图
const chartCircle: Array<object> = [
    { type: '家用电器', value: 25 },
    { type: '食用酒水', value: 18 },
    { type: '个护健康', value: 12 },
    { type: '服饰箱包', value: 15 },
    { type: '母婴用品', value: 20 },
    { type: '其他', value: 10 },
]
export {
    chartArea,
    chartColumn,
    chartCircle
}
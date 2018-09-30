/*柱状图*/
var histogram=echarts.init(document.getElementById('histogram'));

var option = {
    color: ['#3398DB'],
    title : {
        text: '各部门添加课程数统计',
        x:'center'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '2%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['综合部', '公务员与转业军官部', `市场开发部(海外事业部)`, `教研部(信息部)`, '创业实训中心', '继续教育部', '职业技能部','鉴定站','学历学位部'],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel:{
                interval:0,
                formatter:function(value){
                    return value.split('(').join('(');
                }
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '50%',
            data:[86, 62, 88, 80, 66, 76, 56,80,74]
        }
    ]
};


histogram.setOption(option);

/*扇形图*/
var sectorchart=echarts.init(document.getElementById('sectorchart'));
option = {
    title : {
        text: '课程类统计',
        x:'left'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'right',
        top:'center',
        data: ['哲学类','法律类','教育类','经济类','管理类','历史类','法学类','人文类','艺术类','其他']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:300, name:'哲学类'},
                {value:110, name:'法律类'},
                {value:134, name:'教育类'},
                {value:100, name:'经济类'},
                {value:548, name:'管理类'},
                {value:35, name:'历史类'},
                {value:200, name:'法学类'},
                {value:100, name:'人文类'},
                {value:35, name:'艺术类'},
                {value:1000, name:'其他'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

sectorchart.setOption(option);

//折线图
var linechart=echarts.init(document.getElementById('linechart'));

option = {
    title : {
        text: '年度课程数对比',
        x:'left'
    },
    xAxis: {
        type: 'category',
        data: ['2014', '2015', '2016', '2017', '2018']
    },
    yAxis: {
        name: `课程数量(节)`,
        type: 'value'
    },
    series: [{
        data: [3134,4000,4500,3750,4100],
        type: 'line'
    }]
};

linechart.setOption(option);
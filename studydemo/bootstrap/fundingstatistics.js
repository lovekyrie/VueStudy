//经费统计
/*柱状图*/
var linechart=echarts.init(document.getElementById('linechart'));

var option = {
  title:{
    text:'各部门产值统计',
    x:'left'
  },
  tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'cross',
          crossStyle: {
              color: '#999'
          }
      }
  },
  legend: {
      data:['产值','增长率']
  },
  xAxis: [
      {
          type: 'category',
          data: ['综合部','公务员与转业军官部','市场开发部(海外事业部)','教研部(信息部)','创业实训中心','继续教育部','职业技能部','鉴定站','学历学位部'],
          axisPointer: {
              type: 'shadow'
          },
          axisLabel:{
            interval:0,
            formatter:function(value){
                return value.split('(').join('(');
            }
        }
      }
  ],
  yAxis: [
      {
          type: 'value',
          name: '产值(元)',
          min: 0,
          max: 1000000,
          interval: 200000,
          axisLabel: {
              formatter: '{value} 元'
          }
      },
      {
          type: 'value',
          name: '同步去年增长%',
          min: -50,
          max: 50,
          interval:25,
          axisLabel: {
              formatter: '{value} %'
          }
      }
  ],
  series: [
      {
          name:'产值',
          type:'bar',
          barWidth: '50%',
          itemStyle:{
            normal:{
              color(){
                return '#3498DB'
              }
            }
          },
          data:[850000, 700000, 870000, 570000, 850000, 730000, 400000,180000, 580000]
      },
      {
          name:'增长率',
          type:'line',
          yAxisIndex: 1,
          itemStyle:{
            normal:{
              lineStyle:{
                color:'#E87C25'
              }
            }
          },
          data:[-1, 5, 0, 6,0, 8, -2, 8,8]
      }
  ]
};

linechart.setOption(option);

//折线图
var histogram=echarts.init(document.getElementById('histogram'));

option = {
  title:{
    text:'各部门利润统计',
    x:'left'
  },
  tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'cross',
          crossStyle: {
              color: '#999'
          }
      }
  },
  legend: {
      data:['利润','增长率']
  },
  xAxis: [
      {
          type: 'category',
          data: ['综合部','公务员与转业军官部','市场开发部(海外事业部)','教研部(信息部)','创业实训中心','继续教育部','职业技能部','鉴定站','学历学位部'],
          axisPointer: {
              type: 'shadow'
          },
          axisLabel:{
            interval:0,
            formatter:function(value){
                return value.split('(').join('(');
            }
        }
      }
  ],
  yAxis: [
      {
          type: 'value',
          name: '利润(元)',
          min: 0,
          max: 1000000,
          interval: 200000,
          axisLabel: {
              formatter: '{value} 元'
          }
      },
      {
          type: 'value',
          name: '同步去年增长%',
          min: -50,
          max: 50,
          interval:25,
          axisLabel: {
              formatter: '{value} %'
          }
      }
  ],
  series: [
      {
          name:'利润',
          type:'bar',
          barWidth: '50%',
          itemStyle:{
            normal:{
              color(){
                return '#3498DB'
              }
            }
          },
          data:[850000, 700000, 870000, 570000, 850000, 730000, 400000,180000, 580000]
      },
      {
          name:'增长率',
          type:'line',
          yAxisIndex: 1,
          itemStyle:{
            normal:{
              lineStyle:{
                color:'#E87C25'
              }
            }
          },
          data:[-1, 5, 0, 6,0, 8, -2, 8,8]
      }
  ]
};

histogram.setOption(option);
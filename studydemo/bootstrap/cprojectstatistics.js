let histogram=echarts.init(document.getElementById('histogram'));

let option = {
  title: {
    text: '各部门项目统计',
    x: 'left'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: { // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  legend: {
    data: ['已结束', '进行中', '计划开班']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: ['综合部','公务员与专业军官部','市场开发部(海外事业部)','教研部(信息部)','创业实训中心','继续教育部', '职业技能部','鉴定站','学位学历部']
  },
  series: [{
      name: '已结束',
      type: 'bar',
      barWidth:'50%',
      stack: '总量',
      label: {
        normal: {
          show: true,
          position: 'insideRight'
        }
      },
      itemStyle:{
        normal:{
          color(){
            return '#304654';
          }
        }
      },
      data: [3,3,5,7,3,3,5,7,3]
    },
    {
      name: '进行中',
      type: 'bar',
      stack: '总量',
      label: {
        normal: {
          show: true,
          position: 'insideRight'
        }
      },
      itemStyle:{
        normal:{
          color(){
            return '#63A0A7';
          }
        }
      },
      data: [4,3,3,8,4,3,3,7,2]
    },
    {
      name: '计划开班',
      type: 'bar',
      stack: '总量',
      label: {
        normal: {
          show: true,
          position: 'insideRight'
        }
      },
      itemStyle:{
        normal:{
          color(){
            return '#D28268';
          }
        }
      },
      data: [3,5,9,2,7,5,8,8,8]
    }
  ]
};

histogram.setOption(option);
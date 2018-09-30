/*柱状图*/
var histogram=echarts.init(document.getElementById('histogram'));

var option = {
  title: {
      text: '深圳月最低生活费组成（单位:元）',
      subtext: 'From ExcelHome',
      sublink: 'http://e.weibo.com/1341556070/AjQH99che'
  },
  tooltip : {
      trigger: 'axis',
      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: function (params) {
          var tar = params[1];
          return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
      }
  },
  grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
  },
  xAxis: {
      type : 'category',
      splitLine: {show:false},
      data : ['全部人才','党政人才','企业经营管理人才','专业技术人才','技能人才','其他']
  },
  yAxis: {
      type : 'value'
  },
  series: [
      {
          name: '辅助',
          type: 'bar',
          stack:  '总量',
          itemStyle: {
              normal: {
                  barBorderColor: 'rgba(0,0,0,0)',
                  color: 'rgba(0,0,0,0)'
              },
              emphasis: {
                  barBorderColor: 'rgba(0,0,0,0)',
                  color: 'rgba(0,0,0,0)'
              }
          },
          data: [0, 36000, 16000, 11000, 6000, 0]
      },
      {
          name: '培养人才数量(人)',
          type: 'bar',
          stack: '总量',
          label: {
              normal: {
                  show: true,
                  position: 'inside'
              }
          },
          data:[46000, 10000, 20000, 5000, 5000, 6000]
      }
  ]
};

histogram.setOption(option);

//折线图
var linechart=echarts.init(document.getElementById('linechart'));

option = {
    title : {
        text: '人才培养人数趋势图',
        x:'center'
    },
    xAxis: {
        type: 'category',
        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    },
    yAxis: {
        name: `培养人才数量(人)`,
        type: 'value'
    },
    series: [{
        data: [5800,6300,7200,6300,7400,8000,7500,8000,7555,8000,8000,8000],
        type: 'line'
    }]
};

linechart.setOption(option);
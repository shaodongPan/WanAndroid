// pages/money/money.js
var wxCharts = require('../../utils/wxcharts.js');
var app = getApp();
var lineChart = null;
Page({
  data: {},
  /**
   * 折线图触摸事件
   */
  touchHandler: function(e) {
    console.log(lineChart.getCurrentDataIndex(e));
    lineChart.showToolTip(e, {
      format: function(item, category) {
        return category + ' ' + item.name + ':' + item.data
      }
    });
  },

  /**
   * 模拟数据
   */
  createSimulationData: function() {
    var categories = [];
    var data = [];
    for (var i = 0; i < 11; i++) {
      categories.push('2019-' + (i + 1));
      data.push(Math.random() * 5 + 1);
    }
    console.log(data)
    // data[4] = null;
    return {
      categories: categories,
      data: data
    }
  },

  onLoad: function(e) {
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    var simulationData = this.createSimulationData();
    lineChart = new wxCharts({
      canvasId: 'lineCanvas',
      type: 'line',
      categories: simulationData.categories,
      animation: false,
      // background: '#f5f5f5',
      series: [{
        name: '价格',
        data: simulationData.data,
        format: function(val, name) {
          return val.toFixed(2);
        }
      }],
      xAxis: {
        disableGrid: true
      },
      yAxis: {
        title: 'DMF折线图',
        format: function(val) {
          return val.toFixed(2);
        },
        min: 0
      },
      width: windowWidth,
      height: 200,
      dataLabel: false,
      dataPointShape: true,
      extra: {
        lineStyle: 'curve'
      }
    });
  }
});
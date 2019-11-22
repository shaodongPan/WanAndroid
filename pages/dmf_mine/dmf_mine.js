// pages/dmf_mine/dmf_mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  startMoneyPages(event) {
    wx.navigateTo({
      url: '/pages/money/money',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})
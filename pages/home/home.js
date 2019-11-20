// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    urls: [],
    aritlces: []
  },


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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    wx.request({
      url: 'https://www.wanandroid.com/banner/json',
      success: (res) => {
        var bannerData = res.data.data
        this.setData({
          urls: bannerData
        })
      }
    })

    wx.request({
      url: 'https://www.wanandroid.com/article/list/0/json',
      success: (res) => {
        var articleData = res.data.data.datas
        this.setData({
          aritlces: articleData
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  handlArticleClick(event) {
    console.log(event)
    var currentTarget = event.currentTarget
    var article_url = currentTarget.dataset.url
    wx.navigateTo({
      url: '/pages/article-detail/article-detail?article_url=' + article_url,
    })
  }
})
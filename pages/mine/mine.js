// pages/mine/mine.js

var app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    is_login: false,
    userName: "请点击头像进行登录"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.checkUserIsLogin()
  },

  /**
   * 检测用户是否登录
   */
  checkUserIsLogin: function() {
    wx.getStorage({
      key: app.globalData.user_info,
      success: function(res) {
        var userInfo = res.data
        //取出用户信息

      },
      fail: () => {
        this.setData({
          is_login: false
        })
      }
    })
  },

  /**
   * 如果没有登录 前去登录，已经登录后不做处理
   */
  handleLogin(event) {
    console.log(this.data.is_login)
    if (this.data.is_login) {
      return
    }

    wx.navigateTo({
      url: '/pages/login/login',
      success: function(res) {

      },
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function(option) {
    return {
      title: "你好啊",
      path: "pages/mine/mine"
    }
  }
})
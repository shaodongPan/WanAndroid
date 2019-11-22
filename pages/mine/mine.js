// pages/mine/mine.js

var app = getApp()
let flashEvent = require('../../utils/FlashEvent.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    isLogin: false,
    userName: "请点击头像进行登录",
    userId: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    this.observeLoginSuccess()

    this.checkUserIsLogin()
  },

  onUnload: function() {
    flashEvent.unregister(flashEvent.EVENT_KEYS.LOGIN_SUCCESS, this);
  },

  /**
   * 监听登录成功事件
   */
  observeLoginSuccess() {
    flashEvent.register(flashEvent.EVENT_KEYS.LOGIN_SUCCESS, this, function(data) {
      wx.getStorage({
        key: app.globalData.user_info,
        success: (res) => {
          
          this.setData({
            isLogin: true,
            userName: res.data.nickname,
            userId: res.data.id
          })
        },

        fail: function(res) {
          console.log(res)
        },
      })
    })
  },

  /**
   * 检测用户是否登录
   */
  checkUserIsLogin: function() {
    wx.getStorage({
      key: app.globalData.user_info,

      success: (res) => {
        var userInfo = res.data
        //取出用户信息
        if (userInfo.userName != '') {
          this.setData({
            isLogin: true,
            userName: userInfo.nickname,
            userId: userInfo.id
          })
        }
      },

      fail: () => {
        this.setData({
          isLogin: false
        })
      }
    })
  },

  handleSetting(event) {
    wx.clearStorage()
  },

  /**
   * 如果没有登录 前去登录，已经登录后不做处理
   */
  handleLogin(event) {
    if (this.data.isLogin) {
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
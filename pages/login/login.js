// pages/login/login.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */

  data: {
    isCanLogin: false,
    loginBackground: "#eaeaea",
    password: "",
    phoneNumber: "",
    userData: {}
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

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

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
   * 输入密码
   */
  inputPassword(options) {
    var password = options.detail.value
    this.setData({
      password: password
    })
    this.checkAndChangeLoginButtonColor()
  },

  /**
   * 输入手机号
   */
  inputPhoneNumber(options) {
    var phoneNumber = options.detail.value
    this.setData({
      phoneNumber: phoneNumber
    })
    this.checkAndChangeLoginButtonColor()
  },

  /**
   * 检测账号密码都输入了，并改变loginbutton的颜色
   */
  checkAndChangeLoginButtonColor() {
    if (this.data.password != "" && this.data.phoneNumber != "") {
      this.setData({
        isCanLogin: true,
        loginBackground: "#000000",
      })
    } else {
      this.setData({
        isCanLogin: false,
        loginBackground: "#eaeaea",
      })
    }
  },

  handleLogin(event) {
    if (this.data.isCanLogin) {
      wx.showLoading({
        title: '登录中',
      })
      wx.request({
        url: 'https://www.wanandroid.com/user/login',
        data: {
          username: this.data.phoneNumber,
          password: this.data.password
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: 'post',
        success: (res) => {
          //存储用户信息
          if (res.data.errorCode == 0) {
            wx.setStorageSync(app.globalData.user_info, res.data.data)
          }
          wx.hideLoading()

          wx.showToast({
            title: '登录成功',
            icon: 'none'
          })

          //返回我的页面
          wx.navigateBack({
            delta: 1
          })

        },
        fail: () => {
          wx.showToast({
            title: '登录失败',
            icon: 'none'
          })
        }
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
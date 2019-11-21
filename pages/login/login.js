// pages/login/login.js
const app = getApp()

import {
  requestLogin
} from '../../service/login.js'

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
      this.doLogin()
    } else {
      this.checkAndShowToast()
    }
  },

  /**
   * 请求登录接口
   */
  doLogin() {
    requestLogin({
      username: this.data.phoneNumber,
      password: this.data.password
    }).then(res => {
      if (res.data.errorCode == 0) {
        wx.setStorageSync(app.globalData.user_info, res.data.data)
      }
      wx.showToast({
        title: '登录成功',
        icon: 'none'
      })
      //返回我的页面
      wx.navigateBack({
        delta: 1
      })
    }).catch(error => {
      console.error(error)
    })
  },

  /**
   * 检测账号密码并提示
   */
  checkAndShowToast() {
    if (this.data.phoneNumber == '') {
      wx.showToast({
        title: '请填写账号',
        icon: 'none'
      })
    } else if (this.data.password == '') {
      wx.showToast({
        title: '请填写密码',
        icon: 'none'
      })
    }
  },
})
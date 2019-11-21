import {
  baseURL,
  timeout
} from './config.js'

export function requestGet(options) {
  wx.showLoading({
    title: '数据加载中ing',
  })

  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + options.url,
      timeout: timeout,
      data: options.data,
      success: function(res) {
        resolve(res.data)
      },
      fail: reject,
      complete: res => {
        wx.hideLoading()
      }
    })
  })
}

export function requestPost(options) {
  wx.showLoading({
    title: '请求ing',
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + options.url,
      timeout: timeout,
      data: options.data,
      method: 'post',
      success: function (res) {
        resolve(res.data)
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      fail: reject,
      complete: res => {
        wx.hideLoading()
      }
    })
  })
}

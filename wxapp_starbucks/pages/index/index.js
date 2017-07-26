//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
  },
  //事件处理函数
  bindViewCoffeeOnMe: function() {
    wx.navigateTo({
      url: '../detail/detail'
    })
  },
})

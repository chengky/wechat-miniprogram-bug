//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  //事件处理函数
  goTabbar: function() {
    wx.switchTab({
        url: '/pages/tabbar/tabbar',
    })
  },
  goNormal: function () {
      wx.navigateTo({
          url: '/pages/normal/normal'
      })
  },
  onLoad: function () {
    
  }
})

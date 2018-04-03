// pages/lastpage/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      fromPath:null
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      if (options.fromPath) {
          this.setData({
              fromPath: options.fromPath
          })
      }
  
  },

  back: function() {
      if(this.data.fromPath) {
          wx.navigateTo({
              url: '/pages/normal/normal',
          });
      } else {
          wx.switchTab({
              url: '/pages/tabbar/tabbar',
          });
      }

  }
})
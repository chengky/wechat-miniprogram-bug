const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
      show: false
  },
  goLastpage: function() {
      wx.redirectTo({
          url: '/pages/lastpage/index',
      })
  },
  load: function () {
      this.setData({ show: true });
      this.circle = this.selectComponent("#circle");
      // 绘制背景圆环
      this.circle.drawCircle('circle_bg', 60, 12);
  }

})
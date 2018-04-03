Component({
    options: {
        multipleSlots: true
    },
    properties: {
        bg: {
            type: String,
            value: 'bg'
        }
    },
    data: {
        size: 0
    },
    methods: {
        drawCircle: function (id, size, width) {
            this.setData({
                size: 2*size
            });
            // 使用 wx.createContext 获取绘图上下文 ctx  绘制背景圆环
            var ctx = wx.createCanvasContext(id, this);
            ctx.setLineWidth(width / 2);
            ctx.setStrokeStyle('#ff4444');
            ctx.setLineCap('round')
            ctx.beginPath();//开始一个新的路径
            //设置一个原点(x,y)，半径为r的圆的路径到当前路径 此处x=y=r
            ctx.arc(size, size, size - width, 0, 2 * Math.PI, false);
            ctx.stroke();//对当前路径进行描边
            ctx.draw();
        }
    },
})

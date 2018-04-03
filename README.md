# wechat-miniprogram-bug
微信小程序BUG复现(Expected updated data but get first rendering data)

操作步骤：
```
1.首页点击“进入tab页调用自定义组件”
2.点击“加载自定义组件”
3.点击“进入下一页再点后退”
4.点击“返回上一步”(使用的wx.switchTab)
```
此时即抛出错误：
```console
渲染层错误
Expected updated data but get first rendering data
渲染层错误
webviewScriptError
Expected updated data but get first rendering data;Expected updated data but get first rendering data
Error: Expected updated data but get first rendering data
    at m (http://127.0.0.1:50022/__pageframe__/__dev__/WAWebview.js:20:26427)
    at http://127.0.0.1:50022/__pageframe__/__dev__/WAWebview.js:20:25581
    at http://127.0.0.1:50022/__pageframe__/__dev__/WAWebview.js:20:30469
    at c.<anonymous> (http://127.0.0.1:50022/__pageframe__/__dev__/WAWebview.js:3:25976)
    at c.emit (http://127.0.0.1:50022/__pageframe__/__dev__/WAWebview.js:4:15192)
    at http://127.0.0.1:50022/__pageframe__/__dev__/WAWebview.js:5:24301
    at e.(anonymous function) (http://127.0.0.1:50022/__pageframe__/__dev__/WAWebview.js:5:8674)
    at d (http://127.0.0.1:50022/__pageframe__/pageframe.html:17:2409)
    at f.a.registerCallback (http://127.0.0.1:50022/__pageframe__/pageframe.html:17:2557)
    at m.forEach (http://127.0.0.1:50022/__pageframe__/pageframe.html:17:858)
```

作为比对，如果自定义组件是在普通页面调用，其他处理逻辑完全相同，则不会报错。
操作步骤：
```
1.首页点击“进入普通页调用自定义组件”
2.点击“加载自定义组件”
3.点击“进入下一页再点后退”
4.点击“返回上一步”(使用的wx.navigateTo)
```

//app.js
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }
    wx.login({
      success: function(res) {
      console.log(res);
       if (res.code) {
         //发起网络请求
         //doSomething
       } else {
         console.log('获取用户登录态失败！' + res.errMsg)
       }
     },
   })

    // wx.cloud.callFunction({
    //   name:'login'
    // }).then((res)=> {
    //   this.globalData.openid = res.result.OPENID
    //   var that = this
    //   wx.cloud.database().collection('user').where({
    //     _openid: res.result.OPENID
    //   }).get({
    //       success(res){
    //         console.log(res)
    //         that.globalData.userInfo = res.data[0]
    //       }
    //   })
    // })
    
    this.globalData = {
      userInfo: null,
      openid: null
    }
    
  }
})

// pages/my/my.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}

  },
  isLogin(){
    wx.getSetting({
      withSubscriptions: true,
    })
  },
  login() {
    var that = this
    wx.getSetting({
      success(res) {
        console.log(res.authSetting)
        wx.request({
          url: 'https://erp.yslcloud.com/process.aspx?action=load_dispgrid&pwd=480074992&billType=PRODUCT&incChild=true&parentId=5616302&sort=id&dir=DESC&incDisabled=false&start=0&limit=100&recCount=10',
          success(res){
            console.log(res.data)
          }
        })
        // res.authSetting = {
        //   "scope.userInfo": true,
        //   "scope.userLocation": true
        // }
      },

    })
    // wx.getUserProfile({
    // desc: '授权登录',
    // success(res){
    //   that.setData({
    //     userInfo: res.userInfo
    //   })
    //   var user = res.userInfo
    //   app.globalData.userInfo = user

    //   console.log(res)

    // wx.cloud.database().collection('user').add({
    //   data: {
    //     avatarUrl: user.avatarUrl,
    //     nickName: user.nickName,
    //   }
    // })

    // }
    // })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({
      userInfo: app.globalData.userInfo
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
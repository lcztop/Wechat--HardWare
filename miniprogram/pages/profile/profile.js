// pages/profile/profile.js

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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

  },
  toShoppingPage: function () {
    wx.navigateTo({
      url: '../hardware/hardware',
    })
  },
  sendReq: function (){
    console.log("Hello world.")
    const serverURL = 'https://service-d1t4upj7-1304578354.sh.apigw.tencentcs.com/release/service-status'
    wx.request({
      url: serverURL,
      success: function(res){
        // this.setData({

        // })
        console.log(res.data)
      }
    })
  }
})
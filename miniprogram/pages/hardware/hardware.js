const WXAPI = require('apifm-wxapi')
const AUTH = require('../../utils/auth')
const TOOLS = require('../../utils/tools')
const testCategory = [
  {'name': '商品类别1', 'id': 100, 'level': 1},
  {'name': '商品类别2', 'id': 101, 'level': 1},
  {'name': '商品类别3', 'id': 102, 'level': 1},
  {'name': '商品类别4', 'id': 103, 'level': 1},
  {'name': '商品类别5', 'id': 104, 'level': 1},
  {'name': '商品类别6', 'id': 105, 'level': 1}
]
const testGood = [
  {'categoryId': '101', 'id': '1','name': '零食大礼包', 'minPrice': '49.9', 'numberSells': '25', 'pic':'https://img1.baidu.com/it/u=1086056681,522763603&fm=26&fmt=auto'},
  {'categoryId': '102', 'id': '2','name': '你要不要吧', 'minPrice': '20000', 'numberSells': '0', 'pic': 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F1212%2F0329d5d1g00r40b3q009zc0006o005kc.gif&refer=http%3A%2F%2Fdingyue.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650876913&t=ecc60834968506e9edb1e0827ab7793b'},
  {'categoryId': '101', 'id': '3','name': '五金器具', 'minPrice': '129', 'numberSells': '10', 'pic': 'https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00184-3228.jpg'},
]

Page({
  /**
   * 页面的初始数据
   */
  data: {
    categories: [],
    activeCategory: 0,
    categorySelected: {
      name: '',
      id: ''
    },
    currentGoods: [],
    onLoadStatus: true,
    scrolltop: 0,

    skuCurGoods: undefined,
    page: 1,
    pageSize: 20
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showShareMenu({
      withShareTicket: true
    })
    this.setData({
      categoryMod: wx.getStorageSync('categoryMod')
    })
    this.categories();
  },
  async categories() {
    wx.showLoading({
      title: '加载中',
    })
    wx.hideLoading()
    let activeCategory = 0
    let categorySelected = testCategory
    
    const categories = testCategory.filter(ele => {
      return !ele.vopCid1 && !ele.vopCid2
    })
    categories.forEach(p => {
      p.childs = categories.filter(ele => {
        return p.id == ele.pid
      })
    })
    const firstCategories = categories.filter(ele => { return ele.level == 1 })

    if (this.data.categorySelected.id) {
      activeCategory = firstCategories.findIndex(ele => {
        return ele.id == this.data.categorySelected.id
      })
      categorySelected = firstCategories[activeCategory]
    } else {
      categorySelected = firstCategories[0]
    }
    // const resAd = await WXAPI.adPosition('category_' + categorySelected.id)
    // let adPosition = null
    // if (resAd.code === 0) {
    //   adPosition = resAd.data
    // }
    this.setData({
      page: 1,
      activeCategory,
      categories,
      firstCategories,
      categorySelected,
    })
    this.getGoodsList()

  },

  async getGoodsList() {
    if (this.data.categoryMod == 2) {
      return
    }
    wx.showLoading({
      title: '加载中',
    })
    let categoryId = ''
    if (this.data.secondCategoryId) {
      categoryId = this.data.secondCategoryId
    } else if(this.data.categorySelected.id) {
      categoryId = this.data.categorySelected.id
    }

    let res = testGood.filter(ele => { return ele.categoryId == categoryId })

    // // https://www.yuque.com/apifm/nu0f75/wg5t98
    // const res = await WXAPI.goodsv2({
    //   categoryId,
    //   page: this.data.page,
    //   pageSize: this.data.pageSize
    // })
    wx.hideLoading()
    if (res.length == 0) {
      if (this.data.page == 1) {
        this.setData({
          currentGoods: null
        });
      } else {
        wx.showToast({
          title: '没有更多了',
          icon: 'none'
        })
      }
      return
    }
    if (this.data.page == 1) {
      this.setData({
        currentGoods: res
      })
    } else {
      this.setData({
        currentGoods: this.data.currentGoods.concat(res)
      })
    }
  
  },
  async onCategoryClick(e) {
    const idx = e.target.dataset.idx
    if (idx == this.data.activeCategory) {
      this.setData({
        scrolltop: 0,
      })
      return
    }
    const categorySelected = this.data.firstCategories[idx]
    // console.log(categorySelected)
    // const res = await WXAPI.adPosition('category_' + categorySelected.id)
    // let adPosition = null
    // if (res.code === 0) {
    //   adPosition = res.data
    // }
    this.setData({
      page: 1,
      secondCategoryId: '',
      activeCategory: idx,
      categorySelected,
      scrolltop: 0
    });
    this.getGoodsList();
  },
  async addShopCar(e) {
    const curGood = this.data.currentGoods.find(ele => {
      return ele.id == e.currentTarget.dataset.id
    })
    console.log(curGood)
    if (!curGood) {
      return
    }
    // 检查当前商品是否仍有库存
    /*if (curGood.stores <= 0) {
       wx.showToast({
         title: '已售罄~',
         icon: 'none'
       })
       return
      } */
    this.addShopCarCheck({
      goodsId: curGood.id,
      buyNumber: 1,
      sku: []
    })
  },
  async addShopCarCheck(options){
    AUTH.checkHasLogined().then(isLogined => {
      this.setData({
        wxlogin: isLogined
      })
      if (isLogined) {
        // 处理加入购物车的业务逻辑
        this.addShopCarDone(options)
      } else {
        AUTH.login(this)
      }
    })
    this.addShopCarDone(options)
  },
  async addShopCarDone(options){
    console.log(options)
    const res = await WXAPI.shippingCarInfoAddItem(wx.getStorageSync('token'), options.goodsId, options.buyNumber, options.sku)
    console.log(res)
    let code = '1000'
    if (code == '100') {
      // 需要选择规格尺寸
      // const skuCurGoodsRes = await WXAPI.goodsDetail(options.goodsId)
      let skuCurGoodsRes = {
        'code': 1,
        'msg': 'yes'
      }
      if (skuCurGoodsRes.code != 0) {
        console.log('123')
        wx.showToast({
          title: skuCurGoodsRes.msg,
          icon: 'none'
        })
        return
      }
      wx.hideTabBar()
      const skuCurGoods = skuCurGoodsRes.data
      skuCurGoods.basicInfo.storesBuy = 1
      this.setData({
        skuCurGoods,
        skuGoodsPic: skuCurGoods.basicInfo.pic,
        selectSizePrice: skuCurGoods.basicInfo.minPrice,
        selectSizeOPrice: skuCurGoods.basicInfo.originalPrice,
        skuCurGoodsShow: true
      })
      return
    }
    // if (code != 0) {
    //   wx.showToast({
    //     title: res.msg,
    //     icon: 'none'
    //   })
    //   return
    // }
    // wx.showToast({
    //   title: '加入成功',
    //   icon: 'success'
    // })
    // this.setData({
    //   skuCurGoods: null,
    //   skuCurGoodsShow: false
    // })
    wx.showTabBar()
    
    TOOLS.showTabBarBadge() // 获取购物车数据，显示TabBarBadge
    
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
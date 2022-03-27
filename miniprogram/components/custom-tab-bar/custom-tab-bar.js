
Component({

  data: {
    selected: wx.getStorageSync('selected'),
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
        pagePath: "../../pages/profile/profile",
        iconPath: "../../images/profile.png",
        selectedIconPath: "../../images/profile-act.png",
        text: "首页"
      }, 
      {
        pagePath: "../../pages/fuligou/fuligou",
        iconPath: "../../images/gift.png",
        selectedIconPath: "../../images/gift-act.png",
        text: "福利购"
      },
      {
        pagePath: "../../pages/erweima/erweima",
        iconPath: "../../images/code.png",
        selectedIconPath: "../../images/code-act.png",
        text: "会员码"
      },
      {
        pagePath: "../../pages/xingxiaoxi/xingxiaoxi",
        iconPath: "../../images/star.png",
        selectedIconPath: "../../images/star-act.png",
        text: "星消息"
      },
      {
        pagePath: "../../pages/my/my",
        iconPath: "../../images/my.png",
        selectedIconPath: "../../images/my-act.png",
        text: "我的"
      },
    ]
  },
  attached() {},
  created:function () {
    console.log(this.data.selected)
  },
  methods: {
    
    switchTab(e) {
      let data = e.currentTarget.dataset

      console.log(data)
      let url = data.path
      let res = wx.setStorageSync('selected', data.index)
      console.log(res)
      this.setData({
        selected: data.index
      })
      wx.switchTab({
        url
      })
    }
  }
})
Component({
  properties: {
    selectedFromPage: {
      type: Int16Array,
      value: 0
    }
  },
  data: {
    selected: 0,
    color: "#EAEAEA",
    selectedColor: "#3cc51f",
    list: [{
        pagePath: "../../pages/profile/profile",
        iconPath: "../../images/profile.png",
        selectedIconPath: "../../images/profile-act.png",
        text: "首页"
      },
      // {
      //   pagePath: "../../pages/fuligou/fuligou",
      //   iconPath: "../../images/gift.png",
      //   selectedIconPath: "../../images/gift-act.png",
      //   text: "福利购"
      // },
      {
        pagePath: "../../pages/hardware/hardware",
        iconPath: "../../images/code.png",
        selectedIconPath: "../../images/code-act.png",
        text: "五金小店"
      },

      {
        pagePath: "../../pages/gouwuche/gouwuche",
        iconPath: "../../images/star.png",
        selectedIconPath: "../../images/star-act.png",
        text: "购物车"
      },
      {
        pagePath: "../../pages/my/my",
        iconPath: "../../images/my.png",
        selectedIconPath: "../../images/my-act.png",
        text: "我"
      },
    ]
  },
  attached() {},

  pageLifetimes: {
    show: function () {
      let res = parseInt(this.data.selectedFromPage)
      this.setData({
        selected: res
      })
    },
  },

  methods: {
    switchTab(e) {
      let data = e.currentTarget.dataset
      let url = data.path
      console.log(url)
      wx.switchTab({
        url
      })
    }
  }
})
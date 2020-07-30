//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '测试',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // btna: function (e) {
  //   console.log("点了确定");
  //   console.log(e);
  // },
  // inputVal:function(e){
  //   console.log(e.detail);
  // },
  loginForm:function(e){
    if(e.detail.value.anhao=='1004'){
      // wx.showToast({
      //   title: '回答正确',
      //   icon: 'none',
      //   duration: 1500
      // })
      // wx.showModal({
      //   title: '提示',
      //   content: '是否跳转？',
      //   success: function (res) {
      //     if (res.confirm) {//这里是点击了确定以后
      //       console.log('用户点击确定')
      //       wx.redirectTo({url:"../test2/test2"}); 
      //     } else {//这里是点击了取消以后
      //       console.log('用户点击取消')
      //     }
      //   }
      // })
      // 有返回跳转
    //   wx.navigateTo({
    //     url: '/pages/helloworld/helloworld'
    //  })
     wx.redirectTo({
      url: '/pages/helloworld2/helloworld2'
     })
//     wx.reLaunch({
//       url: '/pages/helloworld/helloworld'
// })
// wx.switchTab({
//   url:  '/pages/logs/logs'
// })
    }else{
      wx.showToast({
        title: '暗号错误！',
        icon: 'none',
        duration: 1500
      })
    }
      console.log(e);
  }
})

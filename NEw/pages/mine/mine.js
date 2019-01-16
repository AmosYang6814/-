// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userfor:"",
    hasuerfo:false,
    list:[
      { "id": 2, "name": "我的消息"},
      { "id": 3, "name": "我的已购" },
      { "id": 4, "name": "金币商城" }, 
      { "id": 5, "name": "我的钱包" },
      { "id": 6, "name": "扫一扫" },
      { "id": 7, "name": "设置" },
    ]

  },
touchLoginEvent:function(){
  wx.navigateTo({
    url: '../denglu/denglu',
  })
},
  touchwxEvent:function(){
    wx.navigateTo({
      url: '../wxlogin/wxlogin',
    })
  },
  follow:function(){
wx.switchTab({
  url: '../newsfollow/newsfollow',
})
},
touchEvent:function(){
  wx.navigateTo({
    url: '../next/next',
  })
  }, 
  touchCommentEvent: function () {
    wx.navigateTo({
      url: '../comment/comment',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '个人中心',
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
// pages/newsContent/newsContent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '新闻内容',
    })

    var c = JSON.parse(options.c);
    var that = this;
    var b = console;
    var app = getApp();
   // console.log("data1:" + app.globalData.data);
      this.setData({content:c});
      
  },
  ba:function(){
    wx.navigateBack({
      delta: 1,
    })
  },

  comment:function(){
      wx.navigateTo({
        url: '../news/news',
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

  },
  onError: function (err) {
console("页面局部错误");
  }
})
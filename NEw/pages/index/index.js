//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    content: null,
    color: ['#8B864E', '#8B864E', '#8B864E', '#8B864E', '#8B864E', '#8B864E', '#8B864E'],
    color0: ['#8B1A1A', '#8B864E', '#8B864E', '#8B864E', '#8B864E', '#8B864E', '#8B864E'],
    color1: ['#8B864E', '#8B1A1A', '#8B864E', '#8B864E', '#8B864E', '#8B864E', '#8B864E'],
    color2: ['#8B864E', '#8B864E', '#8B1A1A', '#8B864E', '#8B864E', '#8B864E', '#8B864E'],
    color3: ['#8B864E', '#8B864E', '#8B864E', '#8B1A1A', '#8B864E', '#8B864E', '#8B864E'],
    color4: ['#8B864E', '#8B864E', '#8B864E', '#8B864E', '#8B1A1A', '#8B864E', '#8B864E'],
    color5: ['#8B864E', '#8B864E', '#8B864E', '#8B864E', '#8B864E', '#8B1A1A', '#8B864E'],
    color6: ['#8B864E', '#8B864E', '#8B864E', '#8B864E', '#8B864E', '#8B864E', '#8B1A1A'],
    text1: null,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    title:null,
    time:null,
    type:null,
    source:null,
    desc:null,
    url1:null,
    url2:null,
    url3:null,
    url4:null,
    url5:null,
    url6:null
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  binput: function (e) {
    this.setData({ text1: e.detail.value });
  },
  research: function (e) {
    
    var that = this;
    if (that.data.text1!=null){
      var key = that.data.text1;
    }
    else{
      var key = '习近平改革开放';
    }
    wx.request({
      url: 'https://route.showapi.com/109-35',
      data: {
        showapi_appid: 84563,
        showapi_sign: "04ef8e3e46f9429a8e4e1baafb322d09",
        title: key,
      },
      success: function (e) {
        console.log(e);
        that.setData({ content: e.data.showapi_res_body.pagebean.contentlist }),
          console.log(that.data.content);
          
      },
      fail: function () {
        console.log("连接失败");
      }
    })
  },

  enternew:function(e){
    var kind = e.target.id;
    console.log(this.data.content[kind]);
   /* this.data.content[kind].imageurls = encodeURIComponent(this.data.content[kind].imageurls);*/
    var model= JSON.stringify(this.data.content[kind]);
  /*  this.setData({ time: this.data.content[kind].pubDate, type: this.data.content[kind].channelName, title: this.data.content[kind].title, source: this.data.content[kind].source, desc: this.data.content[kind].desc, url1: this.data.content[kind].imageurls[0], url2: this.data.content[kind].imageurls[1], url3: this.data.content[kind].imageurls[2], url4: this.data.content[kind].imageurls[3], url5: this.data.content[kind].imageurls[4], url6: this.data.content[kind].imageurls[6]}) */
    wx.navigateTo({
      url: '../content/content?c=' + model,
      /* ?time='+this.data.time+'&type='+this.data.type+'&title'+this.data.title+'&source='+this.data.source+'&url1='+this.data.url1+'&url2='+this.data.url2+'&url3='+this.data.url3+'&url4='+this.data.url4+'&url5='+this.data.url5+'&url6='+this.data.url6 */
    })
  },
  entercommment:function(){
    wx.navigateTo({
      url: '../news/news',
    })
  },

  search:function(e){
    var key= e.target.id; 
    var that = this;
    var sa;
      if (key == "头条")
      {
       this.setData({
        color:this.data.color0});
      }
     else if (key == "段子") {
        this.setData({
          color: this.data.color1
        });
      }
      else if (key == "娱乐") {
        this.setData({
          color: this.data.color2
        });
      }
      else if (key == "体育") {
        this.setData({
          color: this.data.color3
        });
      }
      else if (key == "军事") {
        this.setData({
          color: this.data.color4
        });
      }
      else if (key == "历史") {
        this.setData({
          color: this.data.color5
        });
      }
      else if (key == "漫画") {
        this.setData({
          color: this.data.color6
        });
      }else{
       console.log("无颜色修改");
      }
    wx.request({
      url: 'https://route.showapi.com/109-35',
      data: {
        showapi_appid: 84563,
        showapi_sign: "04ef8e3e46f9429a8e4e1baafb322d09",
        title: key,
      },
      success: function (e) {
        console.log(e);
        that.setData({ content: e.data.showapi_res_body.pagebean.contentlist }),
          console.log(that.data.content);
      },
      
      fail: function () {
        console.log("连接失败");
      }
    })
  },



  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '首页',
    })

    var that = this;
    wx.request({
      url: 'https://route.showapi.com/109-35',
      data: {
        showapi_appid: 84563,
        showapi_sign: "04ef8e3e46f9429a8e4e1baafb322d09",
      },
      success: function (e) {
        console.log(e);
        that.setData({ content: e.data.showapi_res_body.pagebean.contentlist }),
          console.log(that.data.content);
      },
      fail: function () {
        console.log("连接失败");
      }
    })
  }
})

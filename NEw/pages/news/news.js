Page({
  data: {

    comment: [
      {
        url: "../../image/zan1.png",
        statue: 0,
        id: "",
        touxiang_url: "http://p1.qqyou.com/touxiang/uploadpic/2013-5/23/201305230702574683.jpg",
        frist_comment: "热爱祖国",
        response: "我们伟大的习总书记",
      }, {
        url: "../../image/zan1.png",
        statue: 0,
        id: "",
        touxiang_url: "http://www.telnote.cn/qqtouxiang/images/20120413/20120413093640124.jpg",
        frist_comment: "为中华名族的崛起而奋斗",
        response: "我们一起加油！",
      }, {
        url: "../../image/zan1.png",
        statue: 0,
        id: "",
        touxiang_url: "http://photocdn.sohu.com/20160305/mp62035363_1457167678870_9.jpeg",
        frist_comment: "树立崇高的人生理想目标",
        response: "坚持，奋斗，成就自我！",
      }, {
        url: "../../image/zan1.png",
        statue: 0,
        id: "",
        touxiang_url: "http://imgsrc.baidu.com/imgad/pic/item/ac6eddc451da81cb8386a3ee5866d016092431b4.jpg",
        frist_comment: "风萧萧兮易水寒",
        response: "壮士一去兮不复还",
      },
      {
        url: "../../image/zan1.png",
        statue: 0,
        id: "",
        touxiang_url: "http://img1.touxiang.cn/uploads/20131121/21-074919_163.jpg",
        frist_comment: "孤舟蓑笠翁",
        response: "独钓寒江雪",
      }, {
        url: "../../image/zan1.png",
        statue: 0,
        id: "",
        touxiang_url: "http://www.36588.com.cn:8080/ImageResourceMongo/UploadedFile/dimension/big/68615c48-8f4c-4341-b39d-cfae71719434.png",
        frist_comment: "只解沙场为国死，何须马革裹尸还。",
        response: "商女不知亡国恨，隔江犹唱后庭花。",
      }, {
        url: "../../image/zan1.png",
        statue: 0,
        id: "",
        touxiang_url: "http://ww2.sinaimg.cn/thumb300/005OHrnkgw1evdtoe0xzxj30hs0hswf6.jpg",
        frist_comment: "入则无法家拂士，出则无敌国外患者，国恒亡。",
        response: "小楼昨夜又东风，故国不堪回首月明中。",
      }, {
        url: "../../image/zan1.png",
        statue: 0,
        id: "",
        touxiang_url: "http://p1.qqyou.com/touxiang/uploadpic/2013-5/23/201305230702574683.jpg",
        frist_comment: "世间无限丹青手，一片伤心画不成。",
        response: "黄沙百战穿金甲，不破楼兰终不还。",
      }
    ]
  },
  onLoad:function(){
    wx.setNavigationBarTitle({
      title: '评论',
    })

  },
  //事件处理函数
  click: function (e) {

    console.log(e);

    var index = e.target.id;
    var sa = 'comment[' + index + '].url';
    var statues = 'comment[' + index + '].statue';
    console.log(this.data.comment[index].statue);
    if (this.data.comment[index].statue == 0)
      this.setData({
        [statues]: 1,
        [sa]: "../../image/zan.png",
      })
    else
      this.setData({
        [statues]: 0,
        [sa]: "../../image/zan1.png",
      })


  }

})
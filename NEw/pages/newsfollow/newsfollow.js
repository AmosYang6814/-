//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    comment: [
      {
        url: "../../image/zan1.png",
        statue: 0,
        id: "",
        touxiang_url: "http://p1.qqyou.com/touxiang/uploadpic/2013-5/23/201305230702574683.jpg",
        frist_comment: "兔子爷爷",
        response: "美丽美妆设计师",
        followText: '已关注',
        bc: '#c4c4c4',
      }, {
        url: "../../image/zan1.png",
        statue: 0,
        id: "",
        touxiang_url: "http://www.telnote.cn/qqtouxiang/images/20120413/20120413093640124.jpg",
        frist_comment: "呵呵",
        response: "一个家庭主男",
        followText: '已关注',
        bc: '#c4c4c4',
      }, {
        url: "../../image/zan1.png",
        statue: 0,
        id: "",
        touxiang_url: "http://photocdn.sohu.com/20160305/mp62035363_1457167678870_9.jpeg",
        frist_comment: "大兵",
        response: "我是一个老男人",
        followText: '已关注',
        bc: '#c4c4c4',
      }, {
        url: "../../image/zan1.png",
        statue: 0,
        id: "",
        touxiang_url: "http://imgsrc.baidu.com/imgad/pic/item/ac6eddc451da81cb8386a3ee5866d016092431b4.jpg",
        frist_comment: "坏女孩",
        response: "来跟我玩嘛！",
        followText: '已关注',
        bc: '#c4c4c4',
      },
      {
        url: "../../image/zan1.png",
        statue: 0,
        id: "",
        touxiang_url: "http://img1.touxiang.cn/uploads/20131121/21-074919_163.jpg",
        frist_comment: "小猫",
        response: "要做一个坚强的女孩",
        followText: '已关注',
        bc: '#c4c4c4',
      }, {
        url: "../../image/zan1.png",
        statue: 0,
        id: "",
        touxiang_url: "http://www.36588.com.cn:8080/ImageResourceMongo/UploadedFile/dimension/big/68615c48-8f4c-4341-b39d-cfae71719434.png",
        frist_comment: "怪人",
        response: "大绅士",
        followText: '已关注',
        bc: '#c4c4c4',
      }, {
        url: "../../image/zan1.png",
        statue: 0,
        id: "",
        touxiang_url: "http://ww2.sinaimg.cn/thumb300/005OHrnkgw1evdtoe0xzxj30hs0hswf6.jpg",
        frist_comment: "流年往事",
        response: "撒隔热隔热范围",
        followText: '已关注',
        bc: '#c4c4c4',
      }, {
        url: "../../image/zan1.png",
        statue: 0,
        id: "",
        touxiang_url: "http://p1.qqyou.com/touxiang/uploadpic/2013-5/23/201305230702574683.jpg",
        frist_comment: "飒飒调查显示",
        response: "往事如烟",
        followText: '已关注',
        bc: '#c4c4c4',
      }
    ]
  },
  //事件处理函数
  click: function (e) {
    var index = e.target.id;
    console.log(index);
    var u = 'comment[' + index + '].followText';
    var c = 'comment[' + index + '].bc'
    var statues = 'comment[' + index + '].statue';
    if (this.data.comment[index].statue == 0)
      this.setData({
        [statues]: 1,
        [u]: "未关注",
        [c]: "red"
      })
    else
      this.setData({
        [statues]: 0,
        [u]: "已关注",
        [c]: "#c4c4c4"
      })
  }

})

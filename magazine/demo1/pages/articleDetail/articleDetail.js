// pages/articleDetail/articleDetail.js
var request = require('../../utils/requre.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleDetail: '',
    danmuList: [{
        text: '我要给你点颜色看看',
        color: '#000',
        time: 1
      },
      {
        text: '我要给你点颜色看看',
        color: '#000',
        time: 2
      },
      {
        text: '我要给你点颜色看看',
        color: '#000',
        time: 3
      },
      {
        text: '这是黑色',
        color: '#000',
        time: 5
      },
      {
        text: '这是绿色',
        color: 'green',
        time: 6
      },
      {
        text: '这是红色',
        color: 'red',
        time: 7
      },
      {
        text: '这是黄色',
        color: 'yellow',
        time: 7
      },
      {
        text: '这是蓝色',
        color: 'blue',
        time: 8
      },
      {
        text: '这是粉色',
        color: 'pink',
        time: 10
      },
      {
        text: '这是灰色',
        color: 'gray',
        time: 12
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var articleoId = options.id;
    this.getData(articleoId);
   


  },
  getData(articleoId) {
    var self = this;
    request({
      url: 'getArticleDetail/' + articleoId,
      success: function(res) {
        self.setData({
          articleDetail: res
        })
      }
    })
  },

  onAudioPlay:function(){
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    backgroundAudioManager.title = '此时此刻'
    backgroundAudioManager.epname = '此时此刻'
    backgroundAudioManager.singer = '许巍'
    backgroundAudioManager.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
    // 设置了 src 之后会自动播放
    backgroundAudioManager.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
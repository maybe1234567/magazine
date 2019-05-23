// pages/third/third.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recommend: '',
    type: [],
    article: '',
    likeData: {
      // 0: false,
      // 1: false,
      // 2: false,
      // 3: false,
      // 4: true,
      // 5: false,
      // 6: false,
      // 7: false
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var self = this;
    wx.request({
        url: 'https://easy-mock.com/mock/5bb8c1c63ccc501a316e3ccb/magazine/getRecommendInfo',
        type: 'GET',
        success: function(res) {
          self.setData({
            recommend: res.data.data
          })
        },
      }),
      wx.request({
        url: 'https://easy-mock.com/mock/5bb8c1c63ccc501a316e3ccb/magazine/home',
        type: 'GET',
        success: function(res) {
          self.setData({
            type: res.data.markType,
            article: res.data.articleList
          })
        }
      }),
      this.getLikeList()
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

  },

  getMore: function(e) {
    wx.showActionSheet({
      itemList: ['内容过期了', '内容和' + e.currentTarget.dataset.id + '不相关', '不再显示来自' + e.currentTarget.dataset.id + '的内容'],
      itemColor: "#00b26a",
      success: function(res) {
        console.log(res.tapIndex)
      }
    })
  },
  getLikeList: function() {
    var likeListStorage = wx.getStorageSync('listLike');
    if (!likeListStorage) {
      likeListStorage = {}
    }
    this.setData({
      likeData: likeListStorage
    })
  },
  
  like: function(e) {
   var index = e.currentTarget.dataset.index;
    var likeData = this.data.likeData;
    var islike = likeData[index];
    likeData[index]=!islike;
    this.setData({likeData,likeData})
   wx.setStorageSync('listLike', likeData)
  },
  getTapId:function(e){
    var typeId = e.currentTarget.dataset.typeid;
    wx.navigateTo({
      url: '/pages/type/type?typeId=' + typeId
    })
  },
  articleId: function (e) {
    var articleId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/articleDetail/articleDetail?id=' + articleId
    })
  },
})
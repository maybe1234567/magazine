
Page({

  /*** 页面的初始数据 */
  data: {
    userInfo: [],
    authorized: false,
    likeList: []
  },

  /*** 生命周期函数--监听页面加载*/
  onLoad: function(options) {
    this.getSetting()
  },
  onShow() {
    this.getMyLike()
  },





  getSetting() {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              this.setData({
                userInfo: res.userInfo,
                authorized: true
              })
              this.getMyLike()
            }
          })
        }
      }
    })
  },


  getUserInfo(e) {
    if (e.detail.userInfo) {
      this.setData({
        userInfo: e.detail.userInfo
      })
      this.getMyLike()
    }
  },
  getMyLike() {
    const likeList = wx.getStorageSync('likeList') || [];
    this.setData({
      likeList
    })
  }

})
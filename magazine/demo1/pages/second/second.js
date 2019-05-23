// pages/second/second.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*显示消息提示框接口 */
    // wx.showToast({
    //   title:'吃饭了吗？',
    //   icon:'loading',
    //   duration:3000,
    //   mask:true,
    //   success:function(res){
    //     console.log(res)
    //   }
    // })

    /*模态对话框 */
    // wx.showModal({
    //   title:'谁最漂亮？',
    //   content:'想好了再回答',
    //   showCancel:true,
    //   cancelText:'杉杉最美',
    //   confirmText:'最美杉杉',
    //   success:function(res){
    //     // console.log(res)
    //     if(res.confirm){
    //       wx.showToast({
    //         title: '机智的少年',
    //         duration:4000
    //       })
    //     }else{
    //       wx.showToast({
    //         title: '你最帅',
    //         duration:3000
    //       })
    //     }
    //   }
    // })

    /*loading提示框 */
    // wx.showLoading({
    //   title:'操作非法' //主动调用wx.hideLoading才可以关闭
    // })

    /* */

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

  click: function () {
    wx.hideLoading()
  }

})


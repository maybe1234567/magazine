// components/article/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleDetail: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeStatus: false
  },
  attached() {
    const articleDetail = this.data.articleDetail;
    const artId = articleDetail.artId;
    const likeList = wx.getStorageSync('likeList') || [];
    let likeStatus = false;
    likeList.forEach((ele, index) => {
      if (ele.artId == artId) {
        likeStatus = true
      }
    })
    this.setData({
      likeStatus
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike(e) {
      const articleDetail = this.data.articleDetail;
      const artId = articleDetail.artId;
      const like = e.detail.like;
      const likeList = wx.getStorageSync('likeList') || [];

      if (like) {
        //缓存文章
        likeList.unshift(articleDetail)
        wx.setStorageSync('likeList', likeList)

      } else {
        //缓存移除
        likeList.forEach((ele, index) => {
          if (ele.artId == artId) {
            likeList.splice(index, 1)
          }
          wx.setStorageSync('likeList', likeList)
        })
      }
    }
  }
})
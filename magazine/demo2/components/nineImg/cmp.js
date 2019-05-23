// components/nieImg/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    mainTitle:String,
    imgSrc: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
     
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap: function(e) {
      let index = e.currentTarget.dataset.index;
      const imgSrc = this.data.imgSrc[index];
      console.log(imgSrc)
      wx.previewImage({
        urls: this.data.imgSrc,
          current: imgSrc
      })
    }
  }
})
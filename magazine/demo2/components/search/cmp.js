// components/search/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    value: String
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
    onSearch(){
      const value = this.data.value;
      if (value !=='读书'){
        wx.showToast({
          title: '对不起，目前只支持读书页搜索',
          icon:'none',
          duration:2000
        })
        return
      }else{
        wx.navigateTo({
          url: `/pages/search/search?SearchWold=${value}`
        })
      }
     
    },
    onInput(e){
     this.setData({
       value: e.detail.value
     })
    }
  }
})

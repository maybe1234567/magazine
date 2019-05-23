// components/recommend/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommend:Object,
    magazineId:Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    date:'',
    magazineTypeArr: ['青芒', '兴趣', '物质', '世界', '新事', '灵魂']
  },
  attached(){
    this.getDate()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getDate(){
      const month = new Date().getMonth()+1
      const day = new Date().getDate()
     this.setData({
       date:`${month}月${day}日`
     })
    }
  }
})

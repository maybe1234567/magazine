import {IndexModule} from '../../module/index.js'
import {random} from '../../utils/randomStr.js'
const indexModule = new IndexModule();
Page({
  data: {
    articleList:[],
    markList:[],
    recommendInfo:[],
    getMore:'',
    magazineId:0,
    loading:true
  },
  //事件处理函数
 
  onLoad:function(options) {
   this.getData()
    wx.setTabBarStyle({
      color: '#000000',
      selectedColor: '#00b62a',
      backgroundColor: '#eeeeee',
      borderStyle: 'white'
    })
  },
  onReachBottom(){
    this.setData({
      getMore: random(5)
    })
  },

  getData(magazineId){
    const articleList = indexModule.getArticleList(magazineId);
    const markList = indexModule.getMarkList(magazineId);
    const recommendInfo = indexModule.getRecommendInfo(magazineId);

    Promise.all([articleList, markList, recommendInfo]).then(res => {
      this.setData({
        articleList:res[0],
        markList:res[1],
        recommendInfo:res[2],
        loading:false
      })
    },err=>{
      this.setData({
        loading:false
      })
    })
  },


  onCatLog(){
    wx.switchTab({
      url:'/pages/catlog/catlog'
    })
  },



  onNav(e){
    const magazineId = e.detail.index;
    this.getData(magazineId);
    this.setData({
      magazineId
    })

    wx.pageScrollTo({
      scrollTop: 0,
      duration:0
    })


  }

})

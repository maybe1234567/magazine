import { SearchModule} from '../../module/search.js'
import {random} from '../../utils/randomStr.js'
const searchModule = new SearchModule();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:'',
    tag: '',
    recommend: '',
    articleList:[],
    more:'saf'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const value = options.SearchWold;
    this.setData({
      value: value
    })
    this.getData(value)

  },
  getData(value){
    const getSearchRecommend = searchModule.getSearchRecommend(value);
    const getSearchArticleList = searchModule.getSearchArticleList(value);
    Promise.all([getSearchRecommend, getSearchArticleList]).then(res=>{
      this.setData({
        tag:res[0].tag,
        recommend:res[0].recommend,
        articleList:res[1]

      })
    })
  },

  
  onReachBottom: function () {
    this.setData({
      more:random(20)
    })
  },

  
})
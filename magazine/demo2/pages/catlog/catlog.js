import {
  tagInfoList
} from '../../utils/tagList.js'
import {
  Subscribe
} from '../../module/subsrcibe.js';
const subscribeModel = new Subscribe()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tagInfoList: '',
    myMarkList: [],
    value:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      tagInfoList: tagInfoList
    })
    this.getData()
  },
  onShow(){
    this.setData({
      value:''
    })
  },
  getData(){
    const markList = subscribeModel.getMyTagList();
    this.setData({
      myMarkList: markList
    })
  },
  onTap(){
    this.getData()
  }


})
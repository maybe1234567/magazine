import {IndexModule} from '../../module/index.js'
import { SearchModule } from '../../module/search.js'
import { random } from '../../utils/randomStr.js'
const searchModule = new SearchModule();
const indexModule = new IndexModule();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleList: {
      type: Array,
      value: [],
      observer() {}
    },

    more: {
      type: String,
      value: '',
      observer: 'loaderMore'
    },
    magazineId: {
      type: Number,
      value: 0,
      observer: 'hasMoreData'
    },
    word:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    loading: false,
    noMoreData: false,
    type: ''
  },

  /*判断文章列表存在Index页还是Search页 */
  attached() {
    let type = '';
    const curPages = getCurrentPages();
    console.log(curPages)
    const index = curPages.length - 1;
    if (curPages[index].route ==="pages/search/search") {
      type = 'search'
    } else {
      type = 'index'
    }
    this.setData({
      type:type
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    /*下拉时加载更多资源 */
    loaderMore() {
      if (this.data.loading || this.data.noMoreData) {
        console.log(this.data.loading, this.data.noMoreData)
        return
      }
      this.setData({
        loading: true
      })
      /*文章列表在Search页时使用searchModule */
      if (this.data.type == 'search') {
        const word = this.data.word;
        const start = this.data.articleList.length;
        searchModule.getSearchArticleList(word,start).then(res=>{
          this.combine(res)
        })
      } else {
      /*文章列表在Search页时使用IndexModule */
        this.getMore()
      }},


    /*没有更多资源时显示信息 */
    hasMoreData() {
      this.setData({
        noMoreData: false
      })
    },


    /*文章列表在Search页时使用IndexModule */
    getMore() {
      const magazineId = this.data.magazineId;
      const start = this.data.articleList.length;
      indexModule.getArticleList(magazineId, start).then(res => {
       this.combine(res)
      }, err => {
        this.setData({
          loading: false
        })
      })
    },

    /*加载完数据和原来的articleList合并重新渲染 */
    combine(res){
      const combineList = this.data.articleList.concat(res)
      if (combineList.length == this.data.articleList.length) {
        this.setData({
          noMoreData: true,
          loading: false
        })
        return
      }
      this.setData({
        articleList: combineList,
        loading: false
      })
    }
  }
})
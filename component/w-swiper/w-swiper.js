// component/w-swiper/w-swiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    urls:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    indicatorDots: 3,
    autoplay: true,
    interval: 5000,
    duration: 500,
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
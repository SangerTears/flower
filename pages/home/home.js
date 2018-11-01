// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      {
        imgTitle: "国外进口系列|精选全球好货,轻奢时光",
        picUrl:'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        price:'¥139.00'
      },
      {
        picUrl: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        imgTitle: "山地玫瑰系列|精选全球好货北欧极简风",
        price: '¥99.00'
      }
    ],
    foundUrls: [
      {
        imgTitle: "国外进口系列|精选全球好货,轻奢时光",
        picUrl: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        price: '¥139.00'
      },
      {
        picUrl: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        imgTitle: "山地玫瑰系列|精选全球好货北欧极简风",
        price: '¥99.00'
      },
      {
        imgTitle: "国外进口系列|精选全球好货,轻奢时光",
        picUrl: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        price: '¥139.00'
      },
      {
        picUrl: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        imgTitle: "山地玫瑰系列|精选全球好货北欧极简风",
        price: '¥99.00'
      },
      {
        imgTitle: "国外进口系列|精选全球好货,轻奢时光",
        picUrl: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        price: '¥139.00'
      },
      {
        picUrl: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        imgTitle: "山地玫瑰系列|精选全球好货北欧极简风",
        price: '¥99.00'
      },
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500,
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  }
})
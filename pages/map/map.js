// pages/map/map.js
var app = getApp();
// 引用百度地图微信小程序JSAPI模块 
var bmap = require('../../libs/bmap-wx.js');
var wxMarkerData = []; 

Page({
  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    longitude: '',
    latitude: '',
    scale: 14,
    markers:[],
    bmapQuery: "酒店",
    IconLists: [
      { title: '酒店', icon: '../../images/hotel.png'},
      { title: '美食', icon: '../../images/food.png' },
      { title: '生活服务', icon: '../../images/service.png' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    let BMap = new bmap.BMapWX({
      ak: app.globalData.bmapAK
    });
    let fail = function (data) {
      console.log(data)
    };
    let success = function (data) {
      console.log(data)
      wxMarkerData = data.wxMarkerData;
      that.setData({
        markers: wxMarkerData
      });
      that.setData({
        latitude: wxMarkerData[0].latitude,
        longitude: wxMarkerData[0].longitude
      })
    };
    this.setData({
      BMap: BMap,
      success: success,
      fail: fail
    }) 
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
    this.data.BMap.search({
      "query": this.data.bmapQuery,
      fail: this.data.fail,
      success: this.data.success,
      // 此处需要在相应路径放置图片文件 
      iconPath: '../../images/marker_red.png',
      // 此处需要在相应路径放置图片文件 
      iconTapPath: '../../images/marker_red.png'
    })
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

  },
  /**
   * 目录转换
   */
  switchTap: function (e) {
    let index = e.currentTarget.dataset.index;
    let bmapQuery = e.currentTarget.dataset.title;
    this.setData({
      active: index,
      bmapQuery: bmapQuery
    });
    this.onShow();
  },
  makertap: function (e) {
    var that = this;
    var id = e.markerId;
    // that.showSearchInfo(wxMarkerData, id);
    // that.changeMarkerColor(wxMarkerData, id);
  }, 
  showSearchInfo: function (data, i) {
    var that = this;
    that.setData({
      placeData: {
        title: '名称：' + data[i].title + '\n',
        address: '地址：' + data[i].address + '\n',
        telephone: '电话：' + data[i].telephone
      }
    });
  },
  changeMarkerColor: function (data, i) {
    var that = this;
    var markers = [];
    for (var j = 0; j < data.length; j++) {
      if (j == i) {
        // 此处需要在相应路径放置图片文件 
        data[j].iconPath = "../../img/marker_red.png";
      } else {
        // 此处需要在相应路径放置图片文件 
        data[j].iconPath = "../../img/marker_red.png";
      }
      markers[j](data[j]);
    }
    that.setData({
      markers: markers
    });
  } 
})
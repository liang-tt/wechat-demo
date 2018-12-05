// pages/around/around.js
const app = getApp();
const city = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据 
   */
  data: {
    cityLetter: city.cityLetter,
    search: '',
    winHeight: '',
    cityList: city.cityList(),
    scrollTop: 0,
    toView: 'A',
    searchList: [{letter: 'A'}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let sysInfo = wx.getSystemInfoSync();
    this.setData({
      winHeight: sysInfo.windowHeight
    })
    console.log(this.data.cityList)
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

  },

  /**
   * 返回顶部
   */
  returnTop: function (e) {
    this.setData({
      scrollTop: 0
    })
  },

  /**
   * 右侧首字母绑定事件
   */
  bindAZ: function (e) {
    console.log(e)
    let currentView = e.currentTarget.dataset.view;
    this.setData({
      toView: currentView
    })
    console.log(this.data.toView)
  }
})
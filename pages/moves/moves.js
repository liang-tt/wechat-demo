
var app = getApp();
import { movesList, moreMoves } from "../../data/moves/moves-data.js"
// var movesList = require('../../data/moves/moves-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    moveTypes: [
      { key: 'inTheaters', name: "正在热映"},
      { key: 'comingSoon', name: "即将上映" },
      { key: 'top250', name: "豆瓣Top250" },
    ],
    moveList: [],
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      moveList: moreMoves.subjects
    })
    console.log(this.data.moveList)
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

  handleMovesData: function() {

  },

  getMovieListData: function (url, settedKey, categoryTitle) {
    var that = this;
    wx.request({
      url: url,
      method: 'GET',
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        // that.processDoubanData(res.data, settedKey, categoryTitle)
      },
      fail: function (error) {
        console.log(error)
      }
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
    this.setData({
      moveList: moreMoves.subjects
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let data = this.data.moveList.concat(movesList.subjects);
    this.setData({
      moveList: data
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
var app = getApp();
var util = require('../../utils/util.js');
import {HTTP} from "../../utils/https.js"
import { HomeModel } from "../../models/home.js"
var http = new HTTP()
const homeModel = new HomeModel()
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    circular: true,
    location: '',
    county: '',
    today: '',
    weatherData:''
  },
  onLoad: function() {
    let today = util.formatTime(new Date).split(' ')[0];
    this.setData({
      today: today
    });
    this.getLocation();
  },
  // 获取地址
  getLocation: function() {
    let that = this;
    wx.getLocation({
      type: 'wgs84',
      altitude: true,
      success: function (res) {
        let latitude = res.latitude;
        let longitude = res.longitude; 
        http.request({
          url: `https://apis.map.qq.com/ws/geocoder/v1/?location=${latitude},${longitude}&key=${app.globalData.tencentMapKey}`,
          success: res => {
            app.globalData.defaultCity = app.globalData.defaultCity ? app.globalData.defaultCity : res.data.result.ad_info.city;
            app.globalData.defaultCounty = app.globalData.defaultCounty ? app.globalData.defaultCounty : res.data.result.ad_info.district;
            that.setData({
              location: app.globalData.defaultCity,
              county: app.globalData.defaultCounty
            });
            that.getWeather();   //获取天气
          }
        })
        // wx.request({
        //   url: `https://apis.map.qq.com/ws/geocoder/v1/?location=${latitude},${longitude}&key=${app.globalData.tencentMapKey}`,
        //   // url: 'https://apis.map.qq.com/ws/geocoder/v1/?location='+latitude+','+longitude+'&key='+app.globalData.tencentMapKey,
        //   success: res=> {
        //     app.globalData.defaultCity = app.globalData.defaultCity ? app.globalData.defaultCity : res.data.result.ad_info.city;
        //     app.globalData.defaultCounty = app.globalData.defaultCounty ? app.globalData.defaultCounty : res.data.result.ad_info.district;
        //     that.setData({
        //       location: app.globalData.defaultCity,
        //       county: app.globalData.defaultCounty
        //     });
        //     that.getWeather();   //获取天气
        //   }
        // })
       },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  // 获取天气
  getWeather: function() {
    let that = this;
    let param = {
      key: app.globalData.heWeatherKey,
      location: this.data.location
    };
    
    homeModel.getWether(app.globalData.heWeatherBase + "/s6/weather",param).then(res => {
      let weatherData = res.data.HeWeather6[0].status === 'ok' ? res.data.HeWeather6[0] : '暂无数据';
      this.setData({
        weatherData: weatherData
      })
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
    });
    
  },
  // 更改定位
  changePotion: function(e) {
    wx.navigateTo({
      url: '../around/around',
    })
  },


  onPullDownRefresh: function() {
    wx.showNavigationBarLoading()
    this.getLocation();

  }

})
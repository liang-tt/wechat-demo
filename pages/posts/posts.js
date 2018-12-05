// pages/posts/posts.js

const backgroundAudioManager = wx.getBackgroundAudioManager();

Page({

  /**
   * 页面的初始数据
   */
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
    postList: [
      {
        id: 0,
        headImg: "/images/food.png",
        date: "2018/10/1",
        contentImg: "/images/2.jpg",
        content: '"菊黄蟹真肥，品尝秋之味菊黄蟹真肥，品尝秋之味菊黄蟹真肥，品尝秋之味菊黄蟹真肥，品尝秋之味菊黄蟹真肥，品尝秋之味"',
        imgSrc:"http://music.163.com/song/media/outer/url?id=557581284.mp3",
        musicTitle: "纸短情长"
      },
      {
        id: 1,
        headImg: "/images/food.png",
        date: "2018/10/1",
        contentImg: "/images/2.jpg",
        content: "菊黄蟹真肥，品尝秋之味菊黄蟹真肥，品尝秋之味菊黄蟹真肥，品尝秋之味菊黄蟹真肥，品尝秋之味菊黄蟹真肥，品尝秋之味",
        imgSrc: "http://113.207.48.18/amobile.music.tc.qq.com/C400001lRndi3JRKtz.m4a?guid=9386476014&vkey=0B86F8DD8D7BD25708AE1DB51747CD12D69B0583973A51A36EF9A31C7E72E1F91470971139C78067E3FBF571A24F17C672A59126D326B5A5&uin=0&fromtag=66",
        musicTitle: "中意他"
      },
    ],
    isPlaying: false,
    playingId: ""  //正在播放的文章id
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // const backgroundAudioManager = wx.getBackgroundAudioManager();
    let that = this;
    this.monitorSwitch()
  
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
   * 点击音乐图标事件
   */
  audioFunc: function (e) {
    // const backgroundAudioManager = wx.getBackgroundAudioManager();
    
    let post = e.currentTarget.dataset.post;
    
    let palying = this.data.playingId != post.id ? true : !this.data.isPlaying;
  
    console.log("this.data.playingId: " + this.data.playingId + ",post.id:" + post.id + ",playing:" + palying)
    console.log(backgroundAudioManager.paused)
    
    if (palying) {
      backgroundAudioManager.src = post.imgSrc;
      backgroundAudioManager.title = post.musicTitle;
    }else {
      backgroundAudioManager.pause();
    }
    this.setData({
      isPlaying: palying,
      playingId: post.id
    }) 
    
  },

  /**
   * 监听音乐播放器
   */
  monitorSwitch: function() {
    backgroundAudioManager.onPlay(()=> {
      this.judgeAudio();
    })
    backgroundAudioManager.onPause(()=> {
      this.judgeAudio();
    });
    backgroundAudioManager.onStop(() => {
      this.judgeAudio();
    });
    backgroundAudioManager.onEnded(() => {
      this.judgeAudio();
    })
  },

  /**
   * 根据音乐播放显示的图标
   */
  judgeAudio: function() {
    console.log(backgroundAudioManager.paused)
    if(backgroundAudioManager.paused) {
      this.setData({
        isPlaying: false
      });
      return
    }
    this.setData({
      isPlaying: true
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("hide")
    // const backgroundAudioManager = wx.getBackgroundAudioManager();
    // backgroundAudioManager.stop();
    // this.setData({
    //   isPlaying: false,
    //   playingId: ""
    // }) 
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload")
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
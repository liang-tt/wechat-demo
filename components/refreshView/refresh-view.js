// components/refreshView/refresh-view.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    scrollHeight: 0,
    startY: 0,
    tips: '下拉刷新',
    isRefreshing: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    end: function(e) {
      if (this.data.isRefreshing) {
        return
      }
      if (this.data.scrollHeight >= 50) {
        this.setData({

          scrollHeight: 50,

          tips: '正在刷新',

          isRefreshing: true

        })

        this.triggerEvent('onRefresh')

      } else {

        this.setData({

          scrollHeight: 0,

          tips: '下拉刷新'

        })

      }

    },

    move: function(e) {

      if (this.data.isRefreshing) {

        return

      }



      var that = this;

      var moveY = e.touches[0].pageY;

      var dY = moveY - that.data.startY;

      console.log(dY);

      if (dY >= 50 && dY <= 80) {

        this.setData({

          tips: '松开加载',

          scrollHeight: dY

        })

      } else if (dY > 80) {

        this.setData({

          tips: '松开加载',

          scrollHeight: 80

        })

      } else {

        this.setData({

          tips: '下拉刷新',

          scrollHeight: dY

        })

      }



    },



    start: function(e) {
      this.setData({
        startY: e.touches[0].pageY
      })

      console.log(this.data.startY)
    },



    stopRefresh: function() {

      this.setData({

        isRefreshing: false,

        scrollHeight: -50

      })

    },

  }
})
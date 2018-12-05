// components/moves/move/move.js
Component({

  relations: {
    "../moveList/move-list": {
      type: 'parent' // 关联的目标节点应为子节点
    }
  },

  /**
   * 组件的属性列表
   */
  properties: {
    move: {
      type: Object, 
      observer: function (newVal, oldVal, changedPath) {
        
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

    /**
     * 跳转到详情页
     */
    moveDetail: function (event) {
      let move = event.currentTarget.dataset.move;
     
      wx.navigateTo ({
        url: "move-detail/move-detail?move=" + move
      })
    }
  }
})

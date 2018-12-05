// components/moves/moveList/move-list.js
Component({

  relations: {
    "../move/move": {
      type: 'child' // 关联的目标节点应为子节点
    }
  },

  /**
   * 组件的属性列表
   */
  properties: {
    moves: {
      type: Array
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

  },

  attached: function() {
    console.log(this.data.moves)
  }
})

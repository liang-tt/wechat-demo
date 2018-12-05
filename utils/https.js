
class HTTP {
  request(params) {
    if (!params.method){
      params.method= "get";
    }
    wx.request({
      url: params.url,
      data: params.data,
      header: {
        "content-type": "application/json"
      },
      method: params.method,
      success: function (res) {
        params.success(res)
       },
      fail: function (res) { }
    })
  }
}
export {HTTP}
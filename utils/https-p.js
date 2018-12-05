
const tips = {
  1: "操作失败"
}

class HTTP {
  request({url,data={},method="get"}) {
    return new Promise((resolve,reject) => {
      this._request(url,resolve,reject,data,method)
    })
  }

  _request(url,resolve, reject, data={}, method="get") {
    wx.request({
      url: url,
      data: data,
      header: {
        "content-type": "application/json"
      },
      method: method,
      success: function (res) {
        resolve(res)
       },
      fail: function (res) { 
        reject();

      }
    })
  }

  _show_error(errCode) {

    wx.showToast({
      title: tips[1],
      icon: "none"
    })
  }
}
export {HTTP}
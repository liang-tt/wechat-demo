import {
  HTTP
} from "../utils/https-p.js"

class HomeModel extends HTTP {
  getWether(url,data) {
    return this.request({
      url: url,
      data: data
    })
  }
}

export {HomeModel}
const https = require('https')

class NinghaoDemo {
  fetchData (api, callback) {
    var requestUrl = `https://api.douban.com/v2/movie/${api}`

    https.get(requestUrl, (response) => {
      var responseData = ''
      response.setEncoding('utf8')

      response.on('data', (chunk) => {
        responseData += chunk
      })

      response.on('end', () => {
        callback(JSON.parse(responseData))
      })
    })
  }

  // watiTwoSecond (data, callback) {
  //   setTimeout(() => {
  //     callback(data)
  //   }, 2000)
  // }

  // subtotal (unitPrice, quantity) {
  //   return unitPrice * quantity
  // }
}

module.exports = NinghaoDemo

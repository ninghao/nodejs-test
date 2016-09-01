class NinghaoDemo {
  watiTwoSecond (data, callback) {
    setTimeout(() => {
      callback(data)
    }, 2000)
  }

  // subtotal (unitPrice, quantity) {
  //   return unitPrice * quantity
  // }
}

module.exports = NinghaoDemo

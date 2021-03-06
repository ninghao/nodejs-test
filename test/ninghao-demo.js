const sinon = require('sinon')
const chai = require('chai')
const expect = chai.expect
const NinghaoDemo = require('../lib/ninghao-demo')

var demo = new NinghaoDemo()

describe('NinghaoDemo', function () {
  it('测试使用 Sinon Stub', function () {
    var stub = sinon.stub(demo, 'logMessage')
    stub.withArgs('hello').returns('hello')
    demo.send('hello')
    expect(stub.returnValues[0]).to.equal('hello')
    stub.restore()
  })

  // it('测试使用 Sinon Spy', function () {
  //   sinon.spy(demo, 'logMessage')
  //   demo.send('hello')
  //   // console.log(demo.logMessage)
  //   expect(demo.logMessage.calledOnce).to.be.true
  //   expect(demo.logMessage.firstCall.args[0]).to.equal('hello')
  //   demo.logMessage.restore()
  // })

  // it('给汽车引擎加水是不能接受的事情', function () {
  //   expect(demo.engine.bind(demo, 'water')).to.throw('not accept')
  // })

  // it('给汽车引擎加水是不能接受的事情', function () {
  //   expect(function () {
  //     demo.engine('water')
  //   }).to.throw('not accept')
  // })

  // it('加载豆瓣 API 返回的内容里应该包含 subjects 属性', function (done) {
  //   demo.fetchData('top250', function (data) {
  //     expect(data).to.have.property('subjects')
  //     done()
  //   })
  // })

  // this.timeout(5000)
  //
  // it('一段时间以后返回数据', function (done) {
  //   demo.watiTwoSecond('hello', function (data) {
  //     expect(data).to.equal('hello')
  //     done()
  //   })
  // })

  // it('单价是 10 块钱的 3 件商品小计金额应该是 30 块', function () {
  //   var subtotal = demo.subtotal(10, 3)
  //   expect(subtotal).to.equal(30)
  // })
})

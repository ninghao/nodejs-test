const chai = require('chai')
const should = chai.should()

describe('NinghaoDemo', function () {
  it('使用 should 风格的断言测试', function () {
    var value = 'hello'
    value.should.exist.and.be.a('string').and.equal('hello').and.have.length(5)
    // value.should.be.a('string')
    // value.should.equal('hello')
    // value.should.not.equal('您好')
    // value.should.have.length(5)
  })
})

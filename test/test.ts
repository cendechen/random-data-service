import $ from '../src/index'
import * as chai from 'chai'
import * as mocha from 'mocha'

const { expect } = chai

describe('生成一个 0 到 20 的整数', function () {
  it("小于20", function () {
    expect($.int(20)).to.be.below(20)
  })
  it("大于0", function () {
    expect($.int(20)).to.be.above(0)
  })
})

describe('生成一个字符', function () {
  it('验证是一个a-Z的字符', function() {
    expect($.char()).to.match(/^[a-zA-Z]$/)
  })
})

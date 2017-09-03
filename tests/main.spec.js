import { expect } from 'chai'
import main from '../src/main.js'

describe('main', () => {
  it('should exist the `main`', () =>
    expect(main).to.exist)

  it('should not return null', () =>
    expect(main()).to.not.be.null)

  it('should not return false', () =>
    expect(main()).to.not.be.false)

  it('should not return true', () =>
    expect(main()).to.not.be.true)

  it('should not return undefined', () =>
    expect(main()).to.not.be.undefined)

  it('should have a string `Hello`', () =>
    expect(main()).to.have.string('Hello'))

  it('should return the `Hello NPM!`', () =>
    expect(main()).to.equal('Hello NPM!'))

  it('should return the `Hello World!`', () =>
    expect(main('World')).to.equal('Hello World!'))
})

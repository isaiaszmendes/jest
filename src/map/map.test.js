import { expect } from 'chai'
import mapT from './map'

describe('Bloco construindo teste para map', () => {

   it('mapT should be a function', () => {
      expect(mapT).to.be.a('function')
   })

   it('mapT([1,2], (item) => item) should return [1,2]', () => {
      expect(mapT([1,2], (item) => item)).to.be.deep.equal([1,2])
   })

   it('mapT([3,4], (item) => item) should return [3,4]', () => {
      expect(mapT([3,4], (item) => item)).to.be.deep.equal([3,4])
   })

   it('mapT([1,2], (item) => item + 1) should return [2,3]', () => {
      expect(mapT([1,2], (item) => item + 1)).to.be.deep.equal([2,3])
   })

   it('mapT([4,6], (item) => item + 1) should return [5,7]', () => {
      expect(mapT([4,6], (item) => item + 1)).to.be.deep.equal([5,7])
   })

   it('mapT([4,6], (item, index) => index ) should return [0,1]', () => {
      expect(mapT([4,6], (item, index) => index)).to.be.deep.equal([0,1])
   })

   it('mapT([10,10], (item, index, array) => array ) should return [[10,10],[10,10]]', () => {
      expect(mapT([10,10], (item, index, array) => array)).to.be.deep.equal([[10,10],[10,10]])
   })

   it('mapT([10,10,5], (item, index, array) => array ) should return [[10,10,5],[10,10,5],[10,10,5]]', () => {
      expect(mapT([10,10,5], (item, index, array) => array)).to.be.deep.equal([[10,10,5],[10,10,5],[10,10,5]])
   })

   // it(`mapT([],1) should throw an error with message "func is not a function"`, () => {
   //    expect(mapT([],1)).to.throw(/func is not a function/)
   // })

   it('mapT() should return []', () => {
      expect(mapT()).to.be.deep.equal([])
   })

   it('mapT([1,2]) should return [1,2]', () => {
      expect(mapT([1,2])).to.be.deep.equal([1,2])
   })

})
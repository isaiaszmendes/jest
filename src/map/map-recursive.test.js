import { expect } from 'chai'
import mapRecursive from './map-recursive'

describe('Bloco #mapRecursive Testes', () => {

   it('mapRecursive should be a function', () => {
      expect(mapRecursive).to.be.a('function')
   })

   it('mapRecursive([1,2], (item) => item) should return [1,2]', () => {
      expect(mapRecursive([1,2], (item) => item)).to.be.deep.equal([1,2])
   })

   it('mapRecursive([3,4], (item) => item) should return [3,4]', () => {
      expect(mapRecursive([3,4], (item) => item)).to.be.deep.equal([3,4])
   })

   it('mapRecursive([1,2], (item) => item + 1) should return [2,3]', () => {
      expect(mapRecursive([1,2], (item) => item + 1)).to.be.deep.equal([2,3])
   })

   it('mapRecursive([4,6], (item) => item + 1) should return [5,7]', () => {
      expect(mapRecursive([4,6], (item) => item + 1)).to.be.deep.equal([5,7])
   })

   it('mapRecursive([4,6], (item, index) => index ) should return [0,1]', () => {
      expect(mapRecursive([4,6], (item, index) => index)).to.be.deep.equal([0,1])
   })

   it('mapRecursive([10,10], (item, index, array) => array ) should return [[10,10],[10,10]]', () => {
      expect(mapRecursive([10,10], (item, index, array) => array)).to.be.deep.equal([[10,10],[10,10]])
   })

   it('mapRecursive([10,10,5], (item, index, array) => array ) should return [[10,10,5],[10,10,5],[10,10,5]]', () => {
      expect(mapRecursive([10,10,5], (item, index, array) => array)).to.be.deep.equal([[10,10,5],[10,10,5],[10,10,5]])
   })


   it('mapRecursive() should return []', () => {
      expect(mapRecursive()).to.be.deep.equal([])
   })

   it('mapRecursive([1,2]) should return [1,2]', () => {
      expect(mapRecursive([1,2])).to.be.deep.equal([1,2])
   })
})
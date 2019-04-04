import { expect } from 'chai'
import filterRecursivo from './filter-recursivo'

describe('Bloco #Filter Recursivo', () => {

   it('filterRecursivo should be a function', () => {
      expect(filterRecursivo).to.be.a('function')
   })

   it('filterRecursivo([1,2,3], (item) => item) should return [1,2,3]', () => {
      expect(filterRecursivo([1,2,3], (item) => item)).to.be.deep.equal([1,2,3])
   })

   it('filterRecursivo([0,1,2], (item) => item) should return [1,2]', () => {
      expect(filterRecursivo([0,1,2], (item) => item)).to.be.deep.equal([1,2])
   })

   it('filterRecursivo([1,2,3], (item) => item < 2) should return [1]', () => {
      expect(filterRecursivo([1,2,3], (item) => item < 2)).to.be.deep.equal([1])
   })

   it('filterRecursivo([1,2,3,5], (item, index) => item === index +1 ) should return [1,2,3]', () => {
      expect(filterRecursivo([1,2,3,5], (item, index) => item  === index +1)).to.be.deep.equal([1,2,3])
   })

   it('filterRecursivo([1,2,2,1,5,5,8,3], (item, index, array) => array) should return [1,2,5,8,3]', () => {
      const before = filterRecursivo([1,2,2,1,5,5,8,3], (item, index, array) => index === array.indexOf(item))
      expect(before).to.be.deep.equal([1,2,5,8,3])
   })
})
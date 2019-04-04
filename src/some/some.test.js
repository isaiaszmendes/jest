import { expect } from 'chai'
import some from './some'

describe('Bloco #Some', () => {

   it('some should be a function', () => {
      expect(some).to.be.a('function')
   })

   it('some([], (item) => item) should return false', () => {
      expect(some([], (item) => item)).to.be.not.ok
   })

   it('some([1,2,3], (item) => item) should return true', () => {
      expect(some([1,2,3], (item) => item )).to.be.ok
   })

   it('some([1,2,3], (item, index) => index % 2 === 0) should return true', () => {
      expect(some([1,2,3], (item, index) => index % 2 === 0)).to.be.ok
   })

   it('some([1,3,5,9], (item) => item % 2 === 0) should return true', () => {
      expect(some([1,3,5,9], (item) => item % 2 === 0)).to.not.be.ok
   })

   it('some([1,2,3], (item) => item) should return true', () => {
      expect(some([1,2,3], (item) => item > 2)).to.be.ok
   })

   it('some([1,2,3], (item) => item) should return true', () => {
      expect(some([1,2,3], (item) => item >= 3)).to.be.ok
   })

   it('some([1,2,3], (item) => item) should return false', () => {
      expect(some([1,2,3], (item) => item > 3)).to.not.be.ok
   })

   it('some([1,3,5], (item, index) => index === item - 1) should return true', () => {
      expect(some([1,3,5], (item, index) => index === item - 1)).to.be.ok
   })

   it('some([1,3,5], (item, index, array) => array.length === 3) should return true', () => {
      const before = some([1,3,5], (item, index, array) => array.length === 3)
      expect(before).to.be.ok
   })

   it('some([1,3,5], (item, index, array) => array.indexOf(5) === 2) should return true', () => {
      const before = some([1,3,5], (item, index, array) => array.indexOf(5) === 2)
      expect(before).to.be.ok
   })
})
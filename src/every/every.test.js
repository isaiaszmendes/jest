import { expect } from 'chai'
import every from './every'

describe('Bloco #Every', () => {

   it('every should be a function', () => {
      expect(every).to.be.a('function')
   })

   it('every([], (item) => item) should return true', () => {
      expect(every([], (item) => item)).to.be.ok
   })

   it('every([0,2,3], (item) => item) should return false', () => {
      expect(every([0,2,3], (item) => item)).to.be.not.ok
   })

   it('every([1,2,3], (item) => item) should return true', () => {
      expect(every([1,2,3], (item) => item)).to.be.ok
   })

   it('every([5,8,9], (item) => item) should return false', () => {
      expect(every([5,8,9], (item) => item > 5)).to.be.not.ok
   })

   it('every([1,2,3,4], (item) => item) should return true', () => {
      expect(every([1,2,3,4], (item) => item > 0)).to.be.ok
   })

   it('every([1,2,3,4], (item, index) => index === item - 1) should return true', () => {
      expect(every([1,2,3,4], (item, index) => index  === item - 1)).to.be.ok
   })

   it('every([1,2,3,4], (item, i, array) => array.length === 4) should return true', () => {
      const before = every([1,2,3,4], (item, i, array) => array.length === 4)
      expect(before).to.be.ok
   })

   it('every([1,2,3,4], (item, i, array) => array.length !== 4) should return false', () => {
      const before = every([1,2,3,4], (item, i, array) => array.length !== 4)
      expect(before).to.be.not.ok
   })
})
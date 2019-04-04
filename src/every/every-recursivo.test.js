import { expect } from 'chai'
import everyRecursivo from './every-recursivo'

describe('Bloco #Every Recursivo', () => {

   it('everyRecursivo should be a function', () => {
      expect(everyRecursivo).to.be.a('function')
   })

   it('everyRecursivo([], (item) => item) should return true', () => {
      expect(everyRecursivo([], (item) => item)).to.be.ok
   })

   it('everyRecursivo([0,2,3], (item) => item) should return false', () => {
      expect(everyRecursivo([0,2,3], (item) => item)).to.be.not.ok
   })

   it('everyRecursivo([1,2,3], (item) => item) should return true', () => {
      expect(everyRecursivo([1,2,3], (item) => item)).to.be.ok
   })

   it('everyRecursivo([5,8,9], (item) => item) should return false', () => {
      expect(everyRecursivo([5,8,9], (item) => item > 5)).to.be.not.ok
   })

   it('everyRecursivo([1,2,3,4], (item) => item) should return true', () => {
      expect(everyRecursivo([1,2,3,4], (item) => item > 0)).to.be.ok
   })

   it('everyRecursivo([1,2,3,4], (item, index) => index === item - 1) should return true', () => {
      expect(everyRecursivo([1,2,3,4], (item, index) => index  === item - 1)).to.be.ok
   })

   it('everyRecursivo([1,2,3,4], (item, i, array) => array.length === 4) should return true', () => {
      const before = everyRecursivo([1,2,3,4], (item, i, array) => array.length === 4)
      expect(before).to.be.ok
   })

   it('everyRecursivo([1,2,3,4], (item, i, array) => array.length !== 4) should return false', () => {
      const before = everyRecursivo([1,2,3,4], (item, i, array) => array.length !== 4)
      expect(before).to.be.not.ok
   })
})
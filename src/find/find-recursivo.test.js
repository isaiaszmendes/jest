import { expect } from 'chai'
import find from './find-recursivo'

describe('Bloco #Find Recursivo testes', () => {

   it('find should be a function', () => {
      const before = find
      const after = 'function'
      expect(before).to.be.a(after)
   })

   it('find([], item => item) should return undefined', () => {
      const before = find([], item => item)
      const after = undefined
      expect(before).to.be.deep.equal(after)
   })

   it('find([1], item => item === 1) should return 1', () => {
      const before = find([1], item => item === 1)
      const after = 1
      expect(before).to.be.deep.equal(after)
   })

   it('find([1,2,5], item => item === 5) should return 5', () => {
      const before = find([1,2,5], item => item === 5)
      const after = 5
      expect(before).to.be.deep.equal(after)
   })

   it('find([1,2,5], (item, index) => index === 1) should return 2', () => {
      const before = find([1,2,5], (item, index) => index === 1)
      const after = 2
      expect(before).to.be.deep.equal(after)
   })

   it('find([8,5,4,7,2], (item, index, array) => array[3] === item) should return 7', () => {
      const before = find([8,5,4,7,2], (item, index, array) => array[3] === item)
      const after = 7
      expect(before).to.be.deep.equal(after)
   })

})
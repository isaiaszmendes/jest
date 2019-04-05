import { expect } from 'chai'
import reverseRecursivo from './reverse-recursivo'

describe('Bloco #Reverse REcursivo', () => {

   it('reverseRecursivo should be a function', () => {
      expect(reverseRecursivo).to.be.a('function')
   })

   it('reverseRecursivo([]) should return []', () => {
      expect(reverseRecursivo([])).to.be.deep.equal([])
   })

   it('reverseRecursivo([1]) should return [1]', () => {
      expect(reverseRecursivo([1])).to.be.deep.equal([1])
   })

   it('reverseRecursivo([1,2]) should return [2,1]', () => {
      expect(reverseRecursivo([1,2])).to.be.deep.equal([2,1])
   })

   it('reverseRecursivo([1,2,5]) should return [5,2,1]', () => {
      expect(reverseRecursivo([1,2,5])).to.be.deep.equal([5,2,1])
   })
   
})
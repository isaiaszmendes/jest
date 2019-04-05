import { expect } from 'chai'
import reduce from './reduce'
import reduceRight from './reduce-right'

describe('Bloco #Reduce', () => {

   it('reduce should be a function', () => {
      expect(reduce).to.be.a('function')
   })

   it('reduce([1,2,3], (acc, item) => acc + item, 0) should return 6', () => {
      const before = reduce([1,2,3], (acc, item) => acc + item, 0)
      const after = 6
      expect(before).to.be.deep.equal(after)
   })

   it('reduce([2,3,4], (acc, item) => acc + item, 0) should return 9', () => {
      const before = reduce([2,3,4], (acc, item) => acc + item, 1)
      const after = 10
      expect(before).to.be.deep.equal(after)
   })

   it('reduce([2,3,4], (acc, item) => acc + item) should return 9', () => {
      const before = reduce([2,3,4], (acc, item) => acc + item)
      const after = 9
      expect(before).to.be.deep.equal(after)
   })

   it('reduce([2,3,4], (acc, item, index) => acc + index) should return 2', () => {
      const before = reduce([2,3,4], (acc, item, index) => acc + index)
      const after = 3
      expect(before).to.be.deep.equal(after)
   })

   it('reduce([2,3,4], (acc, item, index) => acc + index, 5) should return 8', () => {
      const before = reduce([2,3,4], (acc, item, index) => acc + index, 5)
      const after = 8
      expect(before).to.be.deep.equal(after)
   })

   it('reduce([2,3], (acc, item, index) => acc + index,0) should return 1', () => {
      const before = reduce([2,3], (acc, item, index) => acc + index, 0)
      const after = 1
      expect(before).to.be.deep.equal(after)
   })

   it('reduce([2,3], (acc, item) => { acc[`number-${item}`] = item; return acc}, {}) should return {"number-2": 2, "number-3": 3}', () => {
      const before = reduce([2,3], (acc, item) => { 
         acc[`number-${item}`] = item; 
         return acc 
      }, {})
      const after = {"number-2": 2, "number-3": 3}
      expect(before).to.be.deep.equal(after)
   })

   it('reduce([6,7,7],(acc, item, index, array) => acc + array[index], 0) should return 20', () => {
      const before = reduce([6,7,7], (acc, item, index, array) => acc + array[index], 0 )
      const after = 20
      expect(before).to.be.deep.equal(after)
   })

   it('reduceRight(["as", "ai", "is"], (acc, item) => acc + item, "" should return isaias)', () => {
      const before = reduceRight(["as", "ai", "is"], (acc, item) => acc + item, '' )
      const after = "isaias"
      expect(before).to.be.deep.equal(after)
   })
})

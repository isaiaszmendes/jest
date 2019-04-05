import { expect } from 'chai'
import map from './map'

describe('Bloco construindo teste para map', () => {

   it('map should be a function', () => {
      expect(map).to.be.a('function')
   })

   it('map([1,2], (item) => item) should return [1,2]', () => {
      expect(map([1,2], (item) => item)).to.be.deep.equal([1,2])
   })

   it('map([3,4], (item) => item) should return [3,4]', () => {
      expect(map([3,4], (item) => item)).to.be.deep.equal([3,4])
   })

   it('map([1,2], (item) => item + 1) should return [2,3]', () => {
      expect(map([1,2], (item) => item + 1)).to.be.deep.equal([2,3])
   })

   it('map([4,6], (item) => item + 1) should return [5,7]', () => {
      expect(map([4,6], (item) => item + 1)).to.be.deep.equal([5,7])
   })

   it('map([4,6], (item, index) => index ) should return [0,1]', () => {
      expect(map([4,6], (item, index) => index)).to.be.deep.equal([0,1])
   })

   it('map([10,10], (item, index, array) => array ) should return [[10,10],[10,10]]', () => {
      expect(map([10,10], (item, index, array) => array)).to.be.deep.equal([[10,10],[10,10]])
   })

   it('map([10,10,5], (item, index, array) => array ) should return [[10,10,5],[10,10,5],[10,10,5]]', () => {
      expect(map([10,10,5], (item, index, array) => array)).to.be.deep.equal([[10,10,5],[10,10,5],[10,10,5]])
   })

   it('map([1,2]) should return [1,2]', () => {
      expect(map([1,2])).to.be.deep.equal([1,2])
   })
   
   it('map() should return []', () => {
      expect(map()).to.be.deep.equal([])
   })

   describe('_______________________ Fora do caminho Feliz _______________________', () => {

      it('map(1) should throw a TypeError', () => {
         let error 
         const after = 'TypeError'
         try{
            map(1)
         } catch(err) {
            error = err.name
         }
         expect(error).to.be.equal(after)
      })
   
      it('map(1) should throw a TypeError with message "The first parameter must be an array"', () => {
         let error 
         const after = 'The first parameter must be an array'
         try{
            map(1)
         } catch(err) {
            error = err.message
         }
         expect(error).to.be.equal(after)
      })
   
      it('map([], "") should throw a TypeError', () => {
         let error
         const after = 'TypeError'
         try{
            map([], "")
         } catch(e){
            error = e.name
         }
          expect(error).to.be.equal(after)
      })   
   
      it('map([], "") should throw a TypeError with message "The secound parameter must be a function"', () => {
         let error 
         const after = 'The secound parameter must be a function'
         try{
            map([], "") 
         } catch(e){
            error = e.message
         }
         expect(error).to.be.equal(after)
      })
   })

})
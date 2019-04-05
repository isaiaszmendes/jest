const isInitialValueUndefined = (initialValue) => initialValue === undefined
const reduceRecursivo = (arr,func, initialValue) => {
   const acc = isInitialValueUndefined(initialValue) ? arr[0] : initialValue
   const arrCopy = isInitialValueUndefined(initialValue) ?  arr.slice(1) : arr
   
   return (function reduceInternal(accInternal, arrayInternal, counter){
      
      const [head, ...tail] = arrayInternal
      const accNext = () => func(accInternal, head, counter, arrCopy)

         return arrayInternal.length === 0
            ? accInternal
            : reduceInternal(accNext(), tail, counter + 1)
   })(acc, arrCopy, 0)
}

export default reduceRecursivo
const reverseRecursivo = (arr) => {
   return arr.length === 0
      ? [] 
      : [
         arr.slice(-1)[0],
         ...reverseRecursivo(arr.slice(0,-1))
      ]
}

export default reverseRecursivo
  
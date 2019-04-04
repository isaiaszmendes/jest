const mapRecursive = (arr = [], func = (item) => item) => {

   return (function mapInternal(arrayInternal, count){
      
      const [cabeca, ...corpo] = arrayInternal

      return arrayInternal.length === 0 ? [] : [
         func(cabeca, count, arr),
         ...mapInternal(corpo, count + 1)
      ]

   })(arr, 0)

}

export default mapRecursive
  
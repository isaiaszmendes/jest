const sum = arr => {
   if(arr.length === 0){
      return 0
   }

   const [cabeca, ...corpo] = arr
   return cabeca + sum(corpo)
}



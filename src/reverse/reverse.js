const reverse = (arr) => {
   let newArray = []

   for(let i = arr.length; i-- ;){   
      newArray.push(arr[i]) 
   }
   return newArray
}

export default reverse

// for(let i = arr.length-1; i >= 0; i--){
//    newArray.push(arr[i])
// }
// ou
// ;(aqui precisa ser true para continuar);     
// quando chegar a zero ele sai
// for(let i = arr.length; i-- ;)


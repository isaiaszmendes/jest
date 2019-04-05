import mainReduceRecursivo from './main-reduce-recursivo'
import reverseRecursivo from '../reverse/reverse-recursivo'

const reduceRightRecursivo = (arr, ...params) => mainReduceRecursivo(reverseRecursivo(arr), ...params)

export default reduceRightRecursivo
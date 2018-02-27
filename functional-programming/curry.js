const arr = [1,2,3,4,5]
const multiply = x => y => x * y
const triple = multiply(3)
const map = fn => array => array.map(fn)

console.log(map(triple)(arr))
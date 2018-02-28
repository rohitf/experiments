const arr = [1,2,3,4,5]

const multiply = x => y => x * y
const triple = multiply(3)
const map = fn => array => array.map(fn)

console.log(map(triple)(arr))

const add = x => y => x + y

var add5 = add(5)
console.log(add5(10))
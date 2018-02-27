const add = (x,y) => x + y

const partialFromBind = (fn, ...args) => {
    return fn.bind(null, ...args)
}

const add3 = partialFromBind(add, 3)
sum = add3(4)
console.log(sum);
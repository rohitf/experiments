const person = {
    name: "Jim",
    age: 32,
    rank: "Captain"
}

const personArray = Object.keys(person).map(key => {
    return {field: key, value: person[key]}
})

console.log(personArray)

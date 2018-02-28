const person = {
  name: "Jim",
  age: 32,
  rank: "Captain"
};

const labelEntries = key => {
  return { field: key, value: person[key] };
};

const labelKeys = key => {
  return { field: key };
};

const objMap = fn => obj => Object.keys(obj).map(fn);
const objArray = objMap(labelKeys);

console.log(objArray(person));

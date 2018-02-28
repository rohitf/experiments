var arr = [1, 2, 3, 4, 5];
var multiply = function(x) {
  return function(y) {
    return x * y;
  };
};
var triple = multiply(3);
var map = function(fn) {
  return function(array) {
    return array.map(fn);
  };
};
console.log(map(triple)(arr));
var add = function(x) {
  return function(y) {
    return x + y;
  };
};
var add5 = add(5);
console.log(add5(10));

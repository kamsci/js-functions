var array = [1, 2, 56, 4, 9];

function sillySum(a) {
  var count = 0;
  for(var i = 0; i < a.length; i++) {
    count += (a[i] * [i]);
  }
  return count;
}

var something = sillySum(array);

console.log(something);

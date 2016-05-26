function isPrime(number) {
  if (number === 1) {
      return false;
  } else if (number === 2) {
      return true;
  } else {
    for (i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
      return true;
    }
  }
}

var a = isPrime(45);
var b = isPrime(40);
var c = isPrime(47);
var d = isPrime(2);
var e = isPrime(3);

console.log(a, b, c, d, e);

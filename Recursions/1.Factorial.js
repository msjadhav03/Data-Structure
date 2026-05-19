function findFactorial(n) {
  if (n == 0) {
    return 1;
  }
  return n * findFactorial(n - 1);
}

const factorial = findFactorial(5);
console.log(factorial);

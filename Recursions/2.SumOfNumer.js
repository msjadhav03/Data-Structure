function findSumOfNNumbers(n) {
  if (n == 0) {
    return 0;
  }
  return n + findSumOfNNumbers(n - 1);
}

const sum = findSumOfNNumbers(10);

console.log(`Sum of Number 1 to ${10}: `, sum);

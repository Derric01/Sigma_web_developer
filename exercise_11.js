function factorialRecursive(n) {
    if (n === 0 || n === 1) return 1; // Base case
    return n * factorialRecursive(n - 1);
}

console.log(factorialRecursive(5)); // Output: 120

// fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
// find the nth fibonacci number in the sequence

// memoization + dynamic programming
// caching previously computed values

// time complexity: O(2^n) - exponential

// time complexity: O(n) - linear
// space complexity: O(n) - linear
function fibonacci(n, values = []) {
    // look into the array to see if we
    // previously computed the nth in the sequence
    if (values[n] != null) {
        return values[n]; // return the previously computed fib number
    }

    // base case
    if (n < 1) return 0;

    // variable to store the fib number
    let result = 0;
    if (n <= 2) {
        result = 1;
    } else {
        result = fibonacci(n - 1, values) + fibonacci(n - 2, values);
    }

    // store the previously computed results
    values[n] = result;
    return result;
}

console.log(fibonacci(50));
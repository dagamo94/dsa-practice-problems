function factorial(number, total = 1) {
    console.log("Forward phase", number, "*", total);

    // Base case stays the same
    if (number <= 1) {
        console.log("base case", number);
        return total;
    }

    total = factorial(number - 1, total * number);

    console.log("Backward phase", number, total);
    return total;
}

console.log(factorial(5));
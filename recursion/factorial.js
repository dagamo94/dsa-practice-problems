function factorial(number) {
    console.log("Forward phase", number);

    // Base case
    if (number <= 1) {
        console.log("base case", number);
        return 1;
    }

    // Recursive case
    const numberMinusOneFactorial = factorial(number - 1);
    console.log("backward phase", number, "*", numberMinusOneFactorial);

    return number * numberMinusOneFactorial;
}

console.log(factorial(4));
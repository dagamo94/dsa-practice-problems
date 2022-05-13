function factorial(number) {
    // Base case
    if (number <= 1) {
        return 1;
    }

    let penultimate = 1;
    let total = 0;

    // Calculate the factorial from 1 to `number`
    for (let ultimate = 1; ultimate <= number; ultimate++) {
        console.log(ultimate, "*", penultimate);
        total = ultimate * penultimate;
        penultimate = total;
    }
    return total;
}
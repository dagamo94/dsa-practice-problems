function collatz(n, count = 0) {
    if (n == 1) {
        return 0;
    }

    console.log("count", count++);

    if (n % 2 === 0) return 1 + collatz(n / 2, count);

    return 1 + collatz((3 * n) + 1, count);
}

console.log(collatz(13));
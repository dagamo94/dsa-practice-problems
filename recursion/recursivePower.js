function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }

    if (exponent < 0) {
        throw "exponent should be >= 0";
    }

    return base * power(base, exponent - 1);

}
// function toBinary(x) {
//     if (x > 0) {
//         return toBinary(parseInt(x / 2)) + (x % 2);
//     }
//     //if(x <= 0) return "0";

//     return "0";
// }


function toBinary(x) {
    if (x === 0 || x === 1) return x.toString();

    const lsb = (x % 2).toString();
    const restAsDecimal = Math.floor(x/2);
    const restAsBinary = toBinary(restAsDecimal);

    return restAsBinary + lsb;
}

console.log(toBinary(0)); // ""
console.log(toBinary(1)); // 1
console.log(toBinary(10)); // 1010
console.log(toBinary(247)); // 11110111




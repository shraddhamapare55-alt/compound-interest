let P = 40000;
let r = 0.08; // 8%
let n = 1;
let t = 3;
let A = P * (1 + r / n) ** (n * t);
console.log("The total amount after " + t + " years is: " + A.toFixed(2));

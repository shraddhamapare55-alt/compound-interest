const P = 100000;      
const r = 0.05;        
const n = 1;           
const t = 3;           
const A = P * Math.pow((1 + (r / n)), (n * t));
console.log("The compound interest after " + t + " years is: " + Math.round(A-P));
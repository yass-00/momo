let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

var n1 = parseInt(input());
var n2 = parseInt(input());
var divisao = n1/n2;
console.log(n1+n2);
console.log(n1-n2);
console.log(n1*n2);
console.log(divisao.toFixed(2));
console.log(n1%n2);
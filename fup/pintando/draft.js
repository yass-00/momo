let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

var a = parseFloat(input());
var b = parseFloat(input());
var c = parseFloat(input());
var p = parseFloat((a+b+c)/2);

var heron = Math.sqrt(p*(p-a)*(p-b)*(p-c));
console.log(heron.toFixed(2));
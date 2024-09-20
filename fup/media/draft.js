let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

var num1 = parseFloat(input());
var num2 = parseFloat(input());
var media = (num1 + num2)/2;
console.log(media.toFixed(1));
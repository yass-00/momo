let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

var n = parseInt(input());
if(n == 3 || n == 5){
    console.log("SIM");
} else{
    console.log("NAO");
}
let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

write("qxcode");

let nome = input();
let idade = +input();

if (idade < 12){
    console.log criança
}
if (idade < 18)
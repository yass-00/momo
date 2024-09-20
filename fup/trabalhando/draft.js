let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

const dia = parseInt(input());
const hora = parseInt(input());

if ((dia >= 2 && dia <= 6 && ((hora >= 8 && hora <= 11) || (hora >= 14 && hora <= 17))) || (dia === 7 && hora >= 8 && hora <= 11)) {
    console.log("SIM");
} else {
    console.log("NAO");
}

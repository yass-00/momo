let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

var tempo = parseInt(input());
var horas = parseInt(tempo/3600);
var minutos = parseInt((tempo%3600)/60);
var segundos = ((tempo%3600)%60);
console.log(horas+":"+minutos+":"+segundos);
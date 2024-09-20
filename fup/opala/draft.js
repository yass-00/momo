let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

var km = parseInt(input());
var minutos = parseInt(input());
var gasolina = parseFloat(input());

var horas = minutos/60;
var velocidade = km*horas;
var desempenho = velocidade/gasolina;
console.log(desempenho.toFixed(2));
let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

function calcularDistancia(x1, y1, x2, y2) {
  const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  console.log(distancia.toFixed(2));
}

calcularDistancia(parseFloat(input()),parseFloat(input()),parseFloat(input()),parseFloat(input()));
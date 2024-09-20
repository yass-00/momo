let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

function calcular(numero1, numero2, operador) {
  let resultado;
  switch (operador) {
      case '+':
          resultado = numero1 + numero2;
          break;
      case '-':
          resultado = numero1 - numero2;
          break;
      case '*':
          resultado = numero1 * numero2;
          break;
      case '/':
          resultado = Math.floor(numero1 / numero2);
          break;
      default:
          console.log("Ajeita o codigo sena");
          return;
  }
  console.log(resultado);
}
calcular(parseFloat(input()),parseFloat(input()),input());

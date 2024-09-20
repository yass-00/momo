let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

function calcularParcelas(valor, parcelas) {
  let juros = 0;
  switch (parcelas) {
      case 1:
          juros = 0;
          break;
      case 2:
          juros = 0.05;
          break;
      case 3:
          juros = 0.10;
          break;
      case 4:
          juros = 0.15;
          break;
      case 5:
          juros = 0.20;
          break;
      case 6:
          juros = 0.25;
          break;
      case 7:
          juros = 0.30;
          break;
      case 8:
          juros = 0.35;
          break;
      case 9:
          juros = 0.40;
          break;
      case 10:
          juros = 0.45;
          break;
  }


  let valorTotal = valor * (1 + juros);
  let valorParcela = valorTotal / parcelas;

  console.log(valorParcela.toFixed(2));
  console.log(valorTotal.toFixed(2));
}

calcularParcelas(parseFloat(input()),parseInt(input()));

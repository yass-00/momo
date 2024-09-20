let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

function formatarDataHora(hora, minuto, dia, mes, ano) {
  let horaFormatada = hora.toString().padStart(2, '0');
  let minutoFormatado = minuto.toString().padStart(2, '0');
  let diaFormatado = dia.toString().padStart(2, '0');
  let mesFormatado = mes.toString().padStart(2, '0');
  let anoFormatado = ano.toString().slice(-2);

  return `${horaFormatada}:${minutoFormatado} ${diaFormatado}/${mesFormatado}/${anoFormatado}`;
}

let hora = +input();
let minuto = +input();
let dia = +input();
let mes = +input();
let ano = +input();

let resultado = formatarDataHora(hora, minuto, dia, mes, ano);

console.log(resultado);
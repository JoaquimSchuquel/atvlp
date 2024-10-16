import { somar } from "./somar.mjs";
import { multiplicar } from "./multiplicar.mjs"
import { subtraçâo } from "./subtração.mjs";
import { divisão } from "./divisão.mjs";
import { potencia } from "./potencia.mjs";
const numero1 = 5
const numero2 = 3
const resultadoSoma = somar(numero1,numero2 )
const resultadoMultiplicar = multiplicar(numero1, numero2)
const resultadoSubtração = subtraçâo(numero1, numero2)
const resultadoDivisão = divisão(numero1, numero2)
const resultadoPotencia = potencia(numero1, numero2)
console.log(`${numero1} + ${numero2} = ${resultadoSoma}`);
console.log(`${numero1} * ${numero2} = ${resultadoMultiplicar}`);
console.log(`${numero1} - ${numero2} = ${resultadoSubtração}`);
console.log(`${numero1} / ${numero2} = ${resultadoDivisão}`);
console.log(`${numero1} ** ${numero2} = ${resultadoPotencia}`);

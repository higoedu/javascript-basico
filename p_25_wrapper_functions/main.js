/*
um primitivo (valor primitivo, tipo de dados primitivos) é um dado que não é representado
através de um Objeto e, por consequência, não possui métodos

6 tipos de primitivos:
- String
- Number
- Boolean
- Null
- undefined
- Symbol
*/

/*
o termo wrapper em português significa que envolve

com excessão do null e do undefined, todos os primitivos tem um objeto wrapper equivalente:
- String para o primitivo String
- Number para o primitivo
- Boolean para o primitivo Boolean
- Symbol para o primitivo Symbol

o método valueOf() do objeto wrapper retorna o valor primitivo
*/

//criar um String
const str1 = String("Brasil dev1");
const str2 = new String("Brasil dev2");

console.log(`str1 ${str1}
str2 ${str2}`);

console.log(`str1 dividida = ${str1.split('')}
str2 dividida = ${str2.split('')}`);

const str2Convertido = str2.valueOf();
console.log(typeof str2Convertido);

//criar um número
const num1 = Number('1');
const num2 = new Number('2');

console.log(`num1 ${num1}
num2 ${num2}`);

console.log(`num1 com 2 casas decimais ${num1.toFixed(2)}
num2 com 3 casas decimais ${num2.toFixed(3)}`);

//criar um booleano
const bool1 = Boolean(0);
const bool2 = new Boolean('');

console.log(`bool1 ${bool1}
bool2 ${bool2}`);

console.log(`bool1.toString() = ${bool1.toFixed()}
bool2.toString() = ${bool2.toFixed()}`);

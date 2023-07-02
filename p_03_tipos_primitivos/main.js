//quase tudo em javascript é um objeto
//uma execeção são os tipos primitivos

//tipos primitivos
//são 5: number, string, boolean, undefined, null

/*
undefined e null representam a ausência de valor
*/

let numero = 10;
let nome = 'Renata';
let opcao = true;
let indefinido = undefined;
let valor = null;

//parâmetro - são variáveis que passa para uma função
console.log('Número: ', numero);

//mostra o tipo - typeof

console.log('Tipo do número: ', typeof numero);
console.log('Tipo do nome: ', typeof nome);
console.log('Tipo do opcao: ', typeof opcao);
console.log('Tipo do valor: ', typeof valor);//imprime Object - erro de implementação da linguagem
console.log('Tipo do indefinido: ', typeof indefinido);

/*
concatenar - juntar uma string com outra
*/

//console - objeto global
//log - função

/*
console esta dentro de global
global.console
um objeto dentro do outro
*/

/*
Todos os tipos primitivos são imutáveis (não podem ter o seu valor modificado)
pega o valor, faz uma cópia dele, transformar ele em outro valor,
mais o valor original nunca vai deixar de ser alterado
*/
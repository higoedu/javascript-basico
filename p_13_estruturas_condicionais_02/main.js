//conectivos && e || (E e OU)

//na lógica argumentativa, existem os conceitos de proposições (premissas) verdadeiras e falsas

//premissas:
//p1: eu gosto de javascript
//p2: eu gosto de tecnologia

//quando quero juntar elas em uma única sentença, posso usar o conectivo "E" ou "OU"

//Eu gosto de javascritp 'e' gosto de tecnologia

//Eu gosto de javascript 'ou' gosto de tecnologia

//no primeiro exemplo, a expressão todo só será verdadeiro, se ambas as proposições (p1 e p2) sozinhas forem verdadeiras
//caso contrário toda a expressão é falsa

//no segundo exemplo, a expressão todo será verdadeiro, se ao menos uma das premissas (p1 e p2) for verdadeira
//caso contrário toda a expressão é falsa

//em linguagem de programação em geral, temos que o conectivo 'E' é representado pelo 'E' comercial (&)
//no caso do javascript, é usado 'E' comercial duas vezes (&&)

//exemplo prático usando conectivo && (E)
const numero1 = 10, numerro2 = 20;

if((numero1 === 10) && (numerro2 === 20))
    console.log('expressão if foi suprida com valor verdadeiro');
else
    console.log('expressão if foi suprida com valor falso');

//exemplo prático usando conectivo || (OU)
const string1 = 'java', string2 = 'script';

if((string1 === 'java') && (string2 === 'script'))
    console.log('expressão if foi suprida com valor verdadeiro');
else
    console.log('expressão if foi suprida com valor falso');

//estrutura de condição switch

//ideal para quando é necessário o uso de diveersas condições

const item = 1;

switch (item) {
    case 1:
        console.log('item - 1 - setor de brinquedos');
        break;
    case 2:
        console.log('item - 2 - setor de maquiagem');
        break;
    case 3:
        console.log('item - 3 - setor de calçados');
        break;
    case 4:
        console.log('item - 4 - setor de eletrodométicos');
        break;
    case 5:
        console.log('item - 5 - setor de vestuário feminino');
        break;
    case 6:
        console.log('item - 6 - setor de vestuário masculino');
        break;
    case 7:
        console.log('item - 7 - setor de vestuário infantil');
        break;
    case 8:
        console.log('item - 8 - setor de vestuário doméstico');
        break;
    default:
        console.log('número informado é inválido');
        break;
        //como o default é a última linha a ser executada, tanto faz o uso do break
        //só seria realmente necessário caso não fosse a última linha a ser executada
}

//existe também uma outra forma de representar uma condição
//que é por meio do operador ternário

const idade = 17;

idade >= 18 ? console.log("maior de idade") : console.log('menor de idade');

//exemplo de um função com retorno usando operador ternário

const somaOuMultiplica = (valor) => {
    return valor >= 10 ? valor + valor : valor * valor;
}

//mesma função escrita usando if - else
/*
const somaOuMultiplica = function (valor){
    if(valor >= 10){
        return valor + valor;
    }
    else{
        return valor * valor;
    }
}
*/

//soluções na tela
console.log('menores que 10');
console.log(somaOuMultiplica(1));
console.log(somaOuMultiplica(2));
console.log(somaOuMultiplica(3));
console.log(somaOuMultiplica(6));
console.log(somaOuMultiplica(9));

console.log('maiores ou iguais a 10');
console.log(somaOuMultiplica(10));
console.log(somaOuMultiplica(11));
console.log(somaOuMultiplica(20));
console.log(somaOuMultiplica(50));
console.log(somaOuMultiplica(100));


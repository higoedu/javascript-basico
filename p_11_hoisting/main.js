//hoisting (elevação, içamento)
//Em javascript, funções e variáveis são hoisting (ou "elevação ao topo")
//é o comportamento do javascript de mover declarações para o topo de um escopo
//(o escopo global ou da função em que se encontra)

//exemplo 1
numero1 = 1
console.log(numero1);
var numero1;

//é implicitamente entendido como
//var numero;
//numero = 1

//exemplo 2
funcao();

function funcao(){
    console.log("número");
}

//repare que nos exemplos acima utilizamos a palavra-chave 'var' para criar variáveis
//isso porque 'var' é a única palavra-chave que permite com que o interpretador do javascript faça o hoisting

//por isso é importante sempre dar preferência ao de 'let' e 'const' para criação de variáveis e constantes respectivamente
//pois são imunes a esse tipo de efeito colateral

//exemplo 3
numero2 = 2;
console.log(numero2);//numero2 is not defined
let numero2;

//exemplo 4
numero3 = 3;
console.log(numero3);//missing initializer in const declaration
const numero3;

//sempre utilizar no topo do escopo let ou const

//somente declarações são elevadas. Inicializações não fazem parte do hoisting

//exemplo 5
var numero4 = 4;
console.log(numero4, numero5);//4 undefined
var numero5 = 5;

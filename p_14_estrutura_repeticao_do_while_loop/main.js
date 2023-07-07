//estruturas de repetição (loops)

//iterar -> fazer ou dizer novamente; repetir, reiterar

//iteradores clássicos
//do while
//while
//for

//iteradores de estrutura de dados iteráveis
//for in
//for of

//métodos de objetos iteráveis
//métodos de arrays e objects

//do while loop

//estrutura

//do {
    //código aqui
    //incremento aqui, exemplo i++
//} while (/*condição aqui*/ 1 < 0);

//exerício de exemplo

/*imprimindo números de 1 a 5*/

let conte = 1;

do{
    console.log('conte: ' + conte);
    conte++;
}while(conte < 6);

/*imprimindo caracteres numa string (cadeia de caracteres)*/

//string na qual estamos executando a repetição

let str = "olá";

//primeiro caractere está no índice 0
let cont = 0;

do {
    console.log(str[cont]);//fazendo acesso ao índice de uma string
    cont++;
} while (cont < str.length);
//while loop

//while (/*condição aqui*/){
    //código aqui
    //incremento aqui, exemplo conte++
//}

/*imprimindo números de 1 a 5*/
let conte1 = 1;

while (conte1 < 6) {
    console.log("conte: " + conte1);
    conte1++;
}

/*imprimindo caracteres numa string (cadeia de caracteres)*/

//string na qual estamos executando a repetição
let str = "olá";

//primeiro caractere esta no índice 0
let conte2 = 0;

while (conte2 < str.length) {
    console.log(str[conte2]);
    conte2++;
}

//loop infinitos ocorrem quando a condição que está sendo testada nunca se torna verdadeira
let conte3 = 0;

while (conte3 < 10){
    console.log(conte3);
}

/*o exemplo acima imprime "0" infinitamente porque conte3 nunca é incrementado*/

//exercício 1
let numero1 = 1;

while(numero1 < 10){
    console.log(numero1);
    numero1+=2;
}

//exercício 2
let numero2 = 1;

while(numero2 <= 20){
    if (numero % 4 === 0) {
        console.log(numero2);        
    }
    numero2++;
}

//exercício 3
let numero3 = 100;

while(numero3 <= 150){
    console.log(numero3 + 1);        
    numero3--;
}

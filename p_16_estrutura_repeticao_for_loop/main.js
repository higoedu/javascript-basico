//for loop
let j = 0;

for(;;){
    if(j < 6)
        console.log(j);
    j++;
}

/*imprimindo número de 1 a 5*/
for(let conte = 0; conte < 6; conte++){
    console.log(conte);
}

/*imprimindo cada caractere numa string*/
let str = "olá";

for(let i = 0; i < str.length; i++){
    console.log(str[i]);
}

/*imprimindo todos os números de -10 a 29. Usando for loop*/
for(let i = -10; i <= 29; i++){
    console.log(i);
}

/*imprimindo todos os números pares entre 1 e 40. Usando for loop*/
for(let j = 2; j <= 40; j+=2){
    console.log(j);
}

//ou
for(let j = 1; j <= 40; j++){
    if(j % 2 == 0)
        console.log(j);
}

/*imprimindo todos os números ímpares entre 300 e 333. Usando for loop*/
for(let x = 301; x <= 333; x+=2){
    console.log(x);
}

//ou
for(let x = 300; x <= 333; x++){
    if(x % 2 !== 0)
        console.log(x);
}

/*imprimindo todos os números divisíveis por 5 e 3 que estejam entre 5 e 50. Usando for loop*/
for(let y = 5; y <= 50; y++){
    if((y % 5 == 0) && (y % 3 == 0)){
        console.log(y);
    }
}
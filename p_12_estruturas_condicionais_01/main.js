//a programação estruturada é feita de escolhas lógicas
//verdadeiro ou falso
//sim ou não
//0 ou 1
//e a maneira mais simples de representar isso é por meio das estruturas de condição

//exemplo 1
const fruta = 'maçã';

if(fruta === 'maçã'){
    console.log('fruta é igual a maçã');
}
else{
    console.log('fruta não é igual a maçã');
}

//podemos fazer com vários if's seguidos

//exemplo 2
const numero1 = 1

if(numero1 === 1){
    console.log('é igual a 1');
}

if(numero1 === 2){
    console.log('é igual a 2');
}

if(numero1 === 3){
    console.log('é igual a 3');
}

//o mesmo código acima, escrito de um forma que execute apenas uma das operações verdadeiras
const numero2 = 1;

if(numero1 === 1){
    console.log('é igual a 1');
}
else if(numero1 === 2){
    console.log('é igual a 2');
}
else{
    console.log('é igual a 3');
}


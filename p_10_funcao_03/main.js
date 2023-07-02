//função soma
//com declaração clássica
function soma(numero1, numero2){//parâmetros
    const soma = numero1 + numero2;
    return soma;
}

console.log(soma(15, 15));//argumentos

const resultadoSoma = soma (15, 15);

console.log(resultadoSoma);

console.log(resultadoSoma + 10);

//com função anônima
const somaAnonima = function(num1, num2){
    return num1 + num2;
}

console.log(somaAnonima(20, 20));

//com arrow function
const somaArrow = (n1, n2) => {
    return n1 + n2;
}

console.log(somaArrow(100, 50));

//com reduced
const somaArrowReduced = () => numer1 + numer2;

console.log(somaArrowReduced(200, 200));

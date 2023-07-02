//função anônima (expressão de função)
//função anônima não tem nome
//por não ter nome, para utiliza-lá coloca dentro de uma variável
let anonimaF = function (){
    return 'Retorno da função';
}

console.log(anonimaF);
console.log(anonimaF());

//ES 6 arrow functions
//função de seta
//quando tem uma linha de código, não precisa de {}, nem de return
let arrowF = () => {
    return "Retorno na arrow function"
}

console.log(arrowF);
console.log(arrowF());

//IIFE (immediately invoked function expression)
//função imediata
let retornaIife = (function(){
    return 'retorno de uma função imediata (IIFE)'
})()

console.log(retornaIife);

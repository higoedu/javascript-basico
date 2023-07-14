//em javascript existem dois tipos de escopo:

//escopo local

//escopo global

//no javascript temos o que é chamado de escopo de função: cada função cria um novo escopo

//os escopos determinam a acessibilidade (visibilidade) das variáveis

//variáveis definidas dentro de uma função não são acessíveis (visiveis) de fora de função

//escopo de função -> var

//escopo de bloco -> let e const

//exemplo de escopo local

//vai gera erro, pois não vai conseguir fazer referência a variável nomeCarro

//que esta dento da função
console.log(nomeCarro)

//variável local só é visivel dentro da função ou dentro de outra função
function carros(params) {
    var nomeCarro = "Ferrari";

    console.log(nomeCarro)
    //código aqui pode usar nomeCarro
}

carros()//chamado da função
//is not defined

//exemplo de escopo global

//código aqui pode usar nomeCarro

//vai conseguir fazer referência a variável nomeCarro2
var nomeCarro2 = "Mustang";

console.log(nomeCarro2)

//variável local só é visivel dentro da função ou dentro de outra função
function carros2(params) {
    //código aqui pode usar nomeCarro
    console.log(nomeCarro2)
}

carros2()//chamado da função

//dentro dos interpretadores de javascritp, nós temos os objetos globais

//no node tem o obejto global, que tem várias propriedades dentro dele

//no interpretador dev tools tem o objeto windows, que é o obejto global, que tem várias propriedades

//a variável que criamos com a palavra chave var,

//ela se pendura no objeto window,

//e fica acessivel em toda a aplicação

//é um problema de segurança seríssimo,

//utilizar variáveis globais,

//inclusive pode-se até alterar os valores globais
var cor = 'verde'

//recomendável não se utilize palavra chave var e também não utilize globais

//mesmo criando variável sem palavra chave, ela se pendura no objeto window

//mesmo criando variável sem palavra chave dentro da função, ela se pendura no objeto window

numero1 = 10

function valor() {
    numero2 = 20
}

//tem que utilizar palavra chave let ou palavra chave const

//elas não se penduram no objeto window

//escopo de bloco e escopo de função

//escopo de bloco let

//fica visível só no bloco let
for(let i = 0; i < 10; i++)
    console.log(i)

for(var j = 0; j < 10; j++)
    console.log(j)


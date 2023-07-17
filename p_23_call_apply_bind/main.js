//o método bind() cria uma nova função que, quando chamada,
//tem sua palavra-chave this definida com o valor fornecido,
//com uma seguência determinada de argumantos precedendo
//qualquer outros que sejam fornecidos quando a nova função é chamada

//exemplo:
function thisBindExemplo() {
    console.log(this);
}

const obj = { exemplo: "exemplo"}

thisBindExemplo = thisBindExemplo.bind(obj);

thisBindExemplo();

//nota: call() e apply() tem uma síntaxe idêntica.
//A diferença é que call() aceita uma lista de argumentos,
//enquanto apply() aceita um array de argumentos

//o método call() chama uma função com um dado 'this' e argumentos passados individualmente
//o call() permite que uma função/método, pertencente a um dado objeto,
//seja atribuído e chamado por um objeto diferente.
//Dessa forma podendo reutilizar o método de um objeto em diversos outros objtos
const obj1 = { exemplo1: 'exemplo1', mostraThis: function thisCallExemplo() {
    console.log(this);
}}

obj1.mostraThis();

const obj2 = { exemplo2: "exemplo2" }

obj1.mostraThis.call(obj2);

//o método apply() chama uma função com um dado valor this, e argumentos passados como um array
//(ou um objeto array-like).
//Em outras palavras é um call que aceita argumentos por meio de um array
//ao invés de serem passados individulamente (um a um)
const obj3 = { exemplo3: "exemplo3", mostraThis: function thisCallExemplo() {
    console.log(this);
}}

obj3.mostraThis()

const obj4 = { exemplo4: "exemplo4" }

obj3.mostraThis.apply(obj4);
//chamar o this diretamente no console nos traz o objeto global do contexto em que o javascript esta executando
//o 'this' no devtools do chrome nos traz o objeto 'window' no node nos traz o objeto 'global'
console.log(this.document === document);

//em navegadores web, o objeto window é também o objeto global
console.log(this === window);//true

this.a = 37;
console.log(window.a);

//this no contexto de uma função
//quando não estiver no modo estrito o this apontará para o objeto global
function thisNaoEstrito() { console.log(this) }

//em modo estrito, o valor de this permanece seja qual for o definido ao entrar no contexto de execução,
//assim, no caso a seguir, this por padrão será indefinido (undefined)
//this não vai apontar para o global, vai apontar para variável undefined
function thisEstrito() { 'use strict'; console.log(this) }

//use strict é usado para evitar erros, inconsistência no código
//como por exemplo, pendurar uma variável no global

//this dentro de uma função
//esta inaserido dentro de um objeto

//como método de um objeto
const o = {
    prop: 100,
    f: function(){
        return this.prop;
    }
};

console.log(o.f());

//nas arrow functions (funções seta), o this é definido lexicalment, isto é,
//seu valor é definido pelo contexto de execução onde esta inserido.
//em um código global, this assume o objeto global

//contexto de criação: global
const arrowFunctionThis1 = () => { console.log(this) }

//contexto de criação: obejto //errado
const arrowFunctionThis2 = {
    prop: 150,
    arrowF: () => { console.log(this) }
}

//contexto de criação: objeto //correto
const objt1 = {
    exemplo1: "exemplo 1",
    mostraThis: function() {
        console.log( (() => this) );
    }
}

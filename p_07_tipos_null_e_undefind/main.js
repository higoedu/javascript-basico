//undefined é uma propriedade global (palavra global (chorme, digita windows.undefined) ou key do objeto global (quando trabalha no node))

//null é um literal e não é uma propriedade do objeto global

console.log(undefined == null);//true

console.log(undefined === null);//false - comparação estrita

console.log(typeof undefined);//undefined

console.log(typeof null);//object - erro de implementação (bug no ECMAScript, deveria ser null)

//quando declare uma variável - não atribuiu valor a variável
let a

console.log(a)//undefined

//quando chama uma função - só criou a função
function funcao(){}

funcao()//undefined

//undefined não é uma palavra reservada
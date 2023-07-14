//são funções usadas para construir objetos

//exemplo abaixo é de uma função construtora de ventiladores
function Ventiladores(velMax){
    this.velocidadeMaxima = velMax
    this.ligado = true
}

//instâncias

//para criar uma instância de um objeto do tipo "ventilador" usamos a palavra reservada "new" seguida da função
const ventilador1 = new Ventilador(3)

//acessando propriedades

//para acessar propriedades, como já foi visto, usamos o "."
console.log(ventilador1.velocidadeMaxima); //retorna 3

//diferente de outras lingugens orientadas a objetos, podemos adicionar propriedades e métodos en tenpo de execução
ventilador1.cor = "branco"

console.log(ventilador1.cor)

ventilador1.ligaDesliga = function(){
    if(this.ligado)
        this.ligado = false
    this.ligado = true
}

ventilador1.ligaDesliga()

console.log(ventilador1.ligado)

ventilador1.ligaDesliga()

console.log(ventilador1.ligado)

console.log(ventilador1)

//adicionando o método por meio do protótipo para que seja aplicado a todos os objetos
function liga(params) {
    this.ligado = true;
}

Ventilador.prototype.ligar = liga

//prototype é a forma que se trabalha com a herança dentro do javascript
//para ligar a função liga a todo os objetos que venham ser criados com a função construtora Ventilador
//agente utiliza o prototype, que agente vai esta acessando a raiz da nossa função construtora
//e todos os objetos a serem construidos com essa função construtora vão ter a função liga

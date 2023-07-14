
//objetos é uma coleção de dados relacionados e/ou funcionalidades
    //(que geralmente consistem em diversas variáveis e
        //funções - que são chamadas propriedades e métodos quendo estão dentro de um objeto)

//objetos podem ser inicializados usando new Object(), Object.create() ou usando a forma notação literal

//inicializando um objeto usando a notação literal
const objetoVazio = {
    //propriedade - pode ser um número, string, array, função
}

//dot notation (notação de ponto)

//serve para acessar ou declarar uma nova propriedade ou método

//declarando objeto de forma literal
const dotNotation = {
    propriedade: "sou uma propriedade que será acessada usando dot notation",
    metodo: function(){
        return "sou o retorno de um método, ou seja, uma função dentro de um objeto"
    }
}

//acessando a propriedade e o método
console.log(dotNotation.propriedade)
console.log(dotNotation.metodo())

//declaração uma nova propriedade e depois um novo método
dotNotation.propriedade2 = "sou outra propriedade com valor tipo string"
dotNotation.metodo2 = () => "sou o retorno de outro método"

//acessando os novos componentes
console.log(dotNotation.propriedade2)
console.log(dotNotation.metodo2())

//bracket notation (notação de colchete)

//uma outra forma de acessar componentes de um objeto é por meio da notação de colchete
const braketNotation = {
    propriedade: "sou uma propriedade que será acessada usando dot notation",
    metodo: function(){
        return "sou o retorno de um método, ou seja, uma função dentro de um objeto"
    }
}

//acessando o elemento do objeto por meio do braket notation
console.log(braketNotation['propriedade'])
console.log(braketNotation['metodo']())

//declaração novos componentes do objeto
braketNotation['propriedade2'] = "sou outra propriedade com valor tipo string"
braketNotation['metodo2'] = () => "sou o retorno de outro método"

//acessando os novos componentes
console.log(braketNotation['propriedade2'])
console.log(braketNotation['metodo2']())

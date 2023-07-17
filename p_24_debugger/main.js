//break point - ponto de parada
//terminal é bash
//quando escolhe onde quer que fique o ponto de parada, aparece uma bola vermalha
//clicamos em run and debug ou node
//clica em f5 (continuar)
//escolhe web app chrome
//passar para próxima instrução f10
//para entrar em uma função f11
//para sair de uma função shift + f11
//para recomeçar ctrl + shift + f5
//para parar shift + f5
const str1 = "BR DEV";

console.log(str1);

const funcaoLegal = (str) => {
    const retorno = str + " é legal";

    return retorno;
}

const retornoFuncaoLegal = funcaoLegal(str1);

if(str1.length > 10){
    console.log(retornoFuncaoLegal);
}
else{
    console.log("Não deu para trazer o valor da funcaoLegal");
}

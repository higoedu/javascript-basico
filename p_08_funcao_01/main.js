//funnções são blocos de código (ou subprogrmas, ou subrotinas)
//estruturados que sempre retornam um valor

//procedimentos são blocos de código estruturados, também que não retorna um valor
{
    a = b + 20;
}

//função que não retorna nada, exemplo return, ela returna undefined, valor implícito

let variavel = 'Pegar função';

//declarando a função
function funcao(a){//parãmetro
    let b = a + 10;
    /*
    ela por de baixo dos panos, vai retornar
    return undefined;
    */
}

//chama de função
//retorna undefined
console.log(funcao(5));//argumento

//pode passar função para variável
variavel = funcao(30);

console.log(variavel);//undefined

function funcao2(){
    return 0;
}

variavel = funcao2();

console.log(variavel);//retornou 0

//pode passar funcão para outra função

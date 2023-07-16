//arguentos de função (parâmetros) são vistos como variáveis locais dentro da função
function parametrosLocais(local1, local2) {
    console.log(local1, local2);
}

parametrosLocais('seu local 1', 'seu local 2');

//outra situação é quando temos uma função dentro de outra
let nivelGlobal = 'nível global';
let nivel1 = undefined, nivel2 = undefined, nivel3 = undefined;

function funcaoNivel1() {
    let nivel1 = 'nível 1';

    function funcaoNivel2() {
        let nivel2 = 'nível 2';

        function funcaoNivel3() {
            let nivel3 = 'nível 3';

            console.log(`\nfunção nível 3 resultado: \n${nivelGlobal} \n${nivel1} \n${nivel2} \n${nivel3}`)
        }

        funcaoNivel3();

        console.log(`\n função nível 2 resultado: \n${nivelGlobal} \n${nivel1} \n${nivel2} \n${nivel3 ? nivel3 : 'nível 3 inacessível'}`);
    }

    funcaoNivel2();

    //referêcia as funções
    //se não consegue encontrar as variáveis nesse contexto (escopo)
    //sobe o nível e vai tentar pegar o valor em cima
    //mesma coisa com as outras funções
    console.log(`\nfunção nível 1 resultado: \n${nivelGlobal} \n${nivel1} \n${nivel2} \n${nivel2 ?  nivel2 : 'nível 2 inacessível'} \n${nivel3 ? nivel3 : 'nível 3 inacessível'}`);
}

funcaoNivel1();

//template strings - forma mais legal de se trabalhar com strings
//porque consegue colocar o formato que quiser
//consegue colocar variáveis dentro da string
//abre e fecha crase `nome`

//alerta! prática altamente perigosa!
//escopo global automático sem uso das palavras reservadas let, const e var
//exemplo 1
let obj = {func: function(){a = 10; console.log(a)}}

obj.func();

a;//consegue fazer referência a variável do lado de fora do método
//consegue pegar o valor que esta global

//exemplo 2
obj.func2 = () => {b=50; console.log(b)}

obj.func2();

b = 10;//de fora consigo alterar o valor de dentro

//exemplo 3
obj.func3 = () => {let c=50; console.log(c)}

obj.func3();//retorna 50

c;//não consegue, pois o valor não esta defindo

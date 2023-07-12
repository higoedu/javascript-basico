//objeto array do javascript é um objeto global usado na construção de
    //'arrays': objetos de alto nível semelhantes a listas

//principais características de um array no javascript

//são objetos que tem, nativamente, diversos métodos embutidos para realizar diversos tipos de operação

//são heterogêneos (aceitam diversos tipos de dados dentro da mesma lista - inclusive outro arrays e objetos)

//não tem tamanho fixo (o tamanho pode ser alterado a qualquer momento)

//dados não são necessariamente armazenados contiguamento - podem ser densos (contíguos) ou esparsos (espaçado)

//índices são acessados por meio de números a partir do 0, exemplo arr[0], arr[1], arr[2]...

//acessamos o tamanho do array por meio da propriedade nativa "length", exemplo: arr.length

//criando um array de forma literal
let frutas = []

//ou
let frutas2 = ['maçã', 'banana']

console.log(frutas.length)

//outra maneira seria usando o operador new constrói um novo objeto por meio da função construtora do array
let frutasUsandoNew = new Array('maçã', 'banana') //declarando os elementos como argumentos

let arrTamanho = new Array(10) //dando o número de posições como argumentos

console.log(frutasUsandoNew)

//exemplo de array denso
const arrDenso = [1, 2, 3, 4, 5, 6]

//exemplo de array esparso
const arrEsparco = [1, , , 3]

//tornando-o esparso por meio de inserção posterior:
arrEsparco[10] = 10

//deletar elementos de um array
const arrDel = ['a', 'b', 'c', 'd']

//não é aconselhável, pois tem o médoto que faz isso
delete arrDel[1]

//o delete não retira o espaço ocupado pelo elemento. Apenas exclui o dado que estava nesse espaço, e coloca 'undefined' no lugar

//a prioridade length é writable, isso quer dizer que pode ser alterada
const animais = ["cão", "gato", "cavalo", "elefante", "girafa", "leão", "tartaruga"]

animais.length

animais.length = 4

animais
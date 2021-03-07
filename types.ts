//boolean (true / false)
let isOpen: boolean
isOpen = true

// String ('foo', "foo", `foo`)
let message: string
message = `foo ${isOpen}`

//Number (int, float) pode ser hexadecimal tbm 
let total: number
total = 0xff0 

// array (type[])
let items: number[]
items = [1,2,3]

let values: Array<number>
values = [1,2,3]

// tuple array que vc já sabe o numero de registros dentro e o tipo de cada elemento em ordem
let title: [number, string]
title   = [1, "foo"]

// enum
enum colors {
  white = '#fff',
  black = '#000'
}
// any é spuer legal sim 
let coisa: any
coisa = [1];

// void (vazio)
function logger(): void {
  console.log('foo')
}

// null // undefined pratica n muda nada 
type Bla = string | undefined // ou string ou undefined

// never  nunca vai retornar
function error(): never {
  throw new Error("error"); 
}

//  object 
let cart: object

cart = {
  apelido: "fiote"
}

// Type inference
// exemplo
let message2 = "mensagem definida"
message2 = "teste"

window.addEventListener('click', (el) => {
  console.log(el.target)
})

// Evitar coisas redundates, e pelo amor de Deus né já tem que escrever pra caraio, e ainda escreve coisa redundante, isso que é foda

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// -----------------------------------------TYPE VS INTERFACES -------------------------------
// definicao
type gamao = {
  title: string;
}
type DLCTS = {
  extra: string;
}
// intersection 
type GameCollectionType = gamao & DLCTS

// implements 
class createGameType implements GameCollectionType {
  title: string;
  extra: string;

  constructor(t: string, e: string) {
    this.title = t
    this.extra = e
  }
}

// declarar função
type getSimilaresType = (title: string) => void

// --------------------------- DIFERENÇAS ---------------------- //

// criar tipos primitivos
type IDT = string | number;

// pode criar tuplas normalmente
type TupleT = [number, number]
[1,2] as TupleT;
// se eu por mais de 2 elementos vai reclamar, pq no type eu só deixei com 2 elementos

// apenas uma declaração por escopo não posso usar o mesmo type JQueryT e atribuir propriedades diferentes neles
type JQueryT = {a: string};
// type JQueryT = {b: string}; não vai papai
type JQueryS = {b: string};

// mais simples masi fácil de fazer interseções, tipos primitivios, mais recomendado na maioria das vezes, React props é o segredo pai

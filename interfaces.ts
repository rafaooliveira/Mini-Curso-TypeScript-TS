interface Game {
  id?: string | number;
  title: string;
  description: string;
  genre: string;
  plataform?: string[];
  getSimilars?: (title: string) => void
}
// fora da interface podemos chamar os metodos e as propriedades
// Modifiers para iterface é 100% a mesma coisa pra classes parça é a mema fita 
const tlou: Game ={
  id: 123,
  title: "the last os us", 
  description: "the best game in the world",
  genre: "Action", 
  plataform: ["PS3", "PS4", "PS5"],
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);
  }
}
// como deixei a propriedade getSimilars como opcional com o "?"" ela pode ser duas coisas então tenho que por uma condição para ela funcionar
if (tlou.getSimilars) {
  tlou.getSimilars(tlou.title)
}

// estenendo a interface com dlc
interface DLC extends Game {
  originalGame: Game;
  newContent: string[];
} 

const leftBehind: DLC = {
  title: "the last of us - Left Behind",
  description: "You play as Ellie before the original game",
  genre: "Action", 
  plataform: ["PS4"],
  originalGame: tlou,
  newContent: ["3 hours story", "new characters"]
}

//implementar uma classe baseada numa interface
// Create game implementa Game então precisa ter todos os types definidos na interface Game
class CreateGame implements Game {
  title: string;
  description: string;
  genre: string;

  // no construtor precisa fazer a definição dos types
  constructor(t: string, d: string, g: string) {
    this.title = t
    this.description = d
    this.genre = g
  }
}

// INTERFACES É MAIS USADA NESSES CASOS PARA CRIAR OBJETOS MAIS COMPLEXOS
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
// ----------------------------------------- INTERFACES VS TYPES -----------------------------------
// definicao
interface Gamao {
  title: string;
}

interface DLCT {
  extra: string;
}
// intersection 
interface GameCollectionInterface extends Gamao, DLCT {}

// implements
class CreateGames implements GameCollectionInterface {
  title: string;
  extra: string;

  constructor(t: string, e: string) {
    this.title = t
    this.extra = e
  }

}



//declarar funcao
interface getSimilares {
  (title: string): void
}


// --------------------------- DIFERENÇAS ---------------------- //

// não da pra criar tipos primitivos
// ERRADAO interface ID extends number {} 
// não da pra referenciar um tipo pq com extends ele vai com contexto de valor
// não consegue definir tuplas na interface
interface Tuple {
  0: number;
  1: number;
}
[1,2,3] as Tuple
// consegui colocar mais de um elemento e n teve choro, apsar de eu ter deixado apenas com dois elementos no Tuple

// posso declarar duas interfaces iguais com propriedades diferentes e atribuir a uma novo obj
interface JQuery {
  a: string;
}

interface JQuery {
  b: string;
}
// JQuery fez tipo um merge entre JQuery com a: string e b: JQuery
const $: JQuery = {
  a: "baa",
  b: "foo",
}

// pra criar libs use mais a interface são mais extensiveis e diretamente pra objs 
// bom para usar em POO
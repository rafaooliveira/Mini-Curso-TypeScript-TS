class UserAccount {
  name: string;
  protected age: number;
  street: string;

  constructor(name: string, age:number, street: string) {
    this.name = name;
    this.age = age;
    this.street = street
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old.`)
  }
}

class CharAccount extends UserAccount {
  nickname: string;
  level: number

  constructor(name: string, age: number, street: string, nickname: string, level: number) {
    super(name, age, street); // pegando atributos da classe que estendo UserAccount
    this.nickname = nickname
    this.level = level
  }

  get getLevel() {
    console.log('------GET LEVEL COM ACESSORS------')
    return this.level 
  }

  set setLevel(level: number) {
    console.log('------SETANDO LEVEL COM ACESSORS------')
    this.level = level
  }
}

const will = new UserAccount('Will', 30, "teste")
console.log(will)
will.logDetails(); 

const john = new CharAccount("John", 45, "teste", "johnmaster", 80)
console.log(john)
// da pra usar os metodos da classe pai 
john.logDetails()

// trabalhando com modifiers
// tentando chamar a propriedade age que tá como protected 
// console.log(john.age)
// // OUTOUT
// classes.ts:35:18 - error TS2445: Property 'age' is protected and only accessible within class 'UserAccount' and its subclasses.

// 35 console.log(john.age)

// trabalhando com acessors 
// getLevel é mais uma propriedade do que uma função então é sem os parenteses no final
console.log(john.getLevel)
// CHAMANDO SETlEVEL
john.setLevel = 2
console.log(john.getLevel)

// ABSTRACT CLASS CLASSE AONDE VC NÃO CONSEGUE CRIAR CLASSES A PARTIR DELA MAS PODE ESTENDER ESSA CLASSE PARA OUTRAS QUE PRECISAM DELA, OU SEJA VOCÊ NÃO PODE CRIAR INSTANCIAS DELA 
// ESSE WILL E JOHN IAM SE FODER AÍ PORQUE N SERIA CRIADOS, MAS A PARTE DO CHARACCOUNT QUE EXTENDS DO USERACCOUNT NÃO IA DAR ERRO PEGOU A VISÃO ?
// utilitarios pra trampar com os tipos

type Todo = {
    title: string;
    description: string;
    completed: boolean;
};
//radlonly n vai poder altera propriedade
const todo: Readonly<Todo> = {
  title: "Assistir Darks de novo",
  description: "Relembrando os detalhes",
  completed: false
};
console.log('Readonly', todo)
//atualizar o todo com função 
// Partial
function updateTodo (todo: Todo, fieldsToUpdate: Partial<Todo>) { // mostrar que vc só que que altere partes do obj todo  e não o objeto inteiro por isso precisa do Partial<Todo>
  return {...todo, ...fieldsToUpdate} //spread operator que faz um merge entre os dois parametros e o que prevalece é o ultimo que for definido
}

const todo2: Todo = updateTodo(todo, {completed: true}) // como o Partial foi definido para o Todo, agora consigo manipular a propriedade completed sem ter que deixar opcional
console.log('partial', todo2)

// pick fatiador de props 
type TodoPick = Pick<Todo, "title" | "description"> // não vai carregar a propriedade de completed, gera um novo obj com as propriedades que vc quer pegar 
const todo3: TodoPick = {
  title: "teste",
  description: "teste description"
}
console.log('pick', todo3)

// omit outra forma ele tira o que vc quer e define um novo é o inverso do pick pai 
type TodoOmit = Omit<Todo, "description"> // tira o description do Todo, só posso definir o objeto agora sem o description
const todo4: TodoOmit = {
  title: "teste",
  completed: true
}
console.log('omit', todo4)

// anular poucas coisas para o retorno do obj use o OMIT
// anular muita coisa para o retorno do obj use o PICK
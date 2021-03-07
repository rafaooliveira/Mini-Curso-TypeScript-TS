// Proposta genreics deixar reutilizavel genéricos deixar uma linguagem tipada mais flexivel 
// Problema -> ao redefinir o state com number | string caso tentem por string depois de number queremos que o ts reclame 
// Solução: Usar essas letras predefinidas pra definir o tipo GENÉRICO do State antes de passar os parametros na função usando <S>, mas se vc prefirir outra letra fiote, vai na vibe sinistra
// S -> State
// T -> Type
// K -> Key
// V -> Value
// E -> Element
// No caso usamos a letra S por conta do State pra definir o tipo antes dos parametros da função
// Em seguida atribuimos ao let state o tipo S
// No setState o parametro da função também recebe o newState com tipo S, mas a chamada do useState tá funcionando para string e number 
// Ao definir o type do useState na chamada dele, podemos deixar ele mais flexivel ou condidional dependendo do caso  linha 25, mesmo escopo da função useState obivamente
// finalzinho definindo um type daora pra deixar o código mais fino com type alias né fiote
type numOrStr = number | string
const useState = <S extends numOrStr = string>() => { //string = string para deixar como default, logo, não precisamos definir o tipo na chamada da função 
  let state: S;
  function getState() {
    return state
  }
  function setState(newState: S) {
    state = newState
  }

  return {getState, setState};
}

// const newState = useState<number>(); // mas isso é um problema, pois podemos definir qualquer tipo para a função, e a proposta é deixar com string ou numero, para isso vamos colocar o extends number | string dentro do <S> ao definir a f(x)

// const newState = useState<string>(); //  como tem string = string posso retirar a tipagem na chamada dele
const newState = useState();
// newState.setState(123);
// console.log(newState.getState()) // aqui já vai dar bololo fi, esquece, cocoricó fi

newState.setState("oi");
console.log(newState.getState())

var useState = function () {
    var state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState: getState, setState: setState };
};
// const newState = useState<number>(); // mas isso é um problema, pois podemos definir qualquer tipo para a função, e a proposta é deixar com string ou numero, para isso vamos colocar o extends number | string dentro do <S> ao definir a f(x)
// const newState = useState<string>(); //  como tem string = string posso retirar a tipagem na chamada dele
var newState = useState();
// newState.setState(123);
// console.log(newState.getState()) // aqui já vai dar bololo fi, esquece, cocoricó fi
newState.setState("oi");
console.log(newState.getState());

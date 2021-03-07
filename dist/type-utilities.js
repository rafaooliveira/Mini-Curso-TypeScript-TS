"use strict";
// utilitarios pra trampar com os tipos
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//radlonly n vai poder altera propriedade
var todo = {
    title: "Assistir Dark de novo",
    description: "Relembrar os detalhes",
    completed: false
};
console.log('Readonly', todo);
//atualizar o todo com função 
// Partial
function updateTodo(todo, fieldsToUpdate) {
    return __assign(__assign({}, todo), fieldsToUpdate); //spread operator que faz um merge entre os dois parametros e o que prevalece é o ultimo que for definido
}
var todo2 = updateTodo(todo, { completed: true }); // como o Partial foi definido para o Todo, agora consigo manipular a propriedade completed sem ter que deixar opcional
console.log('partial', todo2);
var todo3 = {
    title: "teste",
    description: "teste description"
};
console.log('pick', todo3);
var todo4 = {
    title: "teste",
    completed: true
};
console.log('omit', todo4);
// anular poucas coisas para o retorno do obj use o OMIT
// anular muita coisa para o retorno do obj use o PICK

"use strict";
//boolean (true / false)
var isOpen;
isOpen = true;
// String ('foo', "foo", `foo`)
var message;
message = "foo " + isOpen;
//Number (int, float) pode ser hexadecimal tbm 
var total;
total = 0xff0;
// array (type[])
var items;
items = [1, 2, 3];
var values;
values = [1, 2, 3];
// tuple array que vc já sabe o numero de registros dentro e o tipo de cada elemento em ordem
var title;
title = [1, "foo"];
// enum
var colors;
(function (colors) {
    colors["white"] = "#fff";
    colors["black"] = "#000";
})(colors || (colors = {}));
// any é spuer legal sim 
var coisa;
coisa = [1];
// void (vazio)
function logger() {
    console.log('foo');
}
// never  nunca vai retornar
function error() {
    throw new Error("error");
}
//  object 
var cart;
cart = {
    apelido: "fiote"
};
// Type inference
// exemplo
var message2 = "mensagem definida";
message2 = "teste";
window.addEventListener('click', function (el) {
    console.log(el.target);
});
// implements 
var createGameType = /** @class */ (function () {
    function createGameType(t, e) {
        this.title = t;
        this.extra = e;
    }
    return createGameType;
}());
[1, 2];
// mais simples masi fácil de fazer interseções, tipos primitivios, mais recomendado na maioria das vezes, React props é o segredo pai

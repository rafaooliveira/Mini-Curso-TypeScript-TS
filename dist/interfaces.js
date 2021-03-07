"use strict";
// fora da interface podemos chamar os metodos e as propriedades
// Modifiers para iterface é 100% a mesma coisa pra classes parça é a mema fita 
var tlou = {
    id: 123,
    title: "the last os us",
    description: "the best game in the world",
    genre: "Action",
    plataform: ["PS3", "PS4", "PS5"],
    getSimilars: function (title) {
        console.log("Similar games to " + title + ": Uncharted, A Plague Tale, Metro");
    }
};
// como deixei a propriedade getSimilars como opcional com o "?"" ela pode ser duas coisas então tenho que pode uma condição para ela funcionar
if (tlou.getSimilars) {
    tlou.getSimilars(tlou.title);
}
var leftBehind = {
    title: "the last of us - Left Behind",
    description: "You play as Ellie before the original game",
    genre: "Action",
    plataform: ["PS4"],
    originalGame: tlou,
    newContent: ["3 hours story", "new characters"]
};
//implementar uma classe baseada numa interface
// Create game implementa Game então precisa ter todos os types definidos na interface Game
var CreateGame = /** @class */ (function () {
    // no construtor precisa fazer a definição dos types
    function CreateGame(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
    return CreateGame;
}());
// implements
var CreateGames = /** @class */ (function () {
    function CreateGames(t, e) {
        this.title = t;
        this.extra = e;
    }
    return CreateGames;
}());
[1, 2, 3];
// JQuery fez tipo um merge entre JQuery com a: string e b: JQuery
var $ = {
    a: "baa",
    b: "foo",
};
// pra criar libs use mais a interface são mais extensiveis e diretamente pra objs 
// bom para usar em POO

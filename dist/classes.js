"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserAccount = /** @class */ (function () {
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    UserAccount.prototype.logDetails = function () {
        console.log("The player " + this.name + " is " + this.age + " years old.");
    };
    return UserAccount;
}());
var CharAccount = /** @class */ (function (_super) {
    __extends(CharAccount, _super);
    function CharAccount(name, age, nickname, level) {
        var _this = _super.call(this, name, age) || this;
        _this.nickname = nickname;
        _this.level = level;
        return _this;
    }
    Object.defineProperty(CharAccount.prototype, "getLevel", {
        get: function () {
            console.log('------GET LEVEL COM ACESSORS------');
            return this.level;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CharAccount.prototype, "setLevel", {
        set: function (level) {
            console.log('------SETANDO LEVEL COM ACESSORS------');
            this.level = level;
        },
        enumerable: false,
        configurable: true
    });
    return CharAccount;
}(UserAccount));
var will = new UserAccount('Will', 30);
console.log(will);
will.logDetails();
var john = new CharAccount("John", 45, "johnmaster", 80);
console.log(john);
// da pra usar os metodos da classe pai 
john.logDetails();
// trabalhando com modifiers
// tentando chamar a propriedade age que tá como protected 
// console.log(john.age)
// // OUTOUT
// classes.ts:35:18 - error TS2445: Property 'age' is protected and only accessible within class 'UserAccount' and its subclasses.
// 35 console.log(john.age)
// trabalhando com acessors 
// getLevel é mais uma propriedade do que uma função então é sem os parenteses no final
console.log(john.getLevel);
// CHAMANDO SETlEVEL
john.setLevel = 2;
console.log(john.getLevel);
// ABSTRACT CLASS CLASSE AONDE VC NÃO CONSEGUE CRIAR CLASSES A PARTIR DELA MAS PODE ESTENDER ESSA CLASSE PARA OUTRAS QUE PRECISAM DELA, OU SEJA VOCÊ NÃO PODE CRIAR INSTANCIAS DELA 
// ESSE WILL E JOHN IAM SE FODER AÍ PORQUE N SERIA CRIADOS, MAS A PARTE DO CHARACCOUNT QUE EXTENDS DO USERACCOUNT NÃO IA DAR ERRO PEGOU A VISÃO ?

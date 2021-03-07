"use strict";
// decorators é embassado function com parametros default
// target é o constructor da nossa classe vai vendo pai 
// factiory para criar um decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// function Logger(prefix: string) {
//   console.log(prefix)
//   return (target: any) => {
//     console.log(`${prefix} - ${target}`)
//   }
// }
// @Logger("awesome") // decorator
// class Foo {}
// decorator - anotar a versão da API, JÁ CRIAR api com versão.
// function setAPIVersion(apiVersion: string) {
//   return (target: any) => {
//     return class extends target {
//       version = apiVersion
//     }
//   }
// }
// @setAPIVersion("2.0.0")
// class api {}
// console.log(new api())
// property decorator
// function minLength(length: number) {
//   return (target: any, key: string) => { //key é a propriedade que vamos trampar no caso pe o title
//     let val = target[key]
//     const getter = () => val;
//     const setter = (value: string) => {
//       if(value.length < length) {
//         console.log(`error: vc n pode criar ${key} com tamanjo menor que ${length}`)
//       } else {
//         val = value
//       }
//     }
//     Object.defineProperty(target, key, {
//       get: getter,
//       set: setter
//     }) 
//   }
// }
// class Movie {
//   //validar - se for menor que 5 - error
//   @minLength(5)
//   title: string;
//   constructor(t: string) {
//     this.title = t
//   }
// }
// const movie = new Movie("Interstellar")
// console.log(movie.title)
// Method Decorator funçao com delay podemos usar pra ping 
function delay(ms) {
    return function (target, key, descriptor) {
        console.log(target);
        console.log(key);
        console.log(descriptor);
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("esperando " + ms + "...");
            setTimeout(function () {
                originalMethod.apply(_this, args);
            }, ms);
            return descriptor;
        };
    };
}
var Greeter = /** @class */ (function () {
    function Greeter(g) {
        this.greeting = g;
    }
    // esperar e chamar o metodo
    Greeter.prototype.greet = function () {
        console.log("Hello " + this.greeting);
    };
    __decorate([
        delay(1000)
    ], Greeter.prototype, "greet", null);
    return Greeter;
}());
var pessoinha = new Greeter("pessoinha");
pessoinha.greet();

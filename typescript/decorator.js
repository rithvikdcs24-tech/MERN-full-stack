"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Min(limit) {
    return function (target, propertyKey) {
        const values = new WeakMap();
        const getter = function () {
            return values.get(this);
        };
        const setter = function (newVal) {
            values.set(this, newVal);
            if (newVal.length < limit) {
                this.errors = `your password should be bigger than ${limit}`;
            }
            else {
                this.errors = "password length is correct";
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    };
}
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
__decorate([
    Min(8)
], User.prototype, "password", void 0);
let obj = new User("dany", "abcdefgh");
console.log(obj.username);
console.log(obj.password);
console.log(obj.errors);

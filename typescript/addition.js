"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Addition = void 0;
exports.show = show;
class Addition {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    sum() {
        console.log("sum:" + (this.x + this.y));
    }
}
exports.Addition = Addition;
function show() {
    console.log("hello simple function");
}
let obj = new Addition(10, 20);
obj.sum();
show();

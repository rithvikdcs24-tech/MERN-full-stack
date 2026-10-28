
export class Addition {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    sum() {
        console.log("sum:" + (this.x + this.y));
    }
}

export function show() {
    console.log("hello simple function");
}

let obj = new Addition(10, 20);
obj.sum();

show();

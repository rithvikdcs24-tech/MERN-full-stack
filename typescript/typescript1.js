"use strict";
class Sample {
    static sid = 10;
    static sname = "Nahida";
    text = "hello";
    static display() {
        console.log("Sample id:", Sample.sid);
        console.log("Sample name:", Sample.sname);
    }
    show() {
        console.log("Text:", this.text);
        console.log("Sample id:", Sample.sid);
        console.log("Sample name:", Sample.sname);
    }
}
Sample.display();
const obj = new Sample();
obj.show();

"use strict";
class Student {
    setValue(sid, sname) {
        this.sid = sid;
        this.sname = sname;
    }
    display() {
        console.log("sid=" + this.sid);
        console.log("sname=" + this.sname);
    }
}
let s = new Student();
s.setValue(1, "nahida");
s.display();
let obj = new Student();
obj.setValue("1011", "harichandana");
obj.display();
let obj1 = new Student();
obj1.setValue(true, "yes");
obj1.display();

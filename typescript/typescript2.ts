
class Parent {
    show() {
        console.log("Parent class method");
    }
}

class child1 extends Parent {
    disp() {
        console.log("Child1 method");
    }
}

class child2 extends Parent {
    display() {
        console.log("Child2 method");
    }
}

let cobj = new child1();
cobj.show();
cobj.disp();
let c2obj = new child2();
c2obj.display();
c2obj.show();

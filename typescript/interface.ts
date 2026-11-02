
class Student<T, U> {

    private sid!: T;
    private sname!: U;

    setValue(sid: T, sname: U): void {
        this.sid = sid;
        this.sname = sname;
    }

    display(): void {
        console.log("sid=" + this.sid);
        console.log("sname=" + this.sname);
    }
}

let s = new Student<number, string>();
s.setValue(1, "nahida");
s.display();

let obj = new Student<string, string>();
obj.setValue("1011", "harichandana");
obj.display();

let obj1 = new Student<boolean, string>();
obj1.setValue(true, "yes");
obj1.display();

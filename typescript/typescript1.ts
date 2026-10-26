
class Sample {
    static sid: number = 10;
    static sname: string = "Nahida";

    text: string = "hello";

    static display(): void {
        console.log("Sample id:", Sample.sid);
        console.log("Sample name:", Sample.sname);
    }

    show(): void {
        console.log("Text:", this.text);
        console.log("Sample id:", Sample.sid);
        console.log("Sample name:", Sample.sname);
    }
}

Sample.display();

const obj = new Sample();
obj.show();

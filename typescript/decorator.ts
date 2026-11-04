
function Min(limit: number) {
    return function (target: any, propertyKey: string) {

        const values = new WeakMap<object, string>();

        const getter = function (this: any) {
            return values.get(this);
        };

        const setter = function (this: any, newVal: string) {
            values.set(this, newVal);

            if (newVal.length < limit) {
                this.errors = `your password should be bigger than ${limit}`;
            } else {
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
    username: string;
    declare errors?: string;

    @Min(8)
    password!: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}

let obj = new User("dany", "abcdefgh");

console.log(obj.username);
console.log(obj.password);
console.log(obj.errors);

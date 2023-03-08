
// interface Prototype {
//     clone():Prototype;
// }
 
// class Dog implements Prototype {
//     public name: string;
//     public birthYear: number;
//     public sex: string;
//     public presentYear: number;
//     constructor() {
//         this.name = "lili";
//         this.birthYear = 2015;
//         this.sex = "男";
//         this.presentYear = 2018;
//     }
 
//     public getDiscription(): string {
//         return `狗狗叫${this.name},性别${this.sex},${this.presentYear}年${this.presentYear - this.birthYear}岁了`
//     }
 
//     // 实现复制
//     public clone(): Prototype {
//         return Object.create(this);
//     }
// }
 
// // 使用
// const dog = new Dog();
// console.log(dog.getDiscription());
// dog.presentYear = 2020;
// const dog1 = Object.create(dog);
// console.log(dog1.getDiscription());
// console.log(dog.clone().getDiscription())

























/**
 * The example class that has cloning ability. We'll see how the values of field
 * with different types will be cloned.
 */
class Prototype {
    public primitive: any;
    public component: object;
    public circularReference: ComponentWithBackReference;

    public clone(): this {
        const clone = Object.create(this);

        clone.component = Object.create(this.component);

        // Cloning an object that has a nested object with backreference
        // requires special treatment. After the cloning is completed, the
        // nested object should point to the cloned object, instead of the
        // original object. Spread operator can be handy for this case.
        clone.circularReference = {
            ...this.circularReference,
            prototype: { ...this },
        };

        return clone;
    }
}

class ComponentWithBackReference {
    public prototype;

    constructor(prototype: Prototype) {
        this.prototype = prototype;
    }
}

/**
 * The client code.
 */
function clientCode() {
    const p1 = new Prototype();
    p1.primitive = 245;
    p1.component = new Date();
    p1.circularReference = new ComponentWithBackReference(p1);

    const p2 = p1.clone();
    if (p1.primitive === p2.primitive) {
        console.log('Primitive field values have been carried over to a clone. Yay!');
    } else {
        console.log('Primitive field values have not been copied. Booo!');
    }
    if (p1.component === p2.component) {
        console.log('Simple component has not been cloned. Booo!');
    } else {
        console.log('Simple component has been cloned. Yay!');
    }

    if (p1.circularReference === p2.circularReference) {
        console.log('Component with back reference has not been cloned. Booo!');
    } else {
        console.log('Component with back reference has been cloned. Yay!');
    }

    if (p1.circularReference.prototype === p2.circularReference.prototype) {
        console.log('Component with back reference is linked to original object. Booo!');
    } else {
        console.log('Component with back reference is linked to the clone. Yay!');
    }
}

clientCode();
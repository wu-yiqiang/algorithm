
interface Prototype {
    clone():Prototype;
}
 
class Dog implements Prototype {
    public name: string;
    public birthYear: number;
    public sex: string;
    public presentYear: number;
    constructor() {
        this.name = "lili";
        this.birthYear = 2015;
        this.sex = "男";
        this.presentYear = 2018;
    }
 
    public getDiscription(): string {
        return `狗狗叫${this.name},性别${this.sex},${this.presentYear}年${this.presentYear - this.birthYear}岁了`
    }
 
    // 实现复制
    public clone(): Prototype {
        return Object.create(this);
    }
}
 
// 使用
const dog = new Dog();
console.log(dog.getDiscription());
dog.presentYear = 2020;
const dog1 = Object.create(dog);
console.log(dog1.getDiscription());
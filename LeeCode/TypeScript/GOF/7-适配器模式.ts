// 类适配器
// 目标对象
interface Target {
    request() : void;
}
// 被适配者
class Adaptee {
    constructor() {}
    // 这是源角色，有自己的的业务逻辑
    public specificRequest() : void {}
}
// 适配器
class Adapter extends Adaptee implements Target {
    constructor() {
        super();
    }
    public request() : void {
        super.specificRequest();
    }
}
 
const target : Target = new Adapter();
target.request();


// 对象适配器
// 目标对象
interface Target {
    request() : void;
}
// 被适配者
class Adaptee {
    constructor() {}
    // 这是源角色，有自己的的业务逻辑
    public specificRequest() : void {}
}
// 适配器
class Adapter implements Target {
    private adaptee : Adaptee;
    constructor(adaptee : Adaptee) {
        this.adaptee = adaptee;
    }
    public request() : void {
        this.adaptee.specificRequest();
    }
}
// 使用
const target : Target = new Adapter(new Adaptee());
target.request();

// 接口适配器
interface Adaptee {
    operation1() : void;
    operation2() : void;
}
 
abstract class AbsAdapter implements Adaptee {
    public operation1() : void {}
    public operation2() : void {} 
}
 
class UseClass extends AbsAdapter {
    public operation1() : void {}// 重写该类
}

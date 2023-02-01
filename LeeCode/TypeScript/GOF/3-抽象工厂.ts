// 抽象工厂接口
interface AbstractFactory {
    createProductA() : AbstractProductA;
    createProductB() : AbstractProductB;
}
 
// 抽象产品A接口
interface AbstractProductA {}
 
// 抽象产品B接口
interface AbstractProductB {}
 
// 具体工厂1
class ConcreteFactory1 implements AbstractFactory {
    constructor() {}
    public createProductA() : AbstractProductA {
        return new ConcreteProductA1();
    }
    public createProductB() : AbstractProductB {
        return new ConcreteProductB1();
    }
}
 
// 具体工厂2
class ConcreteFactory2 implements AbstractFactory {
    constructor() {}
    public createProductA() : AbstractProductA {
        return new ConcreteProductA2();
    }
    public createProductB() : AbstractProductB {
        return new ConcreteProductB2();
    }
}
 
// 具体产品A1
class ConcreteProductA1 implements AbstractProductA {}
// 具体产品A2
class ConcreteProductA2 implements AbstractProductA {}
// 具体产品B1
class ConcreteProductB1 implements AbstractProductB {}
// 具体产品B2
class ConcreteProductB2 implements AbstractProductA {}
 
// 使用
const factory1 : AbstractFactory = new ConcreteFactory1();
const factory2 : AbstractFactory = new ConcreteFactory2();
const productA1 : AbstractProductA = factory1.createProductA();
const productA2 : AbstractProductA = factory2.createProductA();
const productB1 : AbstractProductB = factory1.createProductB();
const productB2 : AbstractProductB = factory2.createProductB();
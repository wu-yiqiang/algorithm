// 抽象产品接口
interface Product2 {
    method1(): void;
    method2(): void;
}

// 具体产品一
class ConcreteProduct_1 implements Product2 {
    constructor() { }
    method1() {

    }
    method2() {

    }
}

// 具体产品二
class ConcreteProduct_2 implements Product2 {
    constructor() { }
    method1() {

    }
    method2() {

    }
}

// 抽象工厂
abstract class Creator {
    public abstract createProduct(type: number): Product;
}

// 具体工厂
class ConcreteCreator extends Creator {
    constructor() {
        super();
    }

    public createProduct(type: number): Product {
        let product = null;
        if (type === 1) {
            product = new ConcreteProduct_1();
        } else if (type === 2) {
            product = new ConcreteProduct_2();
        }
        return product;
    }
}

// 使用
const creator: Creator = new ConcreteCreator();
const myProduct: Product = creator.createProduct(1);
abstract class Builder {
    public abstract buildPartA() : void;
    public abstract buildPartB() : void;
    public abstract buildPartC() : void;
    public abstract buildProduct() : Product;
}
 
// 具体建造者
class ConcreteBuilder extends Builder {
    private product : Product;
    constructor(product : Product) {
        super();
        this.product = product;
    }
 
    public buildPartA() : void {}
    public buildPartB() : void {}
    public buildPartC() : void {}
 
    // 最终组建一个产品
    public buildProduct() : Product {
        return this.product;
    }
}
 
// 产品角色
class Product {
    public doSomething() : void {
        // 独立业务
    }
}
 
// 指挥者
class Director {
    private _builder : Builder;
    constructor(builder : Builder) {
        this._builder = builder;
    }
 
    set builder(builder : Builder) {
        this._builder = builder;
    }
 
    // 将处理建造的流程交给指挥者
    public constructorProduct() {
        this._builder.buildPartA();
        this._builder.buildPartB();
        this._builder.buildPartC();
        return this._builder.buildProduct();
    }
}
 
// 使用
const builder : Builder = new ConcreteBuilder(new Product());
const director : Director = new Director(builder);
const product : Product = director.constructorProduct();
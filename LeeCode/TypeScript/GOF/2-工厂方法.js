var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 具体产品一
var ConcreteProduct_1 = /** @class */ (function () {
    function ConcreteProduct_1() {
    }
    ConcreteProduct_1.prototype.method1 = function () {
    };
    ConcreteProduct_1.prototype.method2 = function () {
    };
    return ConcreteProduct_1;
}());
// 具体产品二
var ConcreteProduct_2 = /** @class */ (function () {
    function ConcreteProduct_2() {
    }
    ConcreteProduct_2.prototype.method1 = function () { };
    ConcreteProduct_2.prototype.method2 = function () { };
    return ConcreteProduct_2;
}());
// 抽象工厂
var Creator = /** @class */ (function () {
    function Creator() {
    }
    return Creator;
}());
// 具体工厂
var ConcreteCreator = /** @class */ (function (_super) {
    __extends(ConcreteCreator, _super);
    function ConcreteCreator() {
        return _super.call(this) || this;
    }
    ConcreteCreator.prototype.createProduct = function (type) {
        var product = null;
        if (type === 1) {
            product = new ConcreteProduct_1();
        }
        else if (type === 2) {
            product = new ConcreteProduct_2();
        }
        return product;
    };
    return ConcreteCreator;
}(Creator));
// 使用
var creator = new ConcreteCreator();
var myProduct = creator.createProduct(1);

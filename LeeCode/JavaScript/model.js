var RealSubject = /** @class */ (function () {
    function RealSubject() {
    }
    RealSubject.prototype.doOperation = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        console.log("\u771F\u5B9E\u7684\u76EE\u6807\u5BF9\u8C61\u5728\u6267\u884C\u64CD\u4F5C\uFF0C\u53C2\u6570\uFF1A".concat(items)); // 真实的目标对象在执行操作，参数：do work,sing
    };
    return RealSubject;
}());
var MyProxy = /** @class */ (function () {
    function MyProxy(target) {
        this.target = target;
    }
    MyProxy.prototype.doOperation = function () {
        var _a;
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        console.log("\u4EE3\u7406\u5BF9\u8C61\u5728\u6267\u884C\u64CD\u4F5C\uFF0C\u53C2\u6570\uFF1A".concat(items)); // 代理对象在执行操作，参数：do work,sing
        (_a = this.target).doOperation.apply(_a, items);
    };
    return MyProxy;
}());
var proxy = new MyProxy(new RealSubject());
proxy.doOperation('do work', 'sing');

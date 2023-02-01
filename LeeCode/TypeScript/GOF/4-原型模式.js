var Dog = /** @class */ (function () {
    function Dog() {
        this.name = "lili";
        this.birthYear = 2015;
        this.sex = "男";
        this.presentYear = 2018;
    }
    Dog.prototype.getDiscription = function () {
        return "\u72D7\u72D7\u53EB".concat(this.name, ",\u6027\u522B").concat(this.sex, ",").concat(this.presentYear, "\u5E74").concat(this.presentYear - this.birthYear, "\u5C81\u4E86");
    };
    // 实现复制
    Dog.prototype.clone = function () {
        return Object.create(this);
    };
    return Dog;
}());
// 使用
var dog = new Dog();
console.log(dog.getDiscription());
dog.presentYear = 2020;
var dog1 = Object.create(dog);
console.log(dog1.getDiscription());

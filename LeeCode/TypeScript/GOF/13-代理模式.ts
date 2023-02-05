// 静态代理
interface Subject {
    doOperation() : void;
}
 
class RealSubject implements Subject {
    public doOperation() {
        console.log('我是RealSubject类，正在执行');
    }
}
 
class MyProxy implements Subject {
    private target : Subject;
    constructor(realSubject : Subject) {
        this.target = realSubject;
    }
 
    public doOperation() {
        console.log('我是代理类');
        this.target.doOperation();
    }
}
 
function main() {
    const realSubject : Subject = new RealSubject();
    const myProxy : Subject = new MyProxy(realSubject);
    myProxy.doOperation();
}
 
main();



// 动态代理
interface Subject {
    doOperation() : void;
}
 
class RealSubject implements Subject {
    constructor() {}
 
    public doOperation() : void {
        console.log('我是RealSubject类，正在执行');
    }
}
 
class ProxyFactory {
    private target : any;
    constructor(target : any) {
        this.target = target;
    }
 
    public getProxyInstance() : any {
        return new Proxy(this.target, {
            get: (target, propKey) => {
                // 做的一些拦截处理
                return target[propKey];
            }
        });
    }
}
 
function main() {
    const target : Subject = new RealSubject();
    const proxyInstance : Subject = <Subject>new ProxyFactory(target).getProxyInstance();
 
    proxyInstance.doOperation();
}
 
main();

class SubSystemA {
    public doOperationA() : void {
        console.log('子系统A的举动');
    }
}
 
class SubSystemB {
    public doOperationB() : void {
        console.log('子系统B的举动');
    }
}
 
class Facade {
    private subSystemA : SubSystemA;
    private subSystemB : SubSystemB;
    constructor() {
        this.subSystemA = new SubSystemA();
        this.subSystemB = new SubSystemB();
    }
 
    public doOperation() : void {
        this.subSystemA.doOperationA();
        this.subSystemB.doOperationB();
    }
}
 
function main() {
    const facade : Facade = new Facade();
    facade.doOperation();
}
 
main();
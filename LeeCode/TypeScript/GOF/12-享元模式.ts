abstract class Flyweight {
    public abstract doOperation(extrinsicState : string) : void;
}
 
class ConcreteFlyweight extends Flyweight {
    private intrinsicState : string;
    constructor(intrinsicState : string) {
        super();
        this.intrinsicState = intrinsicState;
    }
 
    public doOperation(extrinsicState : string) : void {
        console.log(`这是具体享元角色，内部状态为${this.intrinsicState},外部状态为${extrinsicState}`);
    }
}
 
interface flyweightObject {
    [key : string] : Flyweight
}
 
class FlyweightFactory {
    private flyweights : flyweightObject;
    constructor() {
        this.flyweights = {};
    }
 
    public getFlyweight(intrinsicState : string) : Flyweight {
        if (!this.flyweights[intrinsicState]) {
            const flyweight : Flyweight = new ConcreteFlyweight(intrinsicState);
            this.flyweights[intrinsicState] = flyweight;
        }
        return this.flyweights[intrinsicState];
    }
}
 
function main() {
    const factory : FlyweightFactory = new FlyweightFactory();
    const flyweight1 : Flyweight = factory.getFlyweight("aa");
    const flyweight2 : Flyweight = factory.getFlyweight("aa");
    flyweight1.doOperation('x');
    flyweight2.doOperation('y');
}
 
main();
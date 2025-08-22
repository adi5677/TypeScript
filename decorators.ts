function classLogger(target: any) {
    console.log(`Class: ${target.name}`);
}

function methodLogger(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Method: ${key}, Args: ${JSON.stringify(args)}`);
        return originalMethod.apply(this, args);
    };
}

@classLogger
class CustomMaths {

    // @methodLogger
    add(a: number, b: number): number {
        return a + b;
    }

    // @methodLogger
    subtract(a: number, b: number): number {
        return a - b;
    }
}



const math = new CustomMaths();
console.log(math.add(5, 3));
console.log(math.subtract(10, 4));


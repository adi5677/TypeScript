function updatedSum(target:any, key:string, descriptor:PropertyDescriptor): number {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${key} with args: ${JSON.stringify(args)}`);
        return originalMethod.apply(this, args);
    };
    return descriptor.value;
}

class CustomMaths1 {

    add(a: number, b: number): number {
        return a + b;
    }

    sum() {
        return this.add(5, 10);
    }

}

var math1 = new CustomMaths1();
// console.log(math1.add(5, 10));
console.log(math1.sum());

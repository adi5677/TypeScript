function test1(): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(42);
        }, 2000);
    });
}

function test2(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello, world!");
        }, 1000);
    });
}

test1().then(result => {
    console.log(result);
});

test2().then(result => {
    console.log(result);
});

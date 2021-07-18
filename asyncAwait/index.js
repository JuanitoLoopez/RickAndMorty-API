const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Do Somethin Async.'), 2000)
        : reject(new Error('Test Error'))
    })
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('First Before');
doSomething();
console.log('First After');

const anotherFunction = async () => {
    try {
        const anotherSomething = await doSomethingAsync();
        console.log(anotherSomething); 
    } catch (error) {
        console.log(error)
    }
}

console.log('Second Before');
anotherFunction();
console.log('Second After');

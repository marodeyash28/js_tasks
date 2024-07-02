// 1. Array.prototype[@@iterator]()
const stringIteratorExample = () => {
    const str = 'hello';
    const iterator = str[Symbol.iterator]();

    for (let char of iterator) {
        console.log(char); 
    }
};

stringIteratorExample();

// 1. Array.prototype[@@iterator]()
const arrayIteratorExample = () => {
    const array = ['a', 'b', 'c'];
    const iterator = array[Symbol.iterator]();

    for (let item of iterator) {
        console.log(item); 
    }
};

// 2. Array.at()
const arrayAtExample = () => {
    const array = ['a', 'b', 'c'];
    console.log(array.at(1));
};

// 3. Array.concat()
const arrayConcatExample = () => {
    const array1 = [1, 2];
    const array2 = [3, 4];
    const mergedArray = array1.concat(array2);

    console.log(mergedArray); 
};

// 4. Array.copyWithin()
const arrayCopyWithinExample = () => {
    const array = [1, 2, 3, 4, 5];
    array.copyWithin(0, 3, 5);

    console.log(array); 
};

// 5. Array.entries()
const arrayEntriesExample = () => {
    const array = ['a', 'b', 'c'];
    const iterator = array.entries();

    for (let [index, value] of iterator) {
        console.log(index, value); 
    }
};

// 6. Array.every()
const arrayEveryExample = () => {
    const array = [1, 2, 3, 4, 5];
    const allGreaterThanTwo = array.every(num => num > 2);

    console.log(allGreaterThanTwo);
};

// 7. Array.fill()
const arrayFillExample = () => {
    const array = [1, 2, 3, 4, 5];
    array.fill(0, 2);

    console.log(array); 
};

// 8. Array.filter()
const arrayFilterExample = () => {
    const array = [1, 2, 3, 4, 5];
    const filteredArray = array.filter(num => num > 2);

    console.log(filteredArray); 
};

// 9. Array.find()
const arrayFindExample = () => {
    const array = [1, 2, 3, 4, 5];
    const foundElement = array.find(num => num > 2);

    console.log(foundElement); 
};

// 10. Array.findIndex()
const arrayFindIndexExample = () => {
    const array = [1, 2, 3, 4, 5];
    const foundIndex = array.findIndex(num => num > 2);

    console.log(foundIndex); // Output: 2 (index of element 3)
};

// 11. Array.findLast()
// Note: This method is not standard in JavaScript.
const arrayFindLastExample = () => {
    const array = [1, 2, 3, 4, 5];
    const foundElement = array.findLast(num => num > 2);

    console.log(foundElement); 
};

// 12. Array.findLastIndex()
// Note: This method is not standard in JavaScript.
const arrayFindLastIndexExample = () => {
    const array = [1, 2, 3, 4, 5];
    const foundIndex = array.findLastIndex(num => num > 2);

    console.log(foundIndex); 
};

// 13. Array.flat()
const arrayFlatExample = () => {
    const array = [1, 2, [3, 4, [5, 6]]];
    const flattenedArray = array.flat(2);

    console.log(flattenedArray); 
};

// 14. Array.flatMap()
const arrayFlatMapExample = () => {
    const array = [1, 2, 3, 4, 5];
    const doubledArray = array.flatMap(num => [num * 2]);

    console.log(doubledArray); 
};

// 15. Array.forEach()
const arrayForEachExample = () => {
    const array = [1, 2, 3];
    array.forEach(element => console.log(element));
};

// 16. Array.includes()
const arrayIncludesExample = () => {
    const array = [1, 2, 3];
    const includesTwo = array.includes(2);

    console.log(includesTwo); 
};

// 17. Array.indexOf()
const arrayIndexOfExample = () => {
    const array = [1, 2, 3, 4, 5];
    const index = array.indexOf(3);

    console.log(index); 
};

// 18. Array.join()
const arrayJoinExample = () => {
    const array = ['Hello', 'World'];
    const joinedString = array.join(' ');

    console.log(joinedString); 
};

// 19. Array.keys()
const arrayKeysExample = () => {
    const array = ['a', 'b', 'c'];
    const iterator = array.keys();

    for (let key of iterator) {
        console.log(key);
    }
};

// 20. Array.lastIndexOf()
const arrayLastIndexOfExample = () => {
    const array = [1, 2, 3, 4, 2];
    const lastIndex = array.lastIndexOf(2);

    console.log(lastIndex); 
};

// 21. Array.map()
const arrayMapExample = () => {
    const array = [1, 2, 3];
    const squaredArray = array.map(num => num * num);

    console.log(squaredArray);
};

// 22. Array.pop()
const arrayPopExample = () => {
    const array = [1, 2, 3];
    const lastElement = array.pop();

    console.log(lastElement); 
    console.log(array); 
};

// 23. Array.push()
const arrayPushExample = () => {
    const array = [1, 2, 3];
    const newLength = array.push(4, 5);

    console.log(newLength); 
    console.log(array); 
};

// 24. Array.reduce()
const arrayReduceExample = () => {
    const array = [1, 2, 3, 4, 5];
    const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    console.log(sum);
};

// 25. Array.reduceRight()
const arrayReduceRightExample = () => {
    const array = [1, 2, 3, 4, 5];
    const sum = array.reduceRight((accumulator, currentValue) => accumulator + currentValue, 0);

    console.log(sum); 
};

// 26. Array.reverse()
const arrayReverseExample = () => {
    const array = [1, 2, 3];
    array.reverse();

    console.log(array);
};

// 27. Array.shift()
const arrayShiftExample = () => {
    const array = [1, 2, 3];
    const firstElement = array.shift();

    console.log(firstElement); 
    console.log(array); 
};

// 28. Array.slice()
const arraySliceExample = () => {
    const array = [1, 2, 3, 4, 5];
    const slicedArray = array.slice(2, 4);

    console.log(slicedArray); 
};

// 29. Array.some()
const arraySomeExample = () => {
    const array = [1, 2, 3, 4, 5];
    const hasEvenNumber = array.some(num => num % 2 === 0);

    console.log(hasEvenNumber); 
};

// 30. Array.sort()
const arraySortExample = () => {
    const array = [3, 1, 2];
    array.sort();

    console.log(array); 
};

// 31. Array.splice()
const arraySpliceExample = () => {
    const array = [1, 2, 3, 4, 5];
    array.splice(2, 1, 'a', 'b');

    console.log(array); 
};

// 32. Array.toLocaleString()
const arrayToLocaleStringExample = () => {
    const array = [1, 'a', new Date()];
    const arrayString = array.toLocaleString();

    console.log(arrayString); 
};

// 33. Array.toString()
const arrayToStringExample = () => {
    const array = [1, 'a', new Date()];
    const arrayString = array.toString();

    console.log(arrayString); 
};

// 34. Array.unshift()
const arrayUnshiftExample = () => {
    const array = [3, 4, 5];
    const newLength = array.unshift(1, 2);

    console.log(array); 
};

// 35. Array.values()
const arrayValuesExample = () => {
    const array = ['a', 'b', 'c'];
    const iterator = array.values();

    for (let value of iterator) {
        console.log(value); 
    }
};

// 36. Array.with()
// Note: This method is not standard in JavaScript.
const arrayWithExample = () => {
    const array = [1, 2, 5, 3, 4];
    const foundElement = array.with(2,10);

    console.log(array);
    console.log(foundElement); 
};

// 37. Array.toReversed()
// Note: This method is not standard in JavaScript.
const arrayToReversedExample = () => {
    const array = [1, 2, 3, 4, 5];
    const foundElement = array.toReversed();

    console.log(array);
    console.log(foundElement); 
};

// 38. Array.toSorted()
// Note: This method is not standard in JavaScript.
const arrayToSortedExample = () => {
    const array = [1, 2, 5, 3, 4];
    const foundElement = array.toSorted();

    console.log(array);
    console.log(foundElement); 
};

// 39. Array.toSpliced()
// Note: This method is not standard in JavaScript.
const arrayToSplicedExample = () => {
    const array = [1, 2, 5, 3, 4];
    const foundElement = array.toSpliced(1,2,8,9);

    console.log(array);
    console.log(foundElement); 
};





// Call Functions

arrayIteratorExample();
arrayAtExample();
arrayConcatExample();
arrayCopyWithinExample();
arrayEntriesExample();
arrayEveryExample();
arrayFillExample();
arrayFilterExample();
arrayFindExample();
arrayFindIndexExample();
arrayFlatExample();
arrayFlatMapExample();
arrayForEachExample();
arrayIncludesExample();
arrayIndexOfExample();
arrayJoinExample();
arrayKeysExample();
arrayLastIndexOfExample();
arrayMapExample();
arrayPopExample();
arrayPushExample();
arrayReduceExample();
arrayReduceRightExample();
arrayReverseExample();
arrayShiftExample();
arraySliceExample();
arraySomeExample();
arraySortExample();
arraySpliceExample();
arrayToLocaleStringExample();
arrayToStringExample();
arrayUnshiftExample();
arrayValuesExample();



// Note: These methods are not standard in JavaScript.

// arrayFindLastExample();
// arrayFindLastIndexExample();
// arrayWithExample();
// arrayToReversedExample();
// arrayToSortedExample();
// arrayToSplicedExample();

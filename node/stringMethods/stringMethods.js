// 1. String.prototype[@@iterator]()
const stringIteratorExample = () => {
    const str = 'hello';
    const iterator = str[Symbol.iterator]();

    for (let char of iterator) {
        console.log(char); 
    }
};

// 2. String.prototype.at()
const stringAtExample = () => {
    const str = 'abc';
    console.log(str.at(1)); 
};

// 3. String.prototype.charAt()
const stringCharAtExample = () => {
    const str = 'Hello';
    console.log(str.charAt(0)); 
};

// 4. String.prototype.charCodeAt()
const stringCharCodeAtExample = () => {
    const str = 'Hello';
    console.log(str.charCodeAt(1)); 
};

// 5. String.prototype.codePointAt()
const stringCodePointAtExample = () => {
    const str = '𠮷';
    console.log(str.codePointAt(0));
};

// 6. String.prototype.concat()
const stringConcatExample = () => {
    const str1 = 'Hello';
    const str2 = ' world!';
    console.log(str1.concat(str2)); 
};

// 7. String.prototype.endsWith()
const stringEndsWithExample = () => {
    const str = 'Hello world';
    console.log(str.endsWith('world')); 
};

// 8. String.prototype.includes()
const stringIncludesExample = () => {
    const str = 'Hello world';
    console.log(str.includes('world')); 
};

// 9. String.prototype.indexOf()
const stringIndexOfExample = () => {
    const str = 'Hello world';
    console.log(str.indexOf('world')); 
};

// 10. String.prototype.lastIndexOf()
const stringLastIndexOfExample = () => {
    const str = 'Hello world';
    console.log(str.lastIndexOf('o')); 
};

// 11. String.prototype.localeCompare()
const stringLocaleCompareExample = () => {
    const str1 = 'apple';
    const str2 = 'banana';
    console.log(str1.localeCompare(str2)); 
};

// 12. String.prototype.match()
const stringMatchExample = () => {
    const str = 'The quick brown fox';
    const regex = /quick/;
    console.log(str.match(regex)); 
};

// 13. String.prototype.matchAll()
const stringMatchAllExample = () => {
    const str = 'Hello 123, world 456';
    const regex = /\d+/g;
    const matches = [...str.matchAll(regex)];
    console.log(matches.map(match => match[0]));
};

// 14. String.prototype.normalize()
const stringNormalizeExample = () => {
    const str = '\u1E9B\u0323';
    console.log(str.normalize('NFC'));
};

// 15. String.prototype.padEnd()
const stringPadEndExample = () => {
    const str = 'Hello';
    console.log(str.padEnd(10, '.')); 
};

// 16. String.prototype.padStart()
const stringPadStartExample = () => {
    const str = '5';
    console.log(str.padStart(3, '0'));
};

// 17. String.prototype.repeat()
const stringRepeatExample = () => {
    const str = 'abc';
    console.log(str.repeat(3)); 
};

// 18. String.prototype.replace()
const stringReplaceExample = () => {
    const str = 'Hello world';
    console.log(str.replace('world', 'Universe')); 
};

// 19. String.prototype.replaceAll()
const stringReplaceAllExample = () => {
    const str = 'Hello world, hello universe';
    console.log(str.replaceAll('hello', 'hi'));
};

// 20. String.prototype.search()
const stringSearchExample = () => {
    const str = 'Hello world';
    console.log(str.search('world')); 
};

// 21. String.prototype.slice()
const stringSliceExample = () => {
    const str = 'Hello world';
    console.log(str.slice(6)); 
};

// 22. String.prototype.split()
const stringSplitExample = () => {
    const str = 'apple, banana, cherry';
    console.log(str.split(', ')); 
};

// 23. String.prototype.startsWith()
const stringStartsWithExample = () => {
    const str = 'Hello world';
    console.log(str.startsWith('Hello')); 
};

// 24. String.prototype.substr() 
const stringSubstrExample = () => {
    const str = 'Hello world';
    console.log(str.substr(6));
};

// 25. String.prototype.substring()
const stringSubstringExample = () => {
    const str = 'Hello world';
    console.log(str.substring(6)); 
};

// 26. String.prototype.toLocaleLowerCase()
const stringToLocaleLowerCaseExample = () => {
    const str = 'HELLO';
    console.log(str.toLocaleLowerCase()); 
};

// 27. String.prototype.toLocaleUpperCase()
const stringToLocaleUpperCaseExample = () => {
    const str = 'hello';
    console.log(str.toLocaleUpperCase());
};

// 28. String.prototype.toLowerCase()
const stringToLowerCaseExample = () => {
    const str = 'HELLO';
    console.log(str.toLowerCase()); // 
};

// 29. String.prototype.toString()
const stringToStringExample = () => {
    const str = 'Hello';
    console.log(str.toString()); 
};

// 30. String.prototype.toUpperCase()
const stringToUpperCaseExample = () => {
    const str = 'hello';
    console.log(str.toUpperCase()); 
};

// 31. String.prototype.trim()
const stringTrimExample = () => {
    const str = '   Hello world   ';
    console.log(str.trim()); 
};

// 32. String.prototype.trimEnd()
const stringTrimEndExample = () => {
    const str = '   Hello world   ';
    console.log(str.trimEnd()); 
};

// 33. String.prototype.trimStart()
const stringTrimStartExample = () => {
    const str = '   Hello world   ';
    console.log(str.trimStart());
};

// 34. String.prototype.valueOf()
const stringValueOfExample = () => {
    const str = new String('Hello');
    console.log(str.valueOf()); 
};


// Call each function
stringIteratorExample();
stringCharAtExample();
stringCharCodeAtExample();
stringCodePointAtExample();
stringConcatExample();
stringEndsWithExample();
stringIncludesExample();
stringIndexOfExample();
stringLastIndexOfExample();
stringLocaleCompareExample();
stringMatchExample();
stringNormalizeExample();
stringPadEndExample();
stringPadStartExample();
stringRepeatExample();
stringReplaceExample();
stringSearchExample();
stringSliceExample();
stringSplitExample();
stringStartsWithExample();
stringSubstrExample();
stringSubstringExample();
stringToLocaleLowerCaseExample();
stringToLocaleUpperCaseExample();
stringToLowerCaseExample();
stringToStringExample();
stringToUpperCaseExample();
stringTrimExample();
stringTrimEndExample();
stringTrimStartExample();
stringValueOfExample();


// Note: These methods are not standard in JavaScript.
// stringAtExample();
// stringReplaceAllExample();
// stringMatchAllExample();

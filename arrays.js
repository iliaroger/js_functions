/* 

Array()

creates a new array 

*/

const newArray = new Array(1, 4, 235, 23, 5);

/* 

Array.from()

creates a new array instance from an array like or iterable object

*/

const af = ['hello', 'dom', 'business'];

const copyAf = Array.from(af);

//console.log(copyAf);

/* 

Array.isArray()

returns true if the argument is an array

*/

const ia = ['hello', 'dom', 'business'];

const fakeIa = { hello: 'Hello' };

Array.isArray(ia); // true
Array.isArray(fakeIa); // false

/* 

Array.of()

creates array with passed arguments as elements 

*/

Array(2); // array of two elements

Array.of(2, 4, 5, 3, 1); // array with the following arguments as elements

/* 

Array.length()

checks the length of the array 

*/

const al = [1, 4, 543, 34235];

console.log(al.length); // returns length of the array

/* 

Array.at()

returns the element from the speciefied index 

method not usable

*/

const arrayAt = [2, 5, 39, 290, 403];

// arrayAt.at(2) -> 39

/* 

Array.concat()

creates a new array from the concatenation of two arrays

*/

const arrayCon1 = ['apple', 'bees'];
const arrayCon2 = ['cowboy', 'bull'];

const concatArray = arrayCon1.concat(arrayCon1); // ['apple', 'bees', 'cowboy', 'bull']

/* 

Array.copyWithin()

copies elements in the array and rearanges them as desired

first argument: insertion index
second argument: copy start index
third argument: copy end index (index -1)

*/

const arrayCopyWithin = ['a', 'b', 'c', 'd', 'e', 'f'];

const acw2 = arrayCopyWithin.copyWithin(0, 2, 3);

console.log(acw2);

// arrayAt.at(2) -> 39

/* 

Array.entries()

creates an iterable iterator object which contains key-value pairs 

*/

const exampleArray = ['a', 'b', 'c', 'd', 'e', 'f'];

for (let [index, value] of exampleArray.entries()) console.log(index, value);

/* 

Array.every()

tests every elements of condition based on the predefined function

*/

const testEvery = [4, 5, 34, 53, 94];

console.log(testEvery.every((e) => e >= 4)); // true

/* 

Array.fill()

fills an array with a specified number 

first argument: number that will be filled 
second argument: start index
thrid argument: end index (index -1)

*/

const fillArray = [1, 4, 5, 8, 9, 12, 23];

console.log(fillArray.fill(5, 0, 3));

/* 

Array.filter()

creates a new array based on the provided filter function

*/

const filterArray = [2, 5, 7, 9, 14, 23, 93];

const filterArray2 = filterArray.filter((e) => {
  if (e % 2 == 0) {
    return e;
  }
});

console.log(filterArray2);

/* 

Array.find()

finds the first value that satisfies the function criteria 

*/

const findArray = [2, 5, 6, 8];

const findResult = findArray.find((e) => {
  if (e > 5) {
    return e;
  }
});

console.log(findResult);

/* 

Array.findIndex()

returns index of element from search function

returns -1 if element cant be found

*/

const findIndex = ['b', 'd', 'e'];

const indexResult = findIndex.findIndex((e) => {
  if (e === 'd') return e;
});

console.log(indexResult);

/* 

Array.flat()

creates a new array and flattens the nested arrays back to main level

*/

const flatArray = ['hello', 'howdy', ['gg', ['deep']]];

const flatArrayNew = flatArray.flat(1);

console.log(flatArrayNew);

/* 

Array.flatMap()

combines map and flat function together. 

great for nested arrays 

*/

const flatArray2 = [
  [2, 4],
  [5, 6],
  [3, 1],
];

const newMapArray = flatArray2.flatMap((e) => {
  return e[0] * e[1];
});

console.log(newMapArray);

/* 

Array.forEach()

itterates through every element inside the array

returns undefined 

*/

const forEachArray = [2, 4, 534, 543, 323];

const forEachArray2 = forEachArray.forEach((e) => {
  // add element to the database
});

/* 

Array.includes()

checks whether the array includes a certain value

*/

const includeArray = ['smoothie', 'shake', 'fruit'];

const includeResult = includeArray.includes('smoothie');

console.log(includeResult);

/* 

Array.indexOf()

checks array for value and returns index

first parameter: string value
second parameter: searching starting point

*/

const indexOfArray = ['eon', 'wat', 'tesla', 'gmx', 'tesla', 'bmw'];

const indexOfResult = indexOfArray.indexOf('tesla', 3); // 4

console.log(indexOfResult);

/* 

Array.join()

concatenates string values together

*/

const joinArray = ['jon', 'smith', 'western'];

const joinResult = joinArray.join('-');

console.log(joinResult);

/* 

Array.keys()

returns a new array iterator object

*/

const keysArray = [2, 4, 7, 9, 12, 54];

const keysResult = keysArray.keys();

for (let key of keysResult) {
  console.log(key);
}

/* 

Array.lastIndexOf()

returns the last index inside array where the element can be found

*/

const lastIndexArray = ['loe', 'low', 'loe'];

const lastIndexResult = lastIndexArray.lastIndexOf('loe');

console.log(lastIndexResult);

/* 

Array.map()

creates new array and calls function on each element 

*/

const mapArray = [2, 5, 8, 1];

const mapResult = mapArray.map((e) => {
  return e * 2;
});

console.log(mapResult);

/* 

Array.pop()

removes last element of an array

*/

const popArray = [2, 6, 8, 34, 123];

popArray.pop();

console.log(popArray);

/* 

Array.push()

adds new element to the array and returns new array length

*/

const pushArray = [54, 435, 767];

const pushResult = pushArray.push(922);

console.log(pushArray);
console.log(pushResult);

/* 

Array.reduce()

returns a single value by combining the current and the previous value together

*/

const reduceArray = [2, 6, 7, 123, 504];

const reduceResult = reduceArray.reduce((prev, current) => {
  return prev + current;
});

console.log(reduceResult);

/* 

Array.reduceRight()

returns a single value by combining the current and the previous value together

starting from the right side

*/

/* 

Array.reverse()

reverses the order of the array

*/

const reverseArray = [2, 4, 7];
reverseArray.reverse();

console.log(reverseArray);

/* 

Array.shift()

removes the first element of an array and returns it

*/

const shiftArray = [2, 5, 78, 293];

const shiftResult = shiftArray.shift();

console.log(shiftResult);

/* 

Array.slice()

returns new array with copied values from start to end index
*/

const sliceArray = [2, 7, 9, 234, 658, 322];

const sliceResult = sliceArray.slice(1, 5);

console.log(sliceResult);

/* 

Array.some()

checks if an array contains truthy result based on provided function

*/

const someArray = [1, 3, 7, 9];

console.log(someArray.some((e) => e % 2 == 2));

/* 

Array.sort()

sorts array. custom function can be provided

*/

const sortArray = [222, 5, 9, 16, 87];

console.log(sortArray.sort());

/* 

Array.splice()

add or removes element in array at given index

*/

const spliceArray = [2, 65, 989, 234];

spliceArray.splice(4, 0, 5490);

console.log(spliceArray);

/* 

Array.toLocaleString()

converts all elements inside of an array to strings 

additional locale parameters can be added such as currency and language to i.e
dynamically convert interger values to region based currency with appropriate signs

*/

const toLocaleStringArray = [1, 'rush'];

const toLocaleStringResult = toLocaleStringArray.toLocaleString();

console.log(toLocaleStringResult);

/* 

Array.toString()

converts all elements inside of an array to strings

*/

const toStringArray = [239, 117, 'john'];

console.log(toStringArray.toString());

/* 

Array.unshift()

adds new elements to the beginning of the array and returns length

*/

const unshiftArray = [49, 943, 293];

console.log(unshiftArray.unshift(4, 7));
console.log(unshiftArray);

/* 

Array.values()

returns new array iterator with values of each element

*/

const valuesArray = [34, 7658, 234, 796];

for (const x of valuesArray.values()) {
  console.log(x);
}

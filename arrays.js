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

Array.concat()

creates a new array from the concatenation of two arrays

*/

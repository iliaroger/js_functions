// method to create an object from a construction function

function PlayerBase(name, hp, mana) {
  this.name = name;
  this.hp = hp;
  this.mana = mana;
}

const newPlayer = new PlayerBase('dave', 32, 43);

/* 
Object.assign()

Assigns properties from source to target. Also mutates the original object. 
*/
const target = { x: 2, y: 4 };
const source = { z: 21, p: 23 };

Object.assign(target, source);

console.log(target);

/* 
Object.create()

Creates a new object based on the object passed into the function. 
*/

const playerObject = {
  isPlayer: false,
  printStats: function () {
    console.log(`Player name: ${this.name}, is the player: ${this.isPlayer}`);
  },
};

const randi = Object.create(playerObject);

randi.name = 'Jeff';
randi.printStats();

/* 
Object.defineProperty()

Creates a new property inside an object. 
*/

const newProp = {
  name: 'Steve',
};

Object.defineProperty(newProp, 'location', {
  value: 'USA',
  writable: true,
});

console.log(newProp.location);

/* 
Object.defineProperties()

Creates new properties inside an object. 
*/
const newProp2 = {
  name: 'Davidson',
};

Object.defineProperties(newProp2, {
  bikeOwner: {
    value: true,
    writable: false,
  },
  harleyOwner: {
    value: true,
    writable: false,
  },
});

console.log(newProp2.bikeOwner);

/* 
Object.entries()

returns an array of properties in key-value notation  
*/

const dataSet = {
  data1: 'set1',
  data2: 'set2',
  data3: 'set3',
  data4: 'set4',
};

const getKeys = Object.entries(dataSet);

for (const [key, value] of getKeys) {
  console.log(key);
  console.log(value);
}

/* 
Object.freeze()

object can not be modified.
*/

let user2 = {
  caller: () => console.log('hello'),
  date: 'Tuesday',
};

function UserDefinition() {
  this.name = 'John';
  this.caller = function () {
    console.log(`Name: ${this.name}`);
  };
}

UserDefinition.prototype.secondCaller = function () {
  console.log(`Name is: ${this.name}`);
};

let user = new UserDefinition();

Object.freeze(user);

user.secondCaller();

/* 
Object.fromEntries()

transforms list of key-value pairs into an object.
*/

const names = new Map([
  ['call', 'caller'],
  ['call2', 'caller2'],
]);

let mapConverted = Object.fromEntries(names);

console.log(mapConverted);

/* 
Object.getOwnPropertyDescriptor()

returns configurations of a property in an object
*/

const object2 = {
  lettuce: 'yummy leafes',
  burger: 'juicy buger',
};

let propertyDescriptor = Object.getOwnPropertyDescriptors(object2, 'lettuce');

//console.log(propertyDescriptor);

/* 
Object.getOwnPropertyDescriptors()

returns configurations of all properties in an object
*/

let propertyDescriptor2 = Object.getOwnPropertyDescriptors(object2);
//console.log(propertyDescriptor2);

/* 
Object.getOwnPropertyNames()

returns all property names (keys) in an object
*/

let propertyNames = Object.getOwnPropertyNames(object2);
console.log(propertyNames);

/* 
Object.getOwnPropertySymbols()

returns symbols from the object
*/

const symbol1 = Symbol('a');

console.log(symbol1);

/* 
Object.getPrototypeOf()

checks whether an object inherited prototypes or properties from a different object
*/

let newObj = {};
let newObj2 = {
  caller: 'Boss',
};

let objNew = Object.create(newObj);

console.log(Object.getPrototypeOf(objNew) == newObj);

/* 
Object.is()

compares two values for equality. equal to ===
*/

let eq1 = {
  a: 'a',
};
let eq2 = {
  a: 'a',
};

console.log(Object.is(eq1, eq2));
console.log(Object.is(eq1, eq1));

/* 
Object.isExtensible()

checks whether an object is extensible 
*/

let caller = {
  id: 9823423,
};

console.log(Object.isExtensible(caller));

Object.freeze(caller);

console.log(Object.isExtensible(caller));

/* 
Object.isFrozen()

checks whether an object is frozen 
*/

let caller2 = {
  id: 9823423,
};

console.log(Object.isExtensible(caller2));

Object.freeze(caller2);

console.log(Object.isExtensible(caller2));

/* 
Object.isSealed()

checks whether an object is sealed 
*/

let caller3 = {
  id: 9823423,
};

console.log(Object.isExtensible(caller3));

Object.seal(caller3);

console.log(Object.isExtensible(caller3));

/* 
Object.keys()

returns array of keys in iteration order 
*/

let keyPeople = {
  name: 'Dave',
  age: 43,
  profession: 'acting, wrestling',
};

console.log(Object.keys(keyPeople));

/* 
Object.preventExtensions()

prevent adding new properties to an object
*/

let extensionObj = {
  id: 20938402,
};

Object.preventExtensions();

try {
  Object.defineProperty(extensionObj, 'tag', {
    value: 32,
  });
} catch (err) {
  console.log(err);
}

/* 
Object.seal()

prevent adding new properties and marking all existing properties as non-configurable 
*/

let personObject = {
  collection: 23,
};

Object.seal(personObject);

try {
  Object.defineProperty(personObject, 'source', {
    value: true,
  });
} catch (err) {
  console.log(err);
}

/* 
Object.setPrototypeOf()

sets the internal prototype property of an object to another object or null

performance issues. use Object.create() instead to map prototypes to a different object
*/

/* 
Object.values()

returns an array with values from the object in the correct iteration order
*/

let iterationObject = {
  caller: 'Baba Ganoush',
  spice: 10,
  delicious: true,
};

console.log(Object.values(iterationObject));

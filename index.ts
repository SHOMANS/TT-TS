let message: string = 'Hello World!';

console.log(message);

message = '1';

let age: number = 25;

function myPrint(text: string, age?: number): string {
  console.log(text);
  return text;
}

myPrint('asdfga');

const myFunction: (text: string, age?: number) => string = (text, age) => text;

console.log(myFunction('hello Zaqout'));

// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------

type customType = string | boolean;

// let myVariable: string | boolean = 'true';
let myVariable: customType = 'true';

myVariable = true;
myVariable = 'name';
// myVariable = 234;

// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------

// const mySecFunc: (obj: { name: string; age: number }) => void = (obj) => {};

// type params = { name: string; age: number };

interface params {
  name: string;
  age: number;
}

const mySecFunc: (obj: params) => void = (obj) => {};

mySecFunc({
  name: 'ibrahim',
  age: 60,
});

// mySecFunc({
//   name: 'ibrahim',
//   dage: 60,
// });

// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------

type strbol = string | boolean;
const arr: strbol[] = ['new', true];

// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------

enum gender {
  male,
  female,
}

const myGender: gender = gender.male;

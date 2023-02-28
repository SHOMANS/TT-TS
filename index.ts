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

const myGender: gender = gender.female;

type gender2 = 'male' | 'female' | 1 | 0;

const myGen: gender2 = 'female';

type week = 'sat' | 'sun' | 'mon' | 1;

const today: week = 'mon';

let something: string = '50';
let numbe: number = 2;

console.log(typeof something);

const myNewFunc = (number: week): week => {
  console.log(typeof number);
  return number;
};

myNewFunc(something as week);
myNewFunc(numbe as week);

// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------

type myObject = {
  readonly name: string;
  age: number;
  func?: (name: string) => void;
  // func(name: string): void;
};

const object3: myObject = {
  name: 'Anas',
  age: 20,
  // address: '',
  // func(name: string) {},
};

// object3.name = 'askdjfh';

type myObject2 = myObject & { address: string; func(name: string): number };

const object2: myObject2 = {
  name: 'Anas',
  age: 20,
  address: '',
  func: (name: string) => {
    return 1;
  },
};

// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------

type uni = 'UP' | 'AUG' | 'IUG';

interface myObject4 {
  readonly name: string;
  age: number;
  university: uni;
}

const object4: myObject4 = {
  name: 'Anas',
  age: 20,
  // address: '',
  university: 'AUG',
};

// object4.name = 'anas2';
object4.age = 25;

interface myObject5 extends myObject4 {
  address: string;
  title?: string;
}

const object5: myObject5 = {
  name: 'Anas',
  age: 20,
  address: '',
  // title: '',
  university: 'UP',
};

// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------

const func1: (param: number) => number = (param) => param;
const func2: (param: string) => string = (param) => param;
const func3: (param: boolean) => boolean = (param) => param;

type general = string | number | boolean;

const func4: (param: general) => general = (param) => param;

// -----------------------------------------------------------------------------------------

const genericFunction: <T, D>(param: T, param2: D) => T = (param) => param;

genericFunction<string, string>('hello', '');
genericFunction<number, boolean>(6, false);
genericFunction<week, number>('sat', 5);
genericFunction<gender, null>(gender.male, null);

// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------

class myArray<T> {
  constructor(private length: number = 0, private data: { [index: number]: T } = {}) {}

  getLength = () => {
    return this.length;
  };

  getItems = () => {
    return this.data;
  };

  push = (item: T) => {
    this.data = { ...this.data, [this.length]: item };
    this.length++;
  };
}

const arr2 = new myArray<number>();

console.log(arr2.getLength());
console.log(arr2.getItems());
arr2.push(1);
arr2.push(1);
arr2.push(1);
console.log(arr2.getLength());
console.log(arr2.getItems());

console.log('*'.repeat(20));

const arr3 = new myArray<number | string | boolean>();

console.log(arr3.getLength());
console.log(arr3.getItems());
arr3.push('first');
arr3.push('second');
arr3.push('third');
arr3.push(1);
arr3.push(false);
console.log(arr3.getLength());
console.log(arr3.getItems());

// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------

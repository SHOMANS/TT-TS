var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var message = 'Hello World!';
console.log(message);
message = '1';
var age = 25;
function myPrint(text, age) {
    console.log(text);
    return text;
}
myPrint('asdfga');
var myFunction = function (text, age) { return text; };
console.log(myFunction('hello Zaqout'));
// let myVariable: string | boolean = 'true';
var myVariable = 'true';
myVariable = true;
myVariable = 'name';
var mySecFunc = function (obj) { };
mySecFunc({
    name: 'ibrahim',
    age: 60
});
var arr = ['new', true];
// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
var gender;
(function (gender) {
    gender[gender["male"] = 0] = "male";
    gender[gender["female"] = 1] = "female";
})(gender || (gender = {}));
var myGender = gender.female;
var myGen = 'female';
var today = 'mon';
var something = '50';
var numbe = 2;
console.log(typeof something);
var myNewFunc = function (number) {
    console.log(typeof number);
    return number;
};
myNewFunc(something);
myNewFunc(numbe);
var object3 = {
    name: 'Anas',
    age: 20
};
var object2 = {
    name: 'Anas',
    age: 20,
    address: '',
    func: function (name) {
        return 1;
    }
};
var object4 = {
    name: 'Anas',
    age: 20,
    // address: '',
    university: 'AUG'
};
// object4.name = 'anas2';
object4.age = 25;
var object5 = {
    name: 'Anas',
    age: 20,
    address: '',
    // title: '',
    university: 'UP'
};
// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
var func1 = function (param) { return param; };
var func2 = function (param) { return param; };
var func3 = function (param) { return param; };
var func4 = function (param) { return param; };
// -----------------------------------------------------------------------------------------
var genericFunction = function (param) { return param; };
genericFunction('hello', '');
genericFunction(6, false);
genericFunction('sat', 5);
genericFunction(gender.male, null);
// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
var myArray = /** @class */ (function () {
    function myArray(length, data) {
        if (length === void 0) { length = 0; }
        if (data === void 0) { data = {}; }
        var _this = this;
        this.length = length;
        this.data = data;
        this.getLength = function () {
            return _this.length;
        };
        this.getItems = function () {
            return _this.data;
        };
        this.push = function (item) {
            var _a;
            _this.data = __assign(__assign({}, _this.data), (_a = {}, _a[_this.length] = item, _a));
            _this.length++;
        };
    }
    return myArray;
}());
var arr2 = new myArray();
console.log(arr2.getLength());
console.log(arr2.getItems());
arr2.push(1);
arr2.push(1);
arr2.push(1);
console.log(arr2.getLength());
console.log(arr2.getItems());
console.log('*'.repeat(20));
var arr3 = new myArray();
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

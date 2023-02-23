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
var myGender = gender.male;

//Primitive DataTypes
//These are call by value
// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt
const score = 98;
const scoreValue = 77;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
const id = Symbol('123');
const anotherId = Symbol('123');
const bigNumber = 4774483873736463645645656563534534;

console.log(id === anotherId); //false - because of the returned value is different

//JS IS A DYNAMICALLY TYPED LANGUAGE

//Reference Type(Non Primitive)
//Array, Objects, Functions

const heros = ["superman", "batman", "ironman"];

let obj = {
    name: "sunaina",
    age: 21,
}

//In Js we can treat functions as variables
const myFunction = function(){
    console.log("Hello World!");
}


//******************************* MEMORY IN JS **********************************/
//STACK(PRIMITIVE), HEAP(NON-PRIMITIVE)
let myUserName = "thewhizarttt";
let anotherName = myUserName;
anotherName = "troubleMaker";

console.log(myUserName);
console.log(anotherName);


let user = {
    email : "sunaina5555@gmail.com",
    upi : "user@ybl",
}

let newUser = user;
newUser.email = "sunaina1493@gmail.com"
console.log(user);
console.log(newUser);
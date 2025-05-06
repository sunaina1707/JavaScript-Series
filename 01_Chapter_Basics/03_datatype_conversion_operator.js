let score = "33abc";    //after conversion it gives NaN

/*
"33" => 33
"33abc" => NaN
null => 0
true => 1
false => 0
*/

//STEP1 : indentify the data type of the variable
console.log(typeof score); //or console.log(typeof(score))

//STEP2 : type casting
let valueInNumber = Number(score);

//STEP3 : indentify the type of the resultant variable
console.log(valueInNumber);


let isLoggedIn = "";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

/*
"" => false
*/


let someNumber = 12;
let stringNumber = String(someNumber);
console.log(typeof stringNumber);




//********************************OPERATIONS**********************************/
let value = 5;
let negValue = -value;
console.log(negValue);


let str1 = "sunaina";
let str2 = "singhmar";
let str3 = str1+str2;
console.log(str3);


//PROBLEMATIC SITUATIONS
console.log("1" + 2);
console.log(1 + "2");
//conversion flow will be dependent on the datatype encountered at first
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log(+true) //1
console.log(+"") //0

let gameChanger = 100;
//Study about prefix and postfix operators
gameChanger++;
console.log(gameChanger);
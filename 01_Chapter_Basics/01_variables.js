//VARIABLES

//In js we can declare constants using const keyword only.
const accountId = 144553;  
let accountEmail = "sunaina1483@gmail.com";
/*
Prefer not to use var
because of issue in block scope and functional scope
 */
var accountPassword = "sunaina1507@A"; 
accountCity = "Delhi"; //GLOBAL VARIABLE

//An unitialized variable is considered as undefined or its value is undefined
let accountState;
//accountId = 2 //not allowed


accountEmail = "sunaina1483@gmail.com";
accountPassword = 766556636;
accountCity = "Bengaluru";


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
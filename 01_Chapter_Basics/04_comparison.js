//BASIC COMPARISONS
// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2!=1);


console.log("2" > 1);
console.log("02" > 1);

/*
Reason : An equality check == and comparisons <, <=, >, >= work differently.
Comparisons convert null to a number(0), treating it as 0.
That's why null>=0 is true and null>0 is false.
*/
console.log(null>0);   //(1)
console.log(null==0);  //(2)
console.log(null>=0);  //(3)


//undefined gives false for all the 3 comparisons shown in (1), (2) and (3)


//=== - strict check, it compares values along with the dataType
console.log("2" === 2);  //false
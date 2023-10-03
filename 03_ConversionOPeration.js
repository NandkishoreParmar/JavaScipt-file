//************Conversion**********
// Ecma 262 // https://tc39.es/ecma262/#sec-abstract-operations
let score= "33abc"
console.log(typeof score); //string
let valueInNumber = Number(score)  // convert string to number 
console.log(typeof valueInNumber);// number
console.log(valueInNumber);//NaN

let score1= "33"
console.log(typeof score1);//string
let valueInNumber1 = Number(score1)  // convert string to number 
console.log(typeof valueInNumber1);//number
console.log(valueInNumber1);//33


/* conversion
"33"= 33
"33abc"=NaN
true= 1 ,false=0
*/

let isLoggedIn= 1
 let booleanIsLooggedIn= Boolean(isLoggedIn)
 console.log(booleanIsLooggedIn);//true

 /*
 1 = true , 0= false
 ""= false
 "hitesh"= true
 */

 let someNumber = 33
 let stringNumber= String(someNumber)
 console.log(stringNumber)//33
 console.log(typeof stringNumber)//string

 //****************Operations******************


 let value = 3
 let NegValue = -value
 console.log(NegValue);//-3

 console.log(2+2)//4
 console.log(2-2)//0
 console.log(2*2)//4
 console.log(2**3);//8
 console.log(2/3);//0.666666666...
 console.log(2%3);//2

 let str1= "hello"
 let str2= " nandkishore "
 let str3= str1 + str2
 console.log(str3);//hello nandkishore

 console.log("1" + 2); // 12
 console.log(1 + "2"); // 12
 console.log("1" + 2 + 2);//122
 console.log(1 + 2 + "2");//32

 console.log((3+4) * 5 % 3);//2
 console.log(+true );//1
  
 let gameCounter = 100
 ++gameCounter
 console.log(gameCounter);//101
 
 //link to study
 //https://262.ecma-international.org/5.1/#sec-11.4.3
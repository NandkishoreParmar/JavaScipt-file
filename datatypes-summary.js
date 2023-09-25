/* Primitive Datatypes

7 types : String, Number, Boolean, null, undefined,Symbol,BigInt

*/
const score= "100"  // string
const scoreValue= 100.3// number
const isLoggedIn= false//boolean
const outsideTemp= null// null
let userEmail// undefined

const id =Symbol('123')// symbol
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber= 52564365226565n//bigint 

/* Reference (Non primitive datatypes)

Array,Objects,Function
*/

const heroes=["shaktiman","naagraj","doga"] //arrays

let myobj= {//object
    name: "Nandkishore",
    age: 23,   
}



const myFunction = function() {
    console.log("hello world");// another function
}

//https://262.ecma-international.org/5.1/#sec-11.4.3

//++++++++++++++++++Memory+++++++++++++

// Stack(Primitive)   , Heap(Non primitive)
//    Stack(primitive)

let myYoutube="Nandkishore"
let anotherName= myYoutube
anotherName="chai aur code "

console.log(myYoutube);//Nandkishore
console.log(anotherName);//chai aur code

// Heap(non primitive)
let userOne={
    email: "nandkishoreparmar91@gmail.com",
    upi: "upi@ubl",

}
let userTwo = userOne
userTwo.email="nk@gmail.com"

console.log(userOne.email); // nk@gmail.com
console.log(userTwo.email);  // nk@gmail.com

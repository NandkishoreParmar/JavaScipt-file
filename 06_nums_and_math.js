//   Number 

const score = 400

console.log(score);// 400

const balance = new Number(100)
console.log(balance); // [Number: 100]

console.log(balance.toString())//100
console.log(balance.toString().length);//3
console.log(balance.toFixed(2));//100.00

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));//124
console.log(otherNumber.toPrecision(2));//1.2e+2// kaise aur kha use karna hy 
console.log(otherNumber.toPrecision(4));//123.9

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++++++++ Maths +++++++++

console.log(Math);//object [Math]{}
console.log(Math.abs(-4));// 4 
console.log(Math.abs(4));//  4

console.log(Math.round(4.6));//5
console.log(Math.min(4,2,1,3,5));//1
console.log(Math.max(4,2,1,5,6,3));
console.log(Math.floor(4.8));//4


console.log(Math.random());// random value aaigi har bar different 0 se 1 ke bich me 
console.log(Math.random() * 10 + 1);// 1 se kam ni aaigi 10 se jyada nhi 

const min= 10
const max= 20

console.log(Math.floor(Math.random() * (max-min+1))+ min);




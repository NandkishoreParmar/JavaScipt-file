// array declare kaise karte hy
const myArr= [0,1,2,3,4,5]
const myHeroes=["sakiman","nagraj"]
const myArr2= new Array(2,1,3,5)

console.log(myArr2[1]);//1
console.log(myArr2);//[2,1,3,5]

// Array Methods

myArr2.push(6)
console.log(myArr2);//[2,1,3,5,6]

myArr2.pop()
console.log(myArr2);//[2,1,3,5]

myArr2.unshift(9)
console.log(myArr2);//[9,2,1,3,5]

myArr2.shift()
console.log(myArr2);//[2,1,3,5]

console.log(myArr2.includes(7));//false
console.log(myArr2.indexOf(7));//-1
console.log(myArr2.indexOf(5));//3

const newArr= myArr2.join()
console.log(myArr2);//[2,1,3,5]
console.log(newArr);//2,1,3,5    string type

// slice  , splice

console.log("A",myArr2)// A [2,1,3,5]
const myn1= myArr2.slice(0,3)
console.log(myn1);//[2,1,3]
console.log("B",myArr2);//B [2,1,3,5]

const myn2= myArr2.splice(0,3)
console.log(myn2);//[2,1,3]

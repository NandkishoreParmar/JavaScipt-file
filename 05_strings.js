const name = "nandkishore"
const repoCount= 59
//console.log(name + repoCount + " values ");  //old tarika string ko concat karne ka 
 console.log(`hello my name is ${name} and my repo acount is ${repoCount}`);
 // naya tarika string ko add karne ka 
// hello my name is nandkishore and my repo acount is 59  
 

const gameName = new String('nandkishore-pr-ajanda')
 console.log(gameName[0]);//n
 console.log(gameName.__proto__);//{}

//lenght method
 console.log(gameName.length);//11
 // uppercase 
 console.log(gameName.toUpperCase());//NANDKISHORE
 //charAt
 console.log(gameName.charAt(2));//n
 // index
 console.log(gameName.indexOf('k'));//4

 //substring
 const newString = gameName.substring(0,4)
 console.log(newString);//nand

// slice 
 const anotherString = gameName.slice(-11,9)
 console.log(anotherString);//nandkisho    //n=-11  0=9
 

// trim
 const newStringOne = "   hitesh    "
 console.log(newStringOne);//   '    hitesh   '
 console.log(newStringOne.trim());//'hitesh'

 //replace
 const url= "https://nandkishore.com/nandkishore%20parmar"
 console.log(url.replace('%20','-'));

 // includes   " keyword available hy ke nhi string me "
 console.log(url.includes('nandkishore'))// true
 console.log(url.includes('nishu'))// false 

 // split
 console.log(gameName.split("-"));// [ 'nandkishore', 'pr', 'ajanda']
 


//     Dates 

let myDate = new Date()
console.log(myDate);//2023-10-04T08:41:51
console.log(myDate.toString());// wed oct 04 2023 14:11:51
console.log(myDate.toDateString());// wed oct 2023
console.log(myDate.toTimeString());//14:13:37 GMT+0530
console.log(myDate.toLocaleDateString());// 4/10/2023
console.log(myDate.toLocaleString());//  4/10/2023, 2:15:19 pm
console.log(myDate.toISOString());// 2023-10-04T08:46:52.366Z
console.log(typeof myDate);// object 

let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString());// mon jan 23 2023

let anotherDate=new Date(2023,1,23)
console.log(anotherDate.toDateString());// thu feb 23 2023

let SecondDate= new Date(2023,0,23,5,3)
console.log(SecondDate.toLocaleString());// 23/1/2023, 5:03:00 am

let newDate= new Date("01-14-2023")
console.log(newDate.toLocaleString());// 14/1/2023, 12:00:00 am

let myTimeStamp= Date.now()
console.log(myTimeStamp);// 1696411133671
console.log(myCreatedDate.getTime());//1674412200000
console.log(Date.now());//1696411133674
console.log(Math.floor(Date.now()/1000));//1696411133

let newDate1= new Date()
console.log(newDate);// 2023-01-13T18:30
console.log(newDate.getDay());//6
console.log(newDate.getMonth() + 1);//1

console.log(newDate.toLocaleString('default',{
    weekday: "long",
    day: "2-digit"

}))
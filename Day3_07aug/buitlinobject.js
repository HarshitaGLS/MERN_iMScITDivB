/*
let str1 = new String("have a nice day!!") // String Object

let str = "hello wel-come to Gujarat-Law-Society" //string
// console.log(str[0]) //str.charAt(0)

// let strarr = str1.split(" ") 
// console.log(strarr) //["have","a","nice","day"]

console.log(str.split("-"))

let strarr1 = str1.split(" ",2) 
console.log(strarr1)  //["have","a"]
*/

/*
console.log(Math.PI)
console.log(Math.max(2,9,12,8,4,6,8))
console.log(Math.min(2,9,12,8,4,6,8))

console.log(Math.random()) //0 to 1 (0.9999999)
//Math.round() -> 78.50 =>79 , 78.23=>78
//Math.floor() -> 78.50 =>78 , 78.23=>78
//Math.ceil() ->  78.50 =>79 , 78.23=>79
console.log(Math.random()*100) // 0 to 100 (99.9999)
console.log(Math.round(Math.random()*100)) // 0 to 100

// 5 to 15
console.log(Math.round(Math.random()*10 + 5)) 

let min=5
let max=15
console.log(Math.round(Math.random()*(max-min) + min)) // 5 to 15

//Captcha - A2@3p5

let data = ""
let randomstr  =  "abcdefghikljnmopqrstuvwyzABCDEFGHIJKLMNOPQRSTUVWXYZ0987654321@#$!*-+="
// let index = Math.floor(Math.random()*randomstr.length) // 0 to 49 //10.87 => 10
// data = randomstr.charAt(index) //randomstr[index]
// console.log(index) 
// console.log(data)
for(let i=1;i<=6;i++){
    data += randomstr.charAt(Math.floor(Math.random()*randomstr.length))
}
console.log(data)
*/

let today =  new Date() //current date

console.log(today) //2025-08-07T03:07:47.840Z ISO string

console.log(today.getFullYear()) //2025
console.log(today.getMonth()) //7

today.setFullYear(1999)



























 




















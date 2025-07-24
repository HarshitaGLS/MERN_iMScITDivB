let arr = [1,6,4,6]
let arr1 = new Array(7,1,5,8,9)
// console.log(`array = ${arr1}`)
// console.log(`array length = ${arr1.length}`) //5 0 index to 4
// console.log(`array = ${arr1[-1]}`) //undefined

// for(let i of arr1){
//     console.log(i)
// }

arr1.push(100,2) //7,1,5,8,9,100,2
arr1.unshift(9,6,5) //9,6,5,7,1,5,8,9,100,2
arr1.pop()//2
arr1.shift() //9
// arr1.splice(3,2)
// arr1.splice(3,2,50,21,12)
// arr1.splice(3,0,50,21,12)
// console.log(arr1)

// console.log(arr1.slice(-5,7))
// console.log(arr1.slice(-5,-7))
// arr1.forEach((val,index)=>{
//     console.log(`value = ${val} and index= ${index}`)
// })

// let newArr = arr1.map((item)=>item+5)
// console.log(newArr)


// let newArr1 = arr1.filter((item)=>item>5)
// console.log(newArr1)

// console.log(arr1.find((item)=>item==100))
//return 100 otherwise undefined

// console.log(arr1.findIndex((item)=>item==100))
//return index otherwise -1

//6,5,7,1,5,8,9,100
let total = arr1.reduce((prev,curr)=>prev+curr)
console.log(total)
//prev =0 curr =6 =6
//prev = 6 curr =5  =11
//prev =11  curr =7 =18
// reduce vs reduceRight
























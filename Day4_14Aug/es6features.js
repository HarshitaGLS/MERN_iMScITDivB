//destructuring assignments 
// let arr = [4,6,2,7]
// let a = arr[0]
// let b = arr[1]
// let c = arr[2]
// let d = arr[3]

// let [a,b,c,d] = arr
// let [x,y,,z]= arr
// let [x,y,,,z]= arr //x=4,y=6,z=undefined
// let [x,y,,,z=0]= arr //x=4,y=6,z=0
// let [p,...q] =arr  //p=4 , q = [4,2,7]
//... => rest parameter

// let Student = {fname:"Ram",lname:"Sharma",age:20,course:"iMscIT"}
// let {age,fname,lname} = Student
// console.log(fname)

// let {age,fn,lname} = Student
// console.log(fn)//undefined
// let {age,fname:fn,lname} = Student
// console.log(fn)//Ram

// let {age,course , ...fullName} = Student
//fullName = {fname:"Ram",lname:"Sharma"}
// console.log(fullName);


////////////////////////////////////////////

let arr = [4,6,2,7]
// let arr1 = [7,arr]//[7,[4,6,2,7]]

// let arr1 = [7,...arr]//[7,4,6,2,7]
// console.log(arr1) //[7,4,6,2,7]

// let arr2 = arr //[4,6,2,7]
// arr2[2] = 13
// console.log(arr);//[4,6,13,7]
// console.log(arr2);//[4,6,13,7]

// let arr2 = [...arr] //[4,6,2,7]
// arr2[2] = 13
// console.log(arr);//[4,6,2,7]
// console.log(arr2);//[4,6,13,7]

let Student = {fname:"Ram",lname:"Sharma",age:20,course:"iMscIT"}
let Teacher = {...Student,fname:"Meera",exp:15}
Teacher.salary = 60000
console.log(Student)
console.log(Teacher)




















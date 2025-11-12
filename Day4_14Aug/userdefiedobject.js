let obj = {fname:"Ram",lname:"Sharma",age:30}
console.log(obj.fname)
console.log(obj["fname"])

for(let key in obj){
    console.log(key) 
    console.log(obj[key]) 
}

//destructuring object
let {fname} = obj
console.log(fname)












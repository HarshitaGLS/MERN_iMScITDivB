let obj = {fname:"Ram",lname:"Sharma",age:30}

//convert js object into JSON string
let jsonstr = JSON.stringify(obj)
console.log(obj)
console.log(jsonstr)

//convert JSON string into JS object
let jsobj = JSON.parse(jsonstr)
console.log(jsobj);



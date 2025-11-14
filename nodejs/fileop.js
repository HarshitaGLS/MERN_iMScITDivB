
import fs from 'fs'
/*fs.readFile("about.html",(err,data)=>{
    if(err) throw err
    else console.log(data.toString())
})
console.log("last line") */


// const data = fs.readFileSync("about.html")
// console.log(data)
// console.log("last line")

///////////////////////////////////////////////////////////

// writeFile

fs.writeFile("file.txt","this is my text file",(err)=>{
    if(err) throw err
    console.log("File written successfully")
})










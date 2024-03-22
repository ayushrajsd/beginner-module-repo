const fs = require('fs')


console.log("starting")


// const content = Math.random().toString(36).repeat(1000000)
// fs.writeFileSync('file1.txt', content)


// const data1 = fs.readFileSync('file1.txt')
// console.log("data of file1", data1.toString())


fs.readFile('file1.txt', function(err, data) {
   if (err) {
       console.log("error", err)
   } else {
       console.log("data of file1", data.toString())
   }
})


const data2 = fs.readFileSync('file2.txt')
console.log("data of file2", data2.toString())


console.log("ending")  

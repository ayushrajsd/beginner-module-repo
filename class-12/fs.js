const fs = require('fs')

console.log("starting")

// const content = Math.random().toString(36).repeat(1000000)
// fs.writeFileSync('file1.txt', content)

// const data1 = fs.readFileSync('file1.txt')
// console.log("data of file1", data1.toString())

console.time("file1")
fs.readFile('file1.txt', (err, data) => {
    if (err) {
        console.log("error", err)
    } else {
        console.log("data of file1")
        console.timeEnd("file1")
        fs.readFile('file2.txt',(err, data) => {
            if (err) {
                console.log("error", err)
            } else {
                // console.log("data of file2", data.toString())
                console.log("data of file2", data.toString())
                console.timeEnd("file2")
            }
        
        })
    }
})

console.time("file2")
// fs.readFile('file2.txt',(err, data) => {
//     if (err) {
//         console.log("error", err)
//     } else {
//         // console.log("data of file2", data.toString())
//         console.log("data of file2", data.toString())
//         console.timeEnd("file2")
//     }

// })

console.log("ending")   


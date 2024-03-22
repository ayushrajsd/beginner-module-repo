console.log("hello from external file")
var myFirstVariable = "Hello from my first variable";
console.log(myFirstVariable);
myFirstVariable = true
console.log(myFirstVariable);
var myFirstVariable = "another valriable"
console.log(myFirstVariable);

var a // delcare a variable
a = 5 // initialize a variable
var b = 5 // declare and initialize a variable
var a = "hello" // re-declare a variable

let val = "hello"
val = "bye" // re-assign a variable allowed
console.log(val)
// let val = "some other val" // re-declare a variable not allowed

const pi = 3.14
//  pi = 3.15 // re-assign a variable not allowed
    console.log(pi)

const obj = {
    name:"ayuhs",
    age:34
}    
const arr2 = [obj,1,function(){},"hello",true,"unity in diversity",{}]
console.log(arr2[0].age)

function myFirstFunction(name){
    var name = "mr.X"
    console.log("Hi",name, "Hello from my first function")
}

myFirstFunction("ayush")

console.log(typeof Symbol('just me'))

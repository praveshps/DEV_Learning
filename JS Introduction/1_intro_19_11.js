//console.log('Hello from the browser')
//console.log('Hello from Node') --> type in terminal node intro.js

//variables declaration with var, let and const
var a // first the variable is initialized with undefined
console.log(a)
a = 20
console.log(a)
//JS is a synchronous language i.e it executes line by line.
//JS is single threaded 
//Js is a dynamic language
a = 'Hello'   // different values in same variable

//var has many problems
//1. Redeclaration is allowed, but should not be (like in let)
var a = null
var a = true       //allowed
console.log(a)
//  redefining is fine to have

//2. Scope - function scoping and block scoping
if(10%2==0){
    var c = 2
    console.log(c)
}
console.log(c)

//var is function scoped
//let is block scoped

//NEVER USE var
//ALWAYS USE let

//const - used for constant
const VAL = 23
console.log(VAL)

// loops and if else
let flag = true
var num = 13

for(let i = 2 ; i*i<num ; i++){
    if(num % i == 0){
        flag = false
        break
    }
}
    if(flag)
        console.log(num,'num is Prime')
    else
        console.log('The number is not Prime')

//STRINGS and STRING methods
let str = 'pepcoders'
console.log(str)

//string methods
//.length
console.log(str.length)

// extracting a part of string - slice(start,end) ,substr(start,length)
let slicedStr = str.slice(3,7)  //code  - last index is excluded
console.log(slicedStr)

let subString = str.substr(3,4)
console.log(subString)  // code

//replace('old','new')
let sayHello = 'Hello Mukesh'
console.log(sayHello)

let sayBye = sayHello.replace('Hello','Bye')
console.log(sayBye)

//str.toUpperCase()
//str.toLowerCase()

//.concat('value')
let str1 = 'Hello'
let str2 = 'World'
let concatenatedStr = str1.concat(' ',str2)
console.log(concatenatedStr)

//.trim()
let string = '     Hello Duniya     '
console.log(string.trim())
//functions

function add(a, b){
    //console.log(a+b)
    return a+b
}

let sum = add(5,6) // function invokation
console.log(sum)

//In JS functions a.k.a first class citizens
//i.e. you can treat functions as variables in JS

//function expression
let sayHi = function(){
    console.log('Hi')
}//anonymous functions

sayHi()

//IIFE (Immediately invoked function expression)
let add2 = (function(a,b){
    console.log(a+b)
})(10,20)


//Arrays
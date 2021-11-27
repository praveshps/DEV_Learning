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


//ARRAYS -> ordered collection i.e.indexed
let arr = [] //array is initializes with []
arr = [1, 'Hello', true] //in JS array can hold multiple types of data
console.log(arr)

//ARRAY METHODS
let cars = ['BMW','JAGUAR','MERCEDES','AUDI']
console.log(cars)

//replacing value in an array
cars[1] = 'BENTLEY'
console.log('Replaced - ',cars)

//adding new value in an array
cars[4] = 'BBT'
console.log(cars)

//length of an array
console.log(cars.length)

//ARRAY MANIPULATION METHODS
//pop()
let ele = cars.pop()
console.log(ele)
console.log(cars)

//push()
cars.push('FERRARI')
console.log(cars)

//shift()
let ele1 = cars.shift()
console.log(ele1)
console.log(cars)

//unshift()
cars.unshift('LAND ROVER')
console.log(cars)

//OBJECTS -> key-value pair
//object declaration
let obj = {}
console.log(obj)

let cap = {
    firstName : 'Steve',
    lastName : 'Rogers',
    friends : ['Bucky', 'Tony Stark', 'Dr. Banner'],
    isAvenger : true,
    age : 150,
    address : {
        state : 'New York',
        city : 'Manhatten'
    },

    sayHi : function fn(){
        console.log('Cap says Hi')
    }
}

console.log(cap)

//Dot notation
console.log(cap.firstName)

//Bracket notation
console.log(cap['age'])

cap.sayHi()

//Update object
cap.isAvenger = false
console.log(cap)

//create property in object
cap.movies = ['Age of Ultron','EndGame','First Avenger']
console.log(cap)

//delete property of an object
delete cap.age
console.log(cap)

//Special loop (For-in loop)
for(let key in cap){
    console.log('Key -> ',key , 'Values ->',cap[key])
}
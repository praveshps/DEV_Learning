function add(a,b) {
    console.log('The Sum is ',a+b);
}

function substract(a,b) {
    console.log('The Difference is ',a-b);
}

function mul(a,b) {
    console.log('The Product is ',a*b);
}

function div(a,b) {
    console.log('The Division is ',a/b);
}

module.exports = {
    addition : add,
    substraction : substract,
    multiply : mul,
    division : div
}

//module.exports is a Object provided by Node.js
//using which you can export your function in key-value pair(object)

//you will use functions (defined by you) with the help of the keys defined in module.exports
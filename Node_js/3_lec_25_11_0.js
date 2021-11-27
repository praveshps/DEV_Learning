//NODE MODULES
//1. child_process -> used to create sub-process within a script to perform diff tasks
//used to create sub-processes using Node(parent process)
//other uses also (handling websites and browsers)
const cp = require('child_process')

//used to create sub-processes using Node(parent process)
// console.log('Tryng to open Calculator')
// cp.execSync('calc')
// console.log('Calculator opened')

// console.log('Trying to open VS code')
// cp.execSync('code')
// console.log('VS code opened')

//other uses also (handling websites and browsers)
// console.log('Trying to open chrome')
// cp.execSync('start chrome')
// cp.execSync('start chrome https://www.pepcoding.com/')

//let us run other apps/file using cp
let output = cp.execSync('node 3_test.js') // returns data in Buffer-form (Binary form)
console.log(""+output); //returns output in String form due to use of ""+


//2. OS 
const os = require('os')

//used to put checks for ex. in games, one can check if system is compatible or not
console.log(os.arch())
console.log(os.platform())
console.log(os.networkInterfaces())
console.log(os.cpus())

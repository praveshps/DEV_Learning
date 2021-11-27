//Node Modules are used to perform diff tasks as required
//3. fs -> used to read, write, update and delete in a file
//********FILES */
const fs = require('fs')

//to read a file
let content = fs.readFileSync('3_f1.txt')
console.log('This is f1 data -> '+content);

//write in a file, if exists (otherwise create a file and write (replace) in it)
fs.writeFileSync('3_f2.txt','written via write func')

//update in a file
// adds data to the previously written file
//fs.appendFileSync('3_f1.txt',' appended using append func')

//delete a file, by passing its path
//fs.unlinkSync('3_f2.txt')
console.log('file removed')


//*******DIRECTORIES */

//create a directory
//fs.mkdirSync('3_myDirectory')

//remove a directory
//fs.rmdirSync('3_myDirectory')

//to check whether a directory exists or not
let doesExists = fs.existsSync('3_myDirectory')
console.log(doesExists)

//stats of a path -> folder insights (details/contents)
let statsOfPath = fs.lstatSync('3_myDirectory')
//console.log(statsOfPath)

//to check whether a passed path is a file or not
console.log('is File? ',statsOfPath.isFile())

//to check whether a passed path is a folder or not
console.log('is Directory? ',statsOfPath.isDirectory())

//gives content of the folder
let folderPath = 'E:\\PepCoding\\DEV\\JS Introduction\\3_myDirectory'
let folderContent = fs.readdirSync(folderPath)
console.log('directory content '+folderContent)

//4. PATH modules
const path = require('path')

//getting srcFilePath and destFolder
let srcFilePath = 'E:\\PepCoding\\DEV\\JS Introduction\\3_myDirectory\\3_f5.txt'
let destFolder = 'E:\\PepCoding\\DEV\\JS Introduction\\3_myDirectory2'

//gets the actual name of the file or directory
let toBeCopied = path.basename(srcFilePath)
console.log(toBeCopied)

//create actual destination path
let destPath = path.join(destFolder,toBeCopied)
console.log(destPath)

//copying files
fs.cpSync(srcFilePath,destPath)
console.log("file copied")
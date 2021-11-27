//4. path module

const path = require('path')

//returns the extention of a file at a given path
let ext = path.extname('E:\\PepCoding\\DEV\\JS Introduction\\4_f1.txt')
console.log('Extention of the file -> '+ext)

//returns basename of a file at a given path
let basename = path.basename('E:\\PepCoding\\DEV\\JS Introduction\\4_f1.txt')
console.log('Basename of the file -> '+basename)

//returns the path of the current directory
console.log(__dirname)

//returns the path of the current file
console.log(__filename)
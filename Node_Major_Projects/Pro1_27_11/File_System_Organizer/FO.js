//Features
//If you have numerous Files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory according to their extension

//use of fs_module and path_module

//command line takes input in the form of array (process array)
//[0] -> node , [1] -> filename , [2] -> our input
// let input = process.argv[2]
// console.log(input)git


const fs = require('fs')
const path = require('path')

//slice is used to extract the commands and path we have passed
let inputArr = process.argv.slice(2)
//console.log(inputArr)

let command = inputArr[0]

let types = {
    media: ["mp4", "mkv", "mp3", 'jpg', 'jpeg'],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb", 'msi']
}

switch (command) {
    case 'tree':
        treeFn()
        break
    case 'organize':
        organizeFn(inputArr[1])
        break
    case 'help':
        helpFn()
        break
    default:
        console.log('Please enter a valid command')
        break
}

function treeFn() {
    console.log('tree Function Implemented');
}

//1. takes dirPath as input
function organizeFn(dirPath) {
    //console.log('Organize Function Implemented');   
    let destPAth;

    if (dirPath == undefined) {
        console.log('Please enter a Directory Path');
        return
    }
    else {
        let doesExist = fs.existsSync(dirPath)
        //console.log(doesExist);

        if (doesExist == true) {
            //2. create an Organized Files directory
            //E:\PepCoding\DEV\Node_Major_Projects\Pro1_27_11\test_folder\organized_files
            destPAth = path.join(dirPath, 'organized_files')
            if (fs.existsSync(destPAth) == false) {
                fs.mkdirSync(destPAth)
            }
            else {
                console.log('The File already exists.');
            }
        }
        else {
            console.log('Please enter a valid path.');
        }
    }
    organizeHelper(dirPath);
}

function organizeHelper(src, dest) {
    let childNames = fs.readdirSync(src)
    //console.log(childNames);
    for (let i = 0; i < childNames.length; i++) {
        let childAddress = path.join(src, childNames[i])
        let isFile = fs.lstatSync(childAddress).isFile()

        if (isFile == true) {
            let fileCategory = getCategory(childNames[i])
            console.log(childNames[i] + ' belongs to ' + fileCategory);
        }
    }
}

function getCategory(name) {
    let ext = path.extname(name)
    //console.log(ext);

    //removing . before extension
    ext = ext.slice(1)
    //console.log(ext);

    for (let type in types) {
        let cTypeArr = types[type]
        //console.log(cTypeArr);

        for (let i = 0; i < cTypeArr.length ; i++) {
            if (ext == cTypeArr[i]) {
                return type
            }
        }
    }
}

function helpFn() {
    console.log(`List of all the commands:
                1)Tree Command - node FO.js tree <dir>
                1)Organize Command - node FO.js organize <dir>
                1)Help Command - node FO.js help `);
}
const { dir } = require('console');
const figlet = require('figlet')

figlet('Hello World!', function (err, data) {
    if(err){
        console.log('Something went wrong...');
        console.dir(err);
        return
    }
    console.log(data);
})

// | | | | ___| | | ___   \ \      / /__  _ __| | __| | |
// | |_| |/ _ \ | |/ _ \   \ \ /\ / / _ \| '__| |/ _` | |
// |  _  |  __/ | | (_) |   \ V  V / (_) | |  | | (_| |_|
// |_| |_|\___|_|_|\___/     \_/\_/ \___/|_|  |_|\__,_(_)
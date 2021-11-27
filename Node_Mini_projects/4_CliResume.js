var inquirer = require('inquirer');
const cp = require('child_process')

function displayDetails(){
inquirer
  .prompt([
    /* Pass your questions in here */
    //in form of object
    {
        type : 'list',
        name : 'Selection',
        choices : ['About','Skills','Projects','Academics'] //in form of array
    }
  ])
  .then((choices) => {
    // Use user feedback for... whatever!!
    if(choices.Selection == 'About'){
        console.log('I am Pravesh, ASE at TCS.');
        displayNext()
    }
    else if(choices.Selection == 'Skils'){
        console.log(`Skills:
                    Java
                    SQL
                    JS`)
        displayNext()
    }
    else if(choices.Selection == 'Projects'){
        // console.log(`Project 1
        //              Project 2`);
        cp.execSync('start chrome https://github.com/mrinal1224')
        displayNext()
    }
    else{
        console.log('My Marks');
        displayNext()
    }
  })
}
 
displayDetails()

function displayNext(params) {
    var inquirer = require('inquirer');
        inquirer
        .prompt([
            /* Pass your questions in here */
            //in form of object
            {
                type : 'list',
                name : 'GoBack',
                choices : ['Back'] //in form of array
            }
        ])
        .then((choices) => {
            // Use user feedback for... whatever!!
            if(choices.GoBack == 'Back'){
                displayDetails()
            }
        })
        .catch((error) => {
            if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            } else {
      // Something else went wrong
    }
  });
}
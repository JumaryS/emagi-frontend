
// first youll need to bring the files 

const search = require('./emagi-search.js');
const words = require('./emagi-words.js');
const symbols = require('./emagi-symbols.js');
const random = require('./emagi-random.js');
const emagify = require('./emagify.js')
//ill need a variable to hold my 
let start= process.argv.slice(2)
// console.log(start)
// let wordInput = getInput[0]


// const usersInput = function(){ the function is not needed 
    // youll need to find what comes after start(process.argv) so ill need an if statement
    if(start.includes('convert')){
        console.log(emagify(start.slice(1)))
        }// ill need an else if statment when 
    else if (start.includes('search')){
        console.log(search(start.slice(2)))
    }else if(start.includes('random')){
        console.log(random(start.slice(3)))
    }
    
// }
// console.log(usersInput())

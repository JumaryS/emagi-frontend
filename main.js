
// first youll need to bring the files 

const search = require('./emagi-search.js');
const symbols = require('./emagi-symbols.js');
const random = require('./emagi-random.js');
const emagify = require('./emagify.js')
//ill need a variable to hold my 
let start= process.argv.slice(2)
// console.log(start)
// let wordInput = getInput[0]


// const usersInput = function(){ the function is not needed 
    // youll need to find what comes after start(process.argv) so ill need an if statement
    if(start[0].includes('convert')){
        console.log(emagify(start.slice(1)))
        }// ill need an else if statment when 
    else if (start.includes('search')){
        console.log(search(start.slice(1)))
    }
    else if(start[0].includes('random')){
        console.log(random(symbols))
    }
    else{
        console.log("please put a valid input")
    }
    
    
    
    // return start
    
// }
// console.log(usersInput())
